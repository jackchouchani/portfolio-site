import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebWizardry",
    short_name: "WW",
    icons: [
      {
        src: "/web-app-manifest-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "maskable"
      },
      {
        src: "/web-app-manifest-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  };
} 