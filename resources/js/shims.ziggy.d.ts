import { Config, InputParams, Router } from "ziggy-js";

declare global {
  function route(): Router;
  function route(
    name: keyof ZiggyLaravelRoutes,
    params?: InputParams,
    absolute?: boolean,
    customZiggy?: Config
  ): string;
}
