import { navigate } from "./lib";

export const getNavigation = <T>(from: T) => {
  return {
    navigate,
  };
};
