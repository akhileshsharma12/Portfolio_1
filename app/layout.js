import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Girish Bhavekar Portfolio",
  description: "AI Specialist | Research | Professor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" foxified="">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Dr. Girish Bhavekar, Artificial Intelligence Research, Machine Learning Professor, Academic Portfolio, Research Publications, IEEE Conferences, AI in Healthcare, Blockchain Research, Electrical Engineering, Indian Researcher, G.H. Raisoni University, ORCID, Google Scholar, AI Researcher India" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
