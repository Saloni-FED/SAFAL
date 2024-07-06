import React from 'react'
import WhyUs from "../components/WhyUs/WhyUs"
import PageBanner from '../components/Common/PageBanner'
const whyus = () => {
  return (
    <div>
      <PageBanner
        pageTitle='Why Us ?'
        // pageSubTitle='Contact us with your details & ready to start with us.'
      />
        <WhyUs title={"Why One should Trust and Choose Safal"}/>
    </div>
  )
}

export default whyus