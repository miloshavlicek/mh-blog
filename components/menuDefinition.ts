type MenuItem = {
  href: string;
  title: string;
  hidden?: boolean;
};

type Menu = {
  items: MenuItem[];
};

export const menuDefinition: Menu = {
  items: [
    {
      href: "/posts",
      title: "Blog",
      hidden: true,
    },
    {
      href: "/events",
      title: "Akce",
    },
    {
      href: "/books",
      title: "Tipy na knihy",
      hidden: true,
    },
  ],
};
