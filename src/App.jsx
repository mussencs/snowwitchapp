import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'

import {get_location_ids} from './components/scripts'
import {ArticleReference} from './assets/articles/article_index'

import Top from './components/Top';
import Footer from './components/Footer';
import SnowFallEffect from './components/SnowFallEffect';

import Home from './pages/Home';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Location from './pages/Location';
import LocationSelected from './pages/LocationSelected';
import TierList from './pages/TierList'
import Packing from './pages/Packing';
import BlogCatalog from './pages/BlogCatalog';
import Article from './pages/Article';

function App() {

  let main_locations_name_id = get_location_ids()

  return (
    <div className='w-full'>
      {/* <div className='w-full'>
        <SnowFallEffect/>
      </div> */}
      <div className='main-div sticky top-0'>
        <Top/>
        <HashRouter>
          <Routes>
            <Route path='/' element={< Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/privacy' element={<Privacy/>}></Route>
            <Route path='/location' element={<Location/>}></Route>
            {main_locations_name_id.map((location_id) => (
              <Route
                path={`location/${location_id}`} element={<LocationSelected location_id={location_id}/>}
                key={location_id}
              >
              </Route>
            ))}
            <Route path='/tierlist' element={<TierList/>}></Route>
            <Route path='/packing' element={<Packing/>}></Route>
            <Route path='/blog' element={<BlogCatalog/>}></Route>
            {ArticleReference.map((article, index) => (
              <Route
                path={`/blog/${article.id}`} element={<Article article={article}/>}
                key={article.id}
              >
              </Route>
            ))}
          </Routes>
        </HashRouter>
        <Footer/>
      </div>
    </div>
  )
}

export default App
