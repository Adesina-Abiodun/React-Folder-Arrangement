import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

import { getArticles } from '../../services/article';


export const Banner = () => {

    const [article, setArticle] = useState([])
    const [loading , setLoading] = useState(true);

    const fetchArticles = async() =>{
        try{
         setLoading(true)
        const res = await getArticles();
        console.log(res)
        setLoading(false)
        setArticle(res?.data?.news)
        }catch(err){
             setLoading(false)
            console.log(err)
        }
    }

    useEffect(()=>{
      fetchArticles();
    },[])

if(loading) return (<div>Loading .....</div>)

  return (
    
    <div>
        {
            article.map((data, i) => (
                <div key={i} >
                    <h5> {data?.title} </h5>
                    <p> {data.body} </p>
             </div>
            ))
        }
    </div>
  )
} 