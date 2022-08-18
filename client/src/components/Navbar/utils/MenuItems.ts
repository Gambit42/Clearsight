export const MenuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop/all",
  },
  {
    name: "Genres",
    path: "",
    subList: [
      { name: "All", path: "/shop/all" },
      { name: "Fantasy", path: "/shop/fantasy" },
      { name: "Sci-Fi", path: "/shop/sci-fi" },
    ],
  },
];
