import React from 'react'
import Article1 from '../assets/articles/Article1'
import Article2 from '../assets/articles/Article2'
import {ArticleReference} from '../assets/articles/article_index'

const Article = ({article}) => {

  console.log(article.id)
  
  const id = article.id

  const components = {
    "E1": Article1,
    "E2": Article2,
  }

  const SpecificComponent = components[id]

  return (
    <div>
      <SpecificComponent/>
    </div>
    
  )
}

export default Article