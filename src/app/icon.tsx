import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';
 
// Image metadata
export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';
 
// Image generation
export default async function Icon() {
  // Read the logo from the public directory
  const filePath = path.join(process.cwd(), 'public', 'logo.png');
  const fileBuffer = fs.readFileSync(filePath);
  const base64Image = fileBuffer.toString('base64');
  const dataUri = `data:image/png;base64,${base64Image}`;

  // Generate a strictly circular icon for Google Search and Favicon
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%', // Restores the circular cut-off!
          overflow: 'hidden',
          padding: '0px',
        }}
      >
        <img
          src={dataUri}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image stretches to fill the circle completely without blank space
          }}
          alt="AxiomRise Circular Logo"
        />
      </div>
    ),
    { ...size }
  );
}
