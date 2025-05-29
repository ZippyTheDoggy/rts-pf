import { ServicesList } from ".";

export class ModuleLogger {
	private _module_name: string;

	constructor(module_name: string) {
		this._module_name = module_name;
	}

	public info(...args: unknown[]): void {
		print(`[${this._module_name}]: `, ...args);
	}
	public warn(...args: unknown[]): void {
		warn(`[${this._module_name}]: `, ...args);
	}
	public error(...args: unknown[]): void {
		error(`[${this._module_name}]: ${(args as string[]).join(" ")}`);
	}
}

export abstract class ServiceModule {
	_module_name: string;
	logger: ModuleLogger;
	services?: ServiceList;

	constructor(module_name: string) {
		this._module_name = module_name;
		this.logger = new ModuleLogger(module_name);
	}
	public InitServices(services: ServiceList) {
		this.services = services;
	}

	public OnInitialized?(): void;
}

export type ServiceList = ServicesList;
