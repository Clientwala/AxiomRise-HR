import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Axiom Rise | IT Consulting & Managed Services',
    short_name: 'Axiom Rise',
    description: 'Empowering SMEs with Intelligent IT Solutions in Singapore',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617', // Dark slate suitable for the brand
    theme_color: '#020617',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
