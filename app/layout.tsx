import "styles/globals.css";
import { ReactNode } from "react";
import Providers from "./Providers";

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className="bg-white-1">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
