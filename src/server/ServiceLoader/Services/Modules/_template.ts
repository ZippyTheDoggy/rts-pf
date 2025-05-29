import { ServiceList, ServiceModule } from "../Structs";

export default class TemplateModule extends ServiceModule {
	// Service Properties
	// ...

	// Constructor & ServiceModule abstract functions
	constructor() {
		super("TemplateModule");
	}
	public OnInitialized(): void {
		this.logger.info(`${this._module_name} initialized successfully`);
	}

	// Service Methods
	// ...
}
