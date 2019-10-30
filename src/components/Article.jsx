import React from 'react'

const Article = ({ title, image, site, author, pubDate, description, url }) => {
  return (
    <article>

      <div className="image-container">
        <img src={image} alt={title} />
      </div>

      <h1 className="title">{title}</h1>
      <div className="info">
        <p>Written By: {author} @ {site}</p><p>Date Published: {new Date(pubDate).toDateString()}</p>
      </div>

      <div className="content">
        <p>{description} <a href={url} target="_blank" rel="noopener noreferrer">Click Here to read full article...</a></p>
      </div>
    </article>
  )
}

export default Article;
