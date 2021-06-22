import React  from 'react'
import Prismic from '@prismicio/client'
import { client } from '../prismic-configuration'
import { useQuery } from 'react-query'

const getData = async ()=>{
    return client.query(
        Prismic.Predicates.any("document.type", ["page"])
    ).then(res => {
        // res is the response object, res.results holds the documents
        return res.results
    })
    }


const Home = () => {
    const { isLoading, isError, data, error } = useQuery('menuItems', getData)

console.log(data)
    return (
        <div>
    <p>Hello Garten World</p>

    {isLoading && (
        <h3>LOADING</h3>
    ) }

    {error && (
        <h3>{error}</h3>
    )}

    {
        data && !isLoading &&  data.map(item => {
console.log(item)
            return (
            <div>
               {item.first_publication_date}

                {item.data.body.map(bodyitem => bodyitem.items.map(item=>item.plan_title.map(title => (<p>
                    {title.text}
                </p>
                    ))))}

            </div>
        )}
        )
    }
        </div>
    )
}

export default Home
