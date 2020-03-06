import React from 'react';


function SummaryTotalValue(props) {
    
    return (
        <div className="summary__total__value">
        {props.USCurrencyFormat.format(props.total)}
      </div>
    )
}

export default SummaryTotalValue;