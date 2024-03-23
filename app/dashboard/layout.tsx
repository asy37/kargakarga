import "styles/globals.css";
import { ReactNode } from "react";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";


interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
              <div className="h-full w-full relative bg-white-1">
                  <Header />
                <div className="flex h-[847px]">
                    <Sidebar />
                    <div className="absolute right-0 top-[72px] w-[1565px] h-[847px] flex overflow-auto px-8">
                    {children}
                    </div>
                </div>
            </div>
 
 
  );
}
