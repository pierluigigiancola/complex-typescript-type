{
  const navigate = <
    From extends RouteName,
    To extends RouteName,
    State extends TRouterProperty[To]["state"]
  >(
    routeName: To,
    parameters: ParametersWithOptional<
      TRouterProperty[From]["parameters"],
      TRouterProperty[To]["parameters"]
    >,
    options?: {
      state?: State;
      replace?: boolean;
      query?: Record<string, any>;
    }
  ) => {
    // ...
  };

  const Router = {
    home: "/",
    login: "/login",
    loggedIn: "/:idUtente",
    post: "/:idUtente/post/:idPost",
  } as const;

  type TRouter = typeof Router;
  type RouteName = keyof TRouter;

  type ParseUrlParameters<T extends string> =
    T extends `${infer _}:${infer Param}/${infer Rest}`
      ? { [K in Param | keyof ParseUrlParameters<Rest>]: string }
      : T extends `${infer _}:${infer Param}`
      ? { [K in Param]: string }
      : {};

  //#region State
  type RouteObj = Record<RouteName, any>;

  type WrapperRouteObj<T extends Partial<RouteObj>> = T;

  type LoggedInState = {
    accessToken: string;
    refreshToken: string;
  };

  type RouteState = WrapperRouteObj<{
    loggedIn?: LoggedInState;
  }>;

  //#endregion

  type TRouterProperty = {
    [K in RouteName]: {
      path: K;
      parameters: ParseUrlParameters<TRouter[K]>;
      state: K extends keyof RouteState ? RouteState[K] : never;
    };
  };

  type ParametersWithOptional<ParamsFrom, ParamsTo> = Omit<
    ParamsTo,
    keyof ParamsFrom
  > &
    Partial<Pick<ParamsTo, keyof ParamsFrom & keyof ParamsTo>>;

  const routingFrom = <From extends RouteName>(from: From) => {
    return {
      navigate: navigate as <
        To extends RouteName,
        State extends TRouterProperty[To]["state"]
      >(
        routeName: To,
        parameters: ParametersWithOptional<
          TRouterProperty[From]["parameters"],
          TRouterProperty[To]["parameters"]
        >,
        options?: {
          state?: State;
          replace?: boolean;
          query?: Record<string, any>;
        }
      ) => void,
    };
  };

  const { navigate: navigateFromLoggedIn } = routingFrom("loggedIn");

  navigateFromLoggedIn("post", { idPost: "12" });

  const { navigate: navigateFromHome } = routingFrom("home");

  navigateFromHome("post", { idPost: "12" });
}
