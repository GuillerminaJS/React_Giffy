import React, { useState} from "react"
import { Link, useLocation } from "wouter"
import Category from '../../components/Category'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs.js'
import {useGifs} from '../../hooks/useGifs.js'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches.js'
import SearchForm from '../../components/SearchForm/index.js'
import {Helmet} from 'react-helmet'

export default function Home() {
  const {gifs} = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}
