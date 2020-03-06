import React from 'react';
import Options from './Options';


function Features(props) {

    let features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Options features={props.features} state={props.state} feature={feature} updateFeature={props.updateFeature} USCurrencyFormat={props.USCurrencyFormat} />
          </fieldset>
        );
      });

      return features;
}

export default Features;