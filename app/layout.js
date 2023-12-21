import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"

import './globals.css';
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: 'GVarelis',
  description: 'Freelance architecture works by Georgios Varelis',
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOKS_KEY,
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className='text-white'>
            <Header />
            {children}
        </body>
      </html>
    </StoryblokProvider>
  )
}
