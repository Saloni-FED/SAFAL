import React from 'react'
import PageBanner from "../components/Common/PageBanner"
import Listing from "../components/Listing/Listing"

const unlistedshares = () => {
  return (
    <div>
         <PageBanner
        pageTitle='Unlisted Shares'
      />
      <Listing/>
    </div>
  )
}

export default unlistedshares