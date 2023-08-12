import { Link } from "react-router-dom";

/**
 * Sidebar component that displays navigation links and icons.
 * @component
 */
const Sidebar = () => {
  // Array of navigation items with names, hrefs, and icons
  const navigation = [
    {
      name: "server-1",
      href: "#",
      icon: "https://i.ibb.co/h8C6k3R/Server-2.png",
    },
    {
      name: "server-2",
      href: "#",
      icon: "https://i.ibb.co/T23mfB5/Server-1.png",
    },
    {
      name: "server-3",
      href: "#",
      icon: "https://i.ibb.co/6ZMPFcH/Server.png",
    },
    {
      name: "server-4",
      href: "#",
      icon: "https://i.ibb.co/mFLFR9Q/Server-Icon-1.png",
    },
  ];

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-raisin-black px-4">
          <div className="flex-1">
            {/* Discord Logo */}
            <div className="flex items-center justify-center py-4 border-b-dark-charcoal border-b-2">
              <img
                className="h-8 w-auto"
                src="https://i.ibb.co/V9KPjS7/discord-mark-white.png"
              />
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Sidebar"
              className="flex flex-col items-center space-y-3 py-6"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center rounded-lg"
                >
                  <img className="w-12 h-12 object-cover" src={item.icon} />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Add Server Button */}
            <img
              className="cursor-pointer"
              src="https://i.ibb.co/12qq3Ly/Add-Server.png"
            />

            {/* Discovery Button */}
            <img
              className="my-4 cursor-pointer"
              src="https://i.ibb.co/Jq3Ff6s/Discovery.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
