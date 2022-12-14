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
      <h1>Next JS Github Page test with Monorepo</h1>
      <p className="title">
        Go to <Link href="/project">Project page!</Link>
      </p>
      <p>
        <strong>Data from <u>getStaticProps</u> </strong>
        {JSON.stringify(user)}
      </p>
      <Button>Buttom in home page from shared package via Storybook</Button>
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
