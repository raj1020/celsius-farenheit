import React from 'react';



const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit'
};

function toCelsius(farenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFarenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }

    if (props.farenheit >=212) {
      return <p>The water would boil.</p>;

    }
    return <p>The water would not boil.</p>;
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }




  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
      handleChange(e)  {
          this.setState({temperature: e.target.value});
      }
  
  
      render () {
          const temperature = this.props.temperature;
          const scale = this.props.scale
  
  
          return (
                      
              <>
              <div>
                  <label>Enter temperature in {scaleNames[scale]}:</label>
                  <input
                    value={temperature}
                    onChange={this.handleChange} />
              </div>
  
             
              <BoilingVerdict
                celsius={parseFloat(temperature)} />
            </>
  
                      
  
  
          );
      }


  }

class Calculator extends React.Component {

     render () {
        return (
                    
            <>
           
            < TemperatureInput scale = "c" />
            < TemperatureInput scale = "f" />
          </>

                    


        );
    }
}

export default Calculator;
