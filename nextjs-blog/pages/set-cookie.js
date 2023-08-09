import useCookies from 'react-cookie/cjs/useCookies';
import { useState } from "react";
import Layout from '../components/layout';

export default function SetCookies() {
    const [cookies, setCookie] = useCookies(['cookie-data']);
    const [cookieData, setCookieData] = useState("");
    const [cookieDataStored, setCookieDataStored] = useState("");

    const setCookieHandler = (event) => {
        event.preventDefault();
        setCookie('cookie-data', cookieData, {});
        setCookieDataStored(cookieData);
    };

    return (
        <Layout>
            Cookie data stored: {cookieDataStored}
            <form onSubmit={setCookieHandler}>
                <label htmlFor="cookieData">Cookie Data</label>
                <input
                    id="cookieData"
                    type="cookieData"
                    value={cookieData}
                    onChange={(e) => setCookieData(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </Layout>
    );
}