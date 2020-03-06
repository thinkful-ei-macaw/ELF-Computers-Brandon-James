import React from 'react';

function SummaryOptionCost(props) {

    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="summary__option__cost">
          {USCurrencyFormat.format(props.selectedOption.cost)}
        </div>
    )
}

export default SummaryOptionCost;