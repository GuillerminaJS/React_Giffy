import React, { useState, useEffect } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService.js'
import Category from '../Category/index.js'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    const controller = new AbortController()
    getTrendingTerms({signal: controller.signal})
      .then(setTrends)
      .catch(err => {})

    return () => controller.abort()
  }, [])

  return <Category name='Tendencias' options={trends} />
}
