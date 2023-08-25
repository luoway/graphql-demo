import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'

const gqlBooks = gql`
    query {
        books {
            title
        }
    }
`

function DisplayBooks() {
    const { loading, error, data } = useQuery(gqlBooks)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return data.books.map((item: { title: string }, index: number) => (
        <p key={index}>{item.title}</p>
    ))
}

export function RequestBtn() {
    let [show, setShow] = useState(false)
    
    return (
        <>
            <button onClick={()=>setShow(!show)}>graphQL</button>
            {show ? <DisplayBooks /> : ''}
        </>
    )
}
