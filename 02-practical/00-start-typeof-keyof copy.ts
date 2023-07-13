{
  const navigate = (path: RouteName) => {
    // ...
  };

  navigate("loggedIn");

  const Router = {
    home: "/",
    login: "/login",
    loggedIn: "/:idUtente",
    post: "/:idUtente/post/:idPost",
  };

  type TRouter = typeof Router;

  type RouteName = keyof TRouter;
}
