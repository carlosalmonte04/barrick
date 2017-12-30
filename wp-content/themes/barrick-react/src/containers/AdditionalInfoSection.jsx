import React from 'react'
import AdditionalInfoItem from '../components/AdditionalInfoItem'

const AdditionalInfoSection = () => {
  return (
    <section className="additional-info">
      <h2 className="additional-info-title" >Additional Information</h2>
      <div className="additional-info-items-container">
        <AdditionalInfoItem text="Notice of Meeting" />
        <AdditionalInfoItem text="Form of Proxy" />
        <AdditionalInfoItem text="Meeting & Voting Info" />
      </div>
    </section>
  )
}

export default AdditionalInfoSection