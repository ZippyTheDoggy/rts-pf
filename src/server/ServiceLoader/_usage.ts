/*
USAGE:
    import Services from "...";
    Services["ServiceName"].ServiceMethod(...args);
    Services["ServiceName"].ServiceProperty;
    Services["ServiceName"].ServiceProperty = value;

SERVICE MANAGEMENT:
    To add a new service (using PlayerDataService as an example):
        1. Create a new file in ServiceLoader/Services/Modules: `PlayerDataService.ts`
        2. Export a default class that extends ServiceModule: `export default class PlayerDataService extends ServiceModule {};`
        3. In ServiceLoader/Services/index.ts:
            a. Add the type to `type ModuleInfo` as such: `PlayerDataService: PlayerDataService;`
            b. In the function `LoadServices()`, instantiate the service:
            `services["PlayerDataService"] = new PlayerDataService() as PlayerDataService;`

ServiceModule:
    - This is a base class for all services.
    - It provides some utility functions, and a logger.
    - There are abstract methods automatically called if defined:
        - `OnInitialized`: Called when the service is initialized.

*/
