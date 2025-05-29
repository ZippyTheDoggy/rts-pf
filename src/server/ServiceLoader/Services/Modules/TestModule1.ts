import { ServiceModule } from "../Structs";

export default class TestModule1 extends ServiceModule {
	// Service Properties
	// ...

	// Constructor & ServiceModule abstract functions
	constructor() {
		super("TestModule1");
	}
	public OnInitialized(): void {
		this.logger.info("TestModule1 initialized successfully");
	}

	// Service Methods
	public Test() {
		this.logger.info(`Test Module 1 tested.`);
	}
	public TestModule2() {
		this.logger.info(`Calling Test on Module 2`);
		this.services!["TestModule2"].Test();
	}
}
