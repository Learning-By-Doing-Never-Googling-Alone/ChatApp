type FeatureProps = {
  children: React.ReactNode;
};

const Feature = ({ children }: FeatureProps) => {
  return (
    <div className="mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Feature;
