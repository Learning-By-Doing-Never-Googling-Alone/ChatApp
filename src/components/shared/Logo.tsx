/**
 * Logo Component
 *
 * The Logo component displays the application logo.
 *
 * @param {LogoProps} props - The props for the Logo component.
 * @returns {JSX.Element} - The rendered Logo component.
 */
import React from "react";
import Logo1 from "../../assets/images/discord-logo-blue.png";

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className }: LogoProps): JSX.Element => {
  return (
    <img
      className={className}
      src={Logo1}
      alt="Application Logo"
    />
  );
};

export default Logo;
