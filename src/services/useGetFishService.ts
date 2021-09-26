import axios from "axios";
import { useEffect, useState } from "react";
import { Fish } from "../types/Fish";
import { Service } from "../types/Service";
// @ts-ignore
import { data } from "../resources/fish.ts";


export interface Fishs {
    results: Fish[];
}

const useGetFishService = () => {
    const [result, setResult] = useState<Service<Fish[]>>({
        status: 'loading'
    });


    useEffect(() => {
        axios.get('https://acnhapi.com/v1a/fish/')
            .then(response => response.data)
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'loaded', payload: data }));
    }, []);
    return result;
};

export default useGetFishService;
