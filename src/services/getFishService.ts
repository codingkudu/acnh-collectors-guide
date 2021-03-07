import axios from "axios";
import { useEffect, useState } from "react";
import { Fish } from "../types/Fish";
import { Service } from "../types/Service";


export interface Fishs {
    results: Fish[];
}

const GetFishService = () => {
    const [result, setResult] = useState<Service<Fish[]>>({
        status: 'loading'
    });


    useEffect(() => {
        axios.get('https://acnhapi.com/v1a/fish/')
            .then(response => response.data)
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);
    return result;
};

export default GetFishService;
