// import React from 'react';
// import './App.css'
// import Filter from './Components/Form/Filter';
// import Forming from './Components/Form/Forming';
// import ListContact from './Components/Form/ListContact';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//       listobj: {
//         name: undefined,
//         lastName: undefined,
//         typing: undefined,
//         number: undefined,
//       },
//       listArr: [
//         // {
//         //   name: 'MuxammadAli',
//         //   number: 998945896
//         // },
//         // {
//         //   name: 'hello',
//         //   number: 998945852
//         // },
//       ],
//       newContacts: []
//     };
//   }

//   typeHandler = (e) => {
//     let obj = {}
//     if(e.target.id === 'firstName') {
//       obj.name = e.target.value;
//     }
//     if(e.target.id === 'lastName') {
//       obj.lastName = e.target.value;
//     }

//     if(e.target.id === 'select') {
//       obj.typing = e.target.value;
//     }

//     if(e.target.id === 'number') {
//       obj.number = e.target.value;
//     }

//     this.setState({listobj: {...this.state.listobj, ...obj}})
//   }

//   formSubmit = (e) => {
//     e.preventDefault();
//     this.setState({listArr: [...this.state.listArr, this.state.listobj]})
//     this.setState({newContacts: [...this.state.newContacts, this.state.listobj]})

//     e.target.reset()
//   }

//   sortFunc = (e) => {
//     if (e.target.id === 'all') {
//       this.setState({ listArr: [...this.state.newContacts] })
//     }

//     if (e.target.id === 'fri') {
//       let newArray = []
//       this.state.newContacts.map((obj, i) => {
//         if (obj.categores === 'Friends') {
//           newArray.push(obj)
//         }
//       })
//       this.setState({ listArr: [...newArray] })
//     }

//     if (e.target.id === 'fam') {
//       let newArray = []
//       this.state.newContacts.map((obj, i) => {
//         if (obj.categores === 'Family') {
//           newArray.push(obj)
//         }
//       })
//       this.setState({ listArr: [...newArray] })
//     }

//     if (e.target.id === 'par') {
//       let newArray = []
//       this.state.newContacts.map((obj, i) => {
//         if (obj.categores === 'Partners') {
//           newArray.push(obj)
//         }
//       })
//       this.setState({ listArr: [...newArray] })
//     }
//   }

//   // changeNumber = (e) => {
//   //   let ob = {
//   //     number: e.target.value
//   //   }
//   //   this.setState({listobj:{...this.state.listobj, ...ob}})
//   // }

//   // changeName = (e) => {
//   //   let ob = {
//   //     name: e.target.value
//   //   }
//   //   this.setState({listobj:{...this.state.listobj, ...ob}})
//   // }


//   render() {
//     return (
//       <div>
//           <Forming 
//           typeHandler={this.typeHandler}
//             // changeName={this.changeName} 
//             // changeNumber={this.changeNumber} 
//             formSubmit={this.formSubmit} 
//           />
//           <Filter  sortFunc={this.sortFunc}/>
//         <div className='full d-flex flex-column'>
//         {this.state.listArr.map((el, i) => (
//           <ListContact key={i} name={el.name} lastName={el.lastName} typing={el.typing} number={el.number} />
//         ))}
//         </div>
//       </div>
//     )
//   }
// }


// export default App;



import React from 'react';
import './App.css'
import Filter from './Components/Form/Filter';
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
        
      ],
      newContacts: [
      
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

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({listArr: [...this.state.listArr, this.state.listobj]})
    this.setState({newContacts: [...this.state.newContacts, this.state.listobj]})

    e.target.reset()
  }

  sortFunc = (e) => {
    if (e.target.id === 'all') {
      this.setState({ listArr: [...this.state.newContacts] })
    }

    if (e.target.id === 'fri') {
      let newArray = []
      this.state.newContacts.map((obj, i) => {
        if (obj.typing === 'friends') {
          newArray.push(obj)
        }
      })
      this.setState({ listArr: [...newArray] })
    }

    if (e.target.id === 'fam') {
      let newArray = []
      this.state.newContacts.map((obj, i) => {
        if (obj.typing === 'family') {
          newArray.push(obj)
        }
      })
      this.setState({ listArr: [...newArray] })
    }

    if (e.target.id === 'par') {
      let newArray = []
      this.state.newContacts.map((obj, i) => {
        if (obj.typing === 'partner') {
          newArray.push(obj)
        }
      })
      this.setState({ listArr: [...newArray] })
    }
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


  render() {
    return (
      <div>
          <Forming
          typeHandler={this.typeHandler}
            // changeName={this.changeName}
            // changeNumber={this.changeNumber}
            formSubmit={this.formSubmit}
          />
          <Filter  sortFunc={this.sortFunc}/>
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