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
    name: "Categories",
    path: "",
    subList: [
      { name: "All", path: "/shop/all" },
      { name: "Best Sellers", path: "/shop/best-sellers" },
      { name: "New Arrivals", path: "/shop/new-arrivals" },
      { name: "Fantasy", path: "/shop/fantasy" },
      { name: "Sci-Fi", path: "/shop/scifi" },
    ],
  },
];
