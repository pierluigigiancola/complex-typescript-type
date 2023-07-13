{
  const navigate = <T extends RouteName>(
    routeName: T,
    parameters: TRouterParam[T]
  ) => {
    // ...
  };

  navigate("loggedIn", {
    idUtente: "asda",
  });

  const Router = {
    home: "/",
    login: "/login",
    loggedIn: "/:idUtente/",
    post: "/:idUtente/post/:idPost/",
  } as const;

  type TRouter = typeof Router;

  type RouteName = keyof TRouter;

  type ParseParametersFromUrl<T extends string> =
    T extends `${infer _}:${infer Param}/${infer Rest}`
      ? { [K in Param | keyof ParseParametersFromUrl<Rest>]: string }
      : {};

  type TRouterParam = {
    [K in keyof TRouter]: ParseParametersFromUrl<TRouter[K]>;
  };
}
