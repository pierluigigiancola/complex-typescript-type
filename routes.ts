const Routes = {
    // ^?
  login: "/login",
  loggedIn: "/:idUtente",
  profile: "/:idUtente/profile",
  favorites: "/:idUtente/favorites",
  post: "/:idUtente/post/:idPost",
} as const;

type TRoutes = typeof Routes;

type RouteLabel = keyof TRoutes;
    // ^?

type RouteValue = TRoutes[RouteLabel];
    // ^?


const enum RouteEnum {
  loggedIn = "/:idUtente",
  post = "/:idUtente/post/:idPost",
  profile = "/:idUtente/profile",
  favorites = "/:idUtente/favorites",
}

type RouteEnumLabel = keyof typeof RouteEnum;
    // ^?

type RouteEnumValue = `${RouteEnum}`;
    // ^?

type X = typeof RouteEnum.loggedIn;