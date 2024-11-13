import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={inter.className}>
          <div className="flex flex-row">{assistantId ? children : <Warnings />}</div>
      </body>
    </html>
  );
}
