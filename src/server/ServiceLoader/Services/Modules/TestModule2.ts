import { ServiceModule } from "../Structs";

export default class TestModule2 extends ServiceModule {
	// Service Properties
	// ...

	// Constructor & ServiceModule abstract functions
	constructor() {
		super("TestModule2");
	}
	public OnInitialized(): void {
		this.logger.info(`TestModule2 initialized successfully`);
	}

	// Service Methods
	public Test() {
		this.logger.info(`Test Module 2 tested.`);
	}
	public TestModule1() {
		this.logger.info(`Calling Test on Module 1`);
		this.services!["TestModule1"].Test();
	}
}
