import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function Seo({ description, lang, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ].concat(meta)}
    />
  )
}


Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo