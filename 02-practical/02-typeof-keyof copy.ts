{
  const navigate = <T extends RouteName>(
    routeName: T,
    parameters: ParameterOf<T>
  ) => {
    // ...
  };

  type Parameter = {
    idUtente?: string;
    idPost?: string;
  };

  navigate("home", {});

  navigate("loggedIn", { idUtente: "123" });

  navigate("post", { idPost: "34", idUtente: "123" });

  type ParameterOf<T extends RouteName> = TRouterParameter[T];

  type LoggedInParam = ParameterOf<"post">;

  type TRouterParameter = {
    home: Record<string, never>;
    login: {};
    loggedIn: {
      idUtente: string;
    };
    post: {
      idUtente: string;
      idPost: string;
    };
    friend: {
      idUtente: string;
      idFriend: string;
    };
  };

  const Router = {
    home: "/",
    login: "/login",
    loggedIn: "/:idUtente",
    post: "/:idUtente/post/:idPost",
    friend: "/:idUtente/friend/:idFriend",
  } as const;

  type TRouterMap = {
    [K in RouteName]: ParsePathParameter<TRouter[K]>;
  };

  type ParsePathParameter<T extends string> =
    T extends `${infer _}:${infer Param}/${infer Rest}`
      ? { [K in Param | keyof ParsePathParameter<Rest>]: string }
      : T extends `${infer _}:${infer Param}`
      ? { [K in Param]: string }
      : Record<string, never>;

  type TRouter = typeof Router;

  type RouteName = keyof TRouter;
}
