import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./context/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beatifuul mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="color-scheme" content="dark" />
      <meta name="theme-color" content="#141c24" />
      <meta name="author" content="Joel Persson" />

      <meta
        name="keywords"
        content="Wild Oasis,
            Wild Oasis Website,
            The Wild Oasis Website,
            Nextjs project,
            Thrilling Experiences,
            Hotel,
            Travel,
            Adventure Trips, 
            Jonas Schmedtmann, 
            Joel, 
            Joel Persson"
      />

      <meta
        name="description"
        content="Explore The Wild Oasis Website by Joel Persson. Explore hidden gems, thrilling experiences, and craft your perfect wild getaway."
      />
      <meta name="robots" content="index, follow" />
      {/* <link
        rel="canonical"
        href="https://the-wild-oasis-booking-Joel.vercel.app"
      /> */}

      <meta property="og:type" content="website" />
      {/* <meta
        property="og:url"
        content="https://the-wild-oasis-booking-Joel.vercel.app"
      /> */}
      <meta property="og:title" content="The Wild Oasis Website" />
      <meta
        property="og:description"
        content="Explore The Wild Oasis Website by Joel Persson. Explore hidden gems, thrilling experiences, and craft your perfect wild getaway."
      />
      {/* <meta
        property="og:image"
        content="https://the-wild-oasis-booking-Joel.vercel.app/thumbnail.png"
      /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Wild Oasis Website" />
      <meta
        name="twitter:description"
        content="Explore The Wild Oasis Website by Joel Persson. Explore hidden gems, thrilling experiences, and craft your perfect wild getaway."
      />
      {/* <meta
        name="twitter:image"
        content="https://the-wild-oasis-booking-Joel.vercel.app/thumbnail.png"
      /> */}

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta
        name="apple-mobile-web-app-title"
        content="The Wild Oasis Booking"
      />
      <meta name="application-name" content="The Wild Oasis Website" />
      <meta property="og:site_name" content="The Wild Oasis Website" />
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-2 py-4 md:px-8 md:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
