import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function Options(props) {

    let options = props.features[props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={item.name === props.state.selected[props.feature].name}
            onChange={e => props.updateFeature(props.feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({props.USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return options;
}

export default Options;