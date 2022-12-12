import { useEffect, useState } from 'react';
import { Button } from 'ui';

export default function Web() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await fetch('http://localhost:1337/api/users');
    const data = await response.json();

    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>Web www</h1>
      <p>{JSON.stringify(user)}</p>
      <Button>Hello World</Button>
    </div>
  );
}
