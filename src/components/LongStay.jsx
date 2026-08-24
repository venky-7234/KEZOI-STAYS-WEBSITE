import React from 'react';
import './LongStay.css';

const LongStay = () => {
  return (
    <section className="long-stay section-padding">
      <div className="long-stay-container">
        <h2 className="long-stay-heading">Staying Longer? Make Kezoi Your Home.</h2>
        <p className="long-stay-desc">
          Flexible premium stays for business travellers, professionals and extended visits.
        </p>
        <div className="long-stay-buttons">
          <button className="btn-primary">Enquire for Long Stay</button>
          <button className="btn-outline">Contact Kezoi</button>
        </div>
      </div>
    </section>
  );
};

export default LongStay;
