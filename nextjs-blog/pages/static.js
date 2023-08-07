import Layout from '../components/layout';
import Head from 'next/head';

export default function Test({ time }) {
  return (
    <Layout>
      <Head>
        <title>Static</title>
      </Head>
      <div>
	  Page built on {time}
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return {
    props: {
      time
    },
  };
}
