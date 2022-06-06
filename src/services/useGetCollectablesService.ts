import axios from "axios";
import { useEffect, useState } from "react";
import { Collectable } from "../types/Collectable";
import { Service } from "../types/Service";

const useGetCollectablesService = (endpoint: string) => {
    const [result, setResult] = useState<Service<Collectable[]>>({
        status: 'loading'
    });


    useEffect(() => {
        axios.get('https://acnhapi.com/v1a/' + endpoint + '/')
            .then(response => response.data)
            .then(response => setResult({ status: 'loaded', payload: response }));
    }, [endpoint]);
    return result;
};

export default useGetCollectablesService;
