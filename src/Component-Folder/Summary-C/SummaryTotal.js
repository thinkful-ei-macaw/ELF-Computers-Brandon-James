import React from 'react';
import SummaryTotalValue from './Summary-Sub-C/SummaryTotalValue'

function SummaryTotal(props) {

const total = Object.keys(props.state.selected).reduce(
  (acc, curr) => acc + props.state.selected[curr].cost,
  0
);
    
    return (
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <SummaryTotalValue total={total} USCurrencyFormat={props.USCurrencyFormat}/>
        </div>
    )
}

export default SummaryTotal;