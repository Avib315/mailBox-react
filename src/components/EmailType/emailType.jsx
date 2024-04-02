import React from 'react'
import "./emailType.css"
import { Link } from 'react-router-dom'
import { Badge } from '../Badge/badge'

export const EmailType = ({name ="draft" , IconType ,to=""}) => {

  return (
      <Link className='EailType' to={`/${to}`}> 
      <span>
       <IconType/> {name}
      </span>
      <Badge>2</Badge>
      </Link>
  )
}
