import React from 'react';
import Summary from './Summary';
import SummaryTotal from './SummaryTotal';

function MainSummary(props) {

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary features={props.features} state={props.state} />
            <SummaryTotal features={props.features} state={props.state} />
          </section>
    )
}

export default MainSummary;