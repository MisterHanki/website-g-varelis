import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"

import './globals.css';

export const metadata = {
  title: 'GVarelis',
  description: 'Freelance architecture works by Georgios Varelis',
}

storyblokInit({
  accessToken: 'your-access-token',
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
