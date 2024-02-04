import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <div className='w-full'>
        <SnowFallEffect/>
      </div>
      <div className='main-div sticky top-0'>
        <Top/>
        <BrowserRouter>
          <Routes>
            <Route path='snowwitchapp/' element={< Home/>}></Route>
            <Route path='snowwitchapp/home' element={<Home/>}></Route>
            <Route path='snowwitchapp/about' element={<About/>}></Route>
            <Route path='snowwitchapp/privacy' element={<Privacy/>}></Route>
            <Route path='snowwitchapp/location' element={<Location/>}></Route>
            {main_locations_name_id.map((location_id) => (
              <Route
                path={`snowwitchapp/location/${location_id}`} element={<LocationSelected location_id={location_id}/>}
                key={location_id}
              >
              </Route>
            ))}
            <Route path='snowwitchapp/tierlist' element={<TierList/>}></Route>
            <Route path='snowwitchapp/packing' element={<Packing/>}></Route>
            <Route path='snowwitchapp/blog' element={<BlogCatalog/>}></Route>
            {ArticleReference.map((article, index) => (
              <Route
                path={`snowwitchapp/blog/${article.id}`} element={<Article article={article}/>}
                key={article.id}
              >
              </Route>
            ))}
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </div>
  )
}

export default App
