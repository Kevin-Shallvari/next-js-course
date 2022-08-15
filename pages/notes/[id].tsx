import React from 'react'
import { useRouter } from 'next/router'

const NoteWithId = () => {

    const { query: { id } } = useRouter()

    return (
        <div>Note page with id= {id} </div>
    )
}

export default NoteWithId