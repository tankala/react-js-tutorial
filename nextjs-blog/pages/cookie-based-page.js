import Layout from '../components/layout';
import Head from 'next/head';

export const config = {
    runtime: 'experimental-edge',
};

export default function Test({ suggestedItems }) {
    return (
        <Layout>
            <Head>
                <title>Cookie Based Page</title>
            </Head>
            <div>
                Got this top recommendation: {suggestedItems[0]}
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const cookieValue = context.req.cookies['cookie-data'];
    let response = await fetch(`https://backend.piptrends.com/recommended-packages/${cookieValue}`);
    const data = await response.json();
    return {
        props: data,
    };
}
