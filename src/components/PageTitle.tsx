import React from 'react'
import "./pageTitle.css"

const PageTitle = ({title}: {title: string}) => {
  return (
    <h3 className='category-title'>{title}</h3>
  )
}

export default PageTitle