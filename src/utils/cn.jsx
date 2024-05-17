import { cn } from "./your/path/to/cn"; // Import the cn function

const Component = () => {
  const isActive = true;
  const className = cn("bg-blue-500", { "text-red-500": isActive });

  return <div className={className}>This is a styled div.</div>;
};

export default Component;
