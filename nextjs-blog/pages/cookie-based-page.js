import Layout from '../components/layout';
import Head from 'next/head';

// export const config = {
//     runtime: 'experimental-edge',
// };

export default function Test({ response }) {
    return (
        <Layout>
            <Head>
                <title>Cookie Based Page</title>
            </Head>
            <div>
                Got this response: {response}
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const cookieValue = context.req.cookies['cookie-data'];
    let response = await fetch(`http://16.170.233.168:3000/api/cookie-based-response?cookieValue=${cookieValue}`);
    const data = await response.json();
    return {
        props: data,
    };
}
