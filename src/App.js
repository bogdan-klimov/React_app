import './App.css';
import React from 'react';
import logo from './logo.png';

class RenderName extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    // console.log(this.props);

    const { name, surname, children } = this.props;

    // const element = <h2 className="AppText"> {name}  {surname}  {children} </h2>

    if(name === "Bogdan" ) {
      return <div>Hello, {name}  {surname} !</div>
    }

    return ( <div>Hello, unknown user! {children}</div> )
  }
}



class App extends React.Component {
  render() {
    return (

      <div className="App">
        <div className="container">
          <img src={logo} className="AppLogo" alt="logo" />
          <span className="AppText">
              React!
          </span>
          <label htmlFor="input" >
            <input id="input" type="text"/>
          </label>
        </div>

        <RenderName name="Bogdan" surname="Klimov" />

        <RenderName name="Roger" surname="Taylor" />

        <RenderName> 
          some children
        </RenderName>

      </div>

    );
  }
}


export default App;
