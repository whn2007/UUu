import React from 'react'

function Tweet({tweet, link}) {
  return (
    <a className='tweet' href={link} target='_blank'>
        <p>{tweet}</p>
    </a>
  )
}

export default Tweet