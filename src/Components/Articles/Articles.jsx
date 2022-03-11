import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/Config'
import DeleteArticle from './DeleteArticle'

const Articles = () => {
  const [articles ,setArticles] = useState([])
  useEffect(() => {
    const articleRef = collection(db, "Articles")
    const q = query(articleRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setArticles(articles)
      console.log(articles)
    })
  }, [])
  return (
    <div className='row' style={{
      margin: 10, 
      alignItems: 'center', 
      justifyContent: 'center'           
    }}>
      <div className="col-sm">
        {
          articles.length === 0 ? (
            <img src="" alt="" /> 
          ): (
            articles.map(({id, title, description, imageUrl, createdAt}) => (
              <div className='border mt-3 p-3 bg-light' key={id} style={{backgroundColor: '#B12907'}}>
                <div className="row">
                  <div className="col-3">
                    <img src={imageUrl} alt={title} style={{height: 280, width: 280}} />
                  </div>
                  <div className="col-9 ps-5">
                    <h2>{title}</h2>
                    <p>{createdAt.toDate().toString()}</p>
                    <h4>{description}</h4>
                    <DeleteArticle id={id} imageUrl={imageUrl} />
                  </div>
                </div>
              </div> 
            ))
          )
        }
      </div>
    </div>
  )
}

export default Articles