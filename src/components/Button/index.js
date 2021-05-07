import React from 'react'
import { Button, Link } from './styles.js'

export default function ButtonComponent ({children, href, size = 'jkhdfgsjkfghsdsjkldfgdljk'}) {
  return href
    ? <Link size={size} href={href}>{children}</Link>
    : <Button size={size}>{children}</Button>
}
