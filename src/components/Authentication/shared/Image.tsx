/**
 * Image Component
 *
 * The Image component displays an image in a responsive layout for large screens.
 *
 * Example Usage:
 * ```tsx
 * import Image from './Image';
 *
 * function MyComponent() {
 *   return (
 *     <div>
 *       {/* Your other content goes here * /}
 *       <Image />
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {JSX.Element} - The rendered Image component.
 */
const Image = (): JSX.Element => {
  return (
    <div className="relative hidden   flex-1 lg:flex items-center justify-center w-full bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]   ">
      <div className=" flex flex-col items-center justify-center backdrop-blur-sm h-full w-full bg-black bg-opacity-30 ">
        <div className="text-white  text-9xl tracking-widest drop-shadow-md font-extrabold">
          DISCORD
          <span className="opacity-70">.</span>
        </div>
      </div>
    </div>
  );
};

export default Image;
