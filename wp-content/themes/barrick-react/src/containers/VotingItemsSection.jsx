import React from 'react'
import VotingItem from '../components/VotingItem'

const VotingItemsSection = () => {
  return (
    <section className="voting">
      <div className="voting-content-wrapper">
        <h1 className="voting-items-header">2018 Meeting Voting Items</h1>
        <div className="voting-items-container">
          <VotingItem 
            title="Electing Directors" 
            text="You will be electing a Board of Directors 
                  consisting of 15 members. Please refer to 
                  the section entitled “Directors” on page 22 
                  of this Circular for biographies and more information 
                  on the nominees. Directors elected at the 
                  Meeting will serve until the end of our next 
                  annual shareholders’ meeting or until their 
                  resignation, if earlier. "
            number={"one"}
          />
          <VotingItem
            title="Appointing the Auditor"
            text="PricewaterhouseCoopers LLP (PwC) has been our 
                  external auditor since 1983. The Board, on the 
                  recommendation of the Audit Committee, recommends 
                  that PwC be reappointed as auditor and that the 
                  Board be authorized to set the auditor’s remuneration. 
                  The audit firm appointed at the Meeting will 
                  serve until the end of the Company’s next annual 
                  shareholders’ meeting."
            number={"two"}
          />
          <VotingItem 
            title="Say on Pay Advisory Vote"
            text="The Board has adopted a non-binding advisory 
                  vote relating to executive compensation to 
                  solicit feedback on our approach to executive 
                  compensation. The previous say on pay advisory 
                  vote held in 2016 was supported with the approval 
                  of 90.9% of those shareholders present at our 2016 
                  annual meeting and voting in person or by proxy. "
            number={"three"}
          />
        </div>
        <div className="voting-subtitle">
          <h1 className="voting-subtitle-text">Ready to cast your vote?</h1>
          <button className="button-primary voting-section">Vote Now</button>
        </div>
      </div>
    </section>
  )
}

export default VotingItemsSection