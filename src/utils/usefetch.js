import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [ data, setData ] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await fetch(url);
                let data = await res.text();

                setData(data);
                setIsLoading(false);
            } catch(err) {
                setError(err);
                setIsLoading(false);
            }
        };

        getData();
    }, [url]);

    return [ data, error, isLoading ];
}

export default useFetch;