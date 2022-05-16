import React from 'react';
import './App.css'
import Forming from './Components/Form/Forming';
import ListContact from './Components/Form/ListContact';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      listobj: {
        name: undefined,
        lastName: undefined,
        typing: undefined,
        number: undefined,
      },
      listArr: [
        // {
        //   name: 'MuxammadAli',
        //   number: 998945896
        // },
        // {
        //   name: 'hello',
        //   number: 998945852
        // },
      ]
    };
  }

  typeHandler = (e) => {
    let obj = {}
    if(e.target.id === 'firstName') {
      obj.name = e.target.value;
    }
    if(e.target.id === 'lastName') {
      obj.lastName = e.target.value;
    }

    if(e.target.id === 'select') {
      obj.typing = e.target.value;
    }

    if(e.target.id === 'number') {
      obj.number = e.target.value;
    }

    this.setState({listobj: {...this.state.listobj, ...obj}})
  }

  // changeNumber = (e) => {
  //   let ob = {
  //     number: e.target.value
  //   }
  //   this.setState({listobj:{...this.state.listobj, ...ob}})
  // }

  // changeName = (e) => {
  //   let ob = {
  //     name: e.target.value
  //   }
  //   this.setState({listobj:{...this.state.listobj, ...ob}})
  // }

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({listArr: [...this.state.listArr, this.state.listobj]})
  }

  render() {
    return (
      <div>
          <Forming 
          typeHandler={this.typeHandler}
            // changeName={this.changeName} 
            // changeNumber={this.changeNumber} 
            formSubmit={this.formSubmit} 
          />
        <div className='full d-flex flex-column'>
        {this.state.listArr.map((el, i) => (
          <ListContact key={i} name={el.name} lastName={el.lastName} typing={el.typing} number={el.number} />
        ))}
        </div>
      </div>
    )
  }
}


export default App;