import React from 'react';
import Summary from './Summary';
import SummaryTotal from './SummaryTotal';

function MainSummary(props) {

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary features={props.features} state={props.state} USCurrencyFormat={props.USCurrencyFormat}/>
            <SummaryTotal features={props.features} state={props.state} USCurrencyFormat={props.USCurrencyFormat} />
          </section>
    )
}

export default MainSummary;