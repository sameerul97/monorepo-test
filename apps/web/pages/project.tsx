import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

export default function project() {
  return (
    <div>
      <h1>Project Page</h1>
      <p className="title">
        Go to <Link href="/">Home page!</Link>
      </p>
      <Button>Buttom in project page from shared package via Storybook</Button>
    </div>
  );
}
