import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: [],
        error: null
    })

    useEffect(() => {
        let isMounted = true;

        setRequest({
            loading: true,
            data: [],
            error: null
        })

        axios.get(url)
        .then(response => {
            if (isMounted) {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: null
                })
            }
        })
        .catch((error) => {
            if (isMounted) {
                setRequest({
                    loading: false,
                    data: [],
                    error: error.message || 'Something went wrong'
                })
            }
        })

        return () => {
            isMounted = false;
        }
    }, [url])

    return request
}

export default useAxiosGet

