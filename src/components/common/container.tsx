import { cn } from "@/lib/utils";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div className={cn("max-w-6xl mx-auto p-4 sm:px-8 ", className)}>
      {children}
    </div>
  );
}
