import React from 'react'
import {ArticleReference} from '../assets/articles/article_index'

const BlogArticleList = () => {
  return (
    <div className='tile-div-row'>
      <div className='section-div-col-start'>
        <ul className='section-div-grid'>
          {ArticleReference.map((article, index) => (
              <li
                  key = {index}
                  className='tile-div-col-center darken-bg'
              >
                  <a href={`/blog/${article.id}`} className='tile-font linked-item'>
                    {article.name}
                  </a>
                  <img src={`${article.image}`}  width='200'/>
              </li>
          ))}                                            
        </ul>
      </div>
    </div>    
  )
}

export default BlogArticleList