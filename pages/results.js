import { APIController } from '../apiController';

export default function Results({ data }) {
  return <h1>{data.name}</h1>;
}
export async function getServerSideProps() {
  const results = await fetch(
    'https://nextjszbn6cq-llpy--3000.local-corp.webcontainer.io/api',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await results.json();

  return { props: { data } };
}
