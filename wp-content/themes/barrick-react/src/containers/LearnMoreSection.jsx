import React from 'react'
import LearnMoreItem from '../components/LearnMoreItem'
import boardPictureUrl from '../assets/2xour-board.jpg'
import companyPictureUrl from '../assets/2xour-company.jpg'
import payPictureUrl from '../assets/2xour-pay.jpg'

const LearnMoreSection = (props) => {
  return (
    <section className="learn-more">
      <LearnMoreItem bgUrl={boardPictureUrl} title="Our Board" />
      <LearnMoreItem bgUrl={companyPictureUrl} title="Our Company" main />
      <LearnMoreItem bgUrl={payPictureUrl} title="Our Pay" />
    </section>
  )
}

export default LearnMoreSection
