import React from 'react';
import Features from './Features';


function MainForm(props) {
    return (
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <Features features={props.features} state={props.state} updateFeature={props.updateFeature} USCurrencyFormat={props.USCurrencyFormat} />
        </form>
    )
}

export default MainForm;