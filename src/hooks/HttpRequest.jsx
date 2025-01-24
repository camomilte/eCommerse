import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: null
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setRequest({
                loading: false, 
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setRequest({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    return request
}

export default useAxiosGet
