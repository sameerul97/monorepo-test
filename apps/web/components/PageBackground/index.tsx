import React, { Children, CSSProperties } from 'react';

function PageBackground({ children }: { children?: React.ReactNode }) {
  const style: CSSProperties = {
    background:
      'linear-gradient(180deg, #0BED73 0%, rgba(255, 255, 255, 0.29) 100%)',
    height: '40vh',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  };
  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default PageBackground;
