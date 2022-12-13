import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { Button } from 'ui';

export default function Web({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const [user, setUser] = useState(null);

  // const fetchUser = async () => {
  //   const response = await fetch('http://localhost:1337/api/users');
  //   const data = await response.json();

  //   setUser(data);
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  if (!user) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>Web www</h1>
      <h1 className="title">
        Read <Link href="/project">this page!</Link>
      </h1>
      <p>{JSON.stringify(user)}</p>
      <Button>Hello World</Button>
    </div>
  );
}

export async function getStaticProps() {
  // const response = await fetch(`${process.env.STRAPI_URL}/api/users`);
  // const data = await response.json();

  return {
    props: {
      user: { data: 'd' },
    },
  };
}
