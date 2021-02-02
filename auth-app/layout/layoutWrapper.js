import PropTypes from 'prop-types'
import React from 'react'

import DefaultLayout from '@/layout/default'

/**
 * page layouts
 */
const layouts = {
  default: DefaultLayout
}

const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout]
  // if we have a registered layout render children with said layout
  if (Layout) {
    return <Layout {...props}>{props.children}</Layout>
  }
  return <DefaultLayout>{props.children}</DefaultLayout>
}

LayoutWrapper.propTypes = {
  children: PropTypes.any
}

export default LayoutWrapper
