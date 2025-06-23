'use client';

import Image from 'next/image';

export default function EzeeLearningLogo() {
  return (
    <Image
      src="/logo-footer.png"
      alt="EzeeLearning Logo"
      width={300}
      height={100}
      style={{
        height: '100px',
        width: 'auto',
        display: 'block',
      }}
      priority
    />
  );
}
