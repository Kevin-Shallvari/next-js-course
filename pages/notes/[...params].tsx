import { useRouter } from 'next/router'
import React from 'react'

const CatchAllParams = () => {

    const { query: { params } } = useRouter()

    return (
        <div>Catch all params {params}</div>
    )
}

export default CatchAllParams