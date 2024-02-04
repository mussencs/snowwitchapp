import React from 'react'
import BlogCatalogAbout from '../components/BlogCatalogAbout'
import BlogArticleList from '../components/BlogArticleList'

const BlogCatalog = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <BlogCatalogAbout/>
        <BlogArticleList/>
    </div>
  )
}

export default BlogCatalog