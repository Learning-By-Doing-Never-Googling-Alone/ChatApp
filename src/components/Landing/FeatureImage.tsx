import { classNames } from "../../utils/Helpers";

type FeatureImageProps = {
  imageUrl: string;
  alignImage: "left" | "right";
};

const FeatureImage = ({ imageUrl, alignImage }: FeatureImageProps) => {
  const imageClasses = classNames(
    "w-full",
    "rounded-xl",
    "shadow-xl",
    "ring-1",
    "ring-black",
    "ring-opacity-5",
    "lg:absolute",
    alignImage === "right" ? "lg:right-0" : "lg:left-0", // Conditional class based on alignImage
    "lg:h-full",
    "lg:w-auto",
    "lg:max-w-none"
  );
  return <img className={imageClasses} src={imageUrl} />;
};

export default FeatureImage;
