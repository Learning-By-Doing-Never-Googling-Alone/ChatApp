import { Link } from "react-router-dom";
import useServers from "../../hooks/useServers";

/**
 * Sidebar component that displays navigation links and icons.
 * @component
 */

import Image1 from '../../assets/images/discord-mark-white.png'
import Image2 from '../../assets/images/Add-Server.png'
import Image3 from '../../assets/images/Discovery.png'

const Sidebar = () => {
  // Hook to receive Servers
  const { servers } = useServers();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-raisin-black px-4">
          <div className="flex-1">
            {/* Discord Logo */}
            <div className="flex items-center justify-center py-4 border-b-dark-charcoal border-b-2">
              <img
                className="h-8 w-auto"
                src={Image1}
              />
            </div>

            {/* Navigation Links */}
            <nav
              aria-label="Sidebar"
              className="flex flex-col items-center space-y-3 py-6"
            >
              {servers &&
                servers.map((server) => (
                  <Link
                    key={server.name}
                    to="/dashboard"
                    className="flex items-center rounded-lg"
                  >
                    <img className="w-12 h-12 object-cover" src={server.icon} />
                    <span className="sr-only">{server.name}</span>
                  </Link>
                ))}
            </nav>

            {/* Add Server Button */}
            <img
              className="cursor-pointer"
              src={Image2}
            />

            {/* Discovery Button */}
            <img
              className="my-4 cursor-pointer"
              src={Image3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
