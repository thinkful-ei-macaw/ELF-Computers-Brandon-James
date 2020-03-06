import React from 'react';


function SummaryTotal(props) {
        // This object will allow us to
// easily convert numbers into US dollar values
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


const total = Object.keys(props.state.selected).reduce(
  (acc, curr) => acc + props.state.selected[curr].cost,
  0
);
    
    return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
    )
}

export default SummaryTotal;