// Individual module imports
import TestModule1 from "./Modules/TestModule1";
import TestModule2 from "./Modules/TestModule2";

export type ServicesList = { [K in keyof ModuleInfo]: ModuleInfo[K] };

type ModuleInfo = {
	TestModule1: TestModule1;
	TestModule2: TestModule2;
};
const services: ServicesList = {
	TestModule1: new TestModule1() as TestModule1,
	TestModule2: new TestModule2() as TestModule2,
} as ServicesList;
export const Services = services;

export function LoadServices() {
	for (const [_, service] of pairs(services)) {
		service.InitServices(services);
		if (service.OnInitialized !== undefined) service.OnInitialized();
	}
}
