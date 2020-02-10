import React from 'react';



const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit'
};

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }

    if (props.farenheit >=212) {
      return <p>The water would boil.</p>;

    }
    return <p>The water would not boil.</p>;
  }

class Calculator extends React.Component {

     constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }
    handleChange(e)  {
        this.setState({temperature: e.target.value});
    }


    render () {
        const temperature = this.state.temperature;


        return (
                    
            <>
            <div>
                <label>Enter temperature in Celsius:</label>
                <input
                  value={temperature}
                  onChange={this.handleChange} />
            </div>

            <div>
                  <label>Enter temperature in Farenheit:</label>
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

export default Calculator;
