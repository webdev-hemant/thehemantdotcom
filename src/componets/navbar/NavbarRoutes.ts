export interface InavbarRoutes {
  name: string;
  route: string;
}

export const navbarRoutes: InavbarRoutes[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Education",
    route: "/education",
  },
  {
    name: "Experience",
    route: "/experience",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Contact Me",
    route: "/contact_me",
  },
];
