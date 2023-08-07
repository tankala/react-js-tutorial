import Layout from '../components/layout';
import Head from 'next/head';

export default function Test({ time }) {
  return (
    <Layout>
      <Head>
        <title>SSR</title>
      </Head>
      <div>
	  Page built on {time}
      </div>
    </Layout>
  );
}

export function getServerSideProps() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return {
    props: {
      time
    },
  };
}
