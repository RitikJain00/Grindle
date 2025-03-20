import { Suspense, ReactNode } from "react";
import { BarLoader } from "react-spinners";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="px-5">
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
