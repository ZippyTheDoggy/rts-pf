import { Services, LoadServices } from "./Services";

print(`Loading Services...`);
LoadServices();
print(`Services loaded successfully.`);

Services["TestModule1"].TestModule2();
Services["TestModule2"].TestModule1();
