import React from 'react';
import SummaryOptionCost from './SummaryOptionCost';

function Summary(props) {

    let summary = Object.keys(props.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.state.selected[feature];
    
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <SummaryOptionCost selectedOption={selectedOption} USCurrencyFormat={props.USCurrencyFormat}/>
          </div>
        );
      });

      return summary;
}

export default Summary;