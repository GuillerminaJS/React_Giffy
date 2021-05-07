import React, {useEffect, useRef, useCallback} from 'react'
import Spinner from '../../components/Spinner/index.js'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs.js'
import SearchForm from '../../components/SearchForm/index.js'
import {useGifs} from '../../hooks/useGifs.js'
import useNearScreen from '../../hooks/useNearScreen.js'
import debounce from 'just-debounce-it'
import {Helmet} from 'react-helmet'

export default function SearchResults ({ params }) {
  const { keyword, rating } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })

  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title} />
          <meta name="rating" content="General" />
        </Helmet>
        <header className="o-header">
          <SearchForm initialKeyword={keyword} initialRating={rating} />
        </header>
        <div className="App-wrapper">
          <h3 className="App-title">
            {decodeURI(keyword)}
          </h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </div>
      </>
    }
  </>
}
