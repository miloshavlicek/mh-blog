interface MenuItem {
  href: string;
  title: string;
  hidden?: boolean;
}

interface Menu {
  items: MenuItem[];
}

export const menuDefinition: Menu = {
  items: [
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/events",
      title: "Akce",
    },
    {
      href: "/books",
      title: "Tipy na knihy",
    },
    {
      href: "/about",
      title: "O klubu",
    },
  ],
};
