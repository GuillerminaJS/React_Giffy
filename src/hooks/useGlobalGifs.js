import {useContext} from'react'
import GifsContext from '../context/GifsContext.js'

export default function useGlobalGifs () {
  return useContext(GifsContext).gifs
}
