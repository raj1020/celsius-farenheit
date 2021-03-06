import React from 'react';



const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit'
};

function toCelsius(farenheit) {
  return (farenheit - 32) * 5 / 9;
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
          this.props.onTemperatureChange( e.target.value);
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


    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }

    handleFarenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }

     render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale ==='f'? tryConvert(temperature, toCelsius) : temperature;
        const farenheit = scale === 'c'? tryConvert(temperature, toFarenheit) : temperature;
        return (
                    
            <>
           
            < TemperatureInput 
              scale = "c"
              temperature = {celsius}
              onTemperatureChange = {this.handleCelsiusChange}
            />
            < TemperatureInput 
              scale = "f"
              temperature = {farenheit}
              onTemperatureChange = {this.handleFarenheitChange}
            />
            < BoilingVerdict
              celsius = {celsius} />
          </>

                    


        );
    }
}

export default Calculator;
