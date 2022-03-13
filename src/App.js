import './App.css';
import React from 'react';
import UserList from './components/UserList';
//import CounterDisplayValue from './components/CounterDisplayValue';
import usersDB from './usersdb.json';
import UsersSelectedList from './components/UsersSelectedList';

// class / function


//самый простой функциональный компонент
/*function App() {
  return null;
}*/

//самый простой классовый компонент
/*
class App extends React.Component {
  render () {
    return null;
  };
}*/
/*
const newUser = {
  id: 100,
  login: 'vasya100',
  email: 'vasya100@gmail.com'
};

const newUser2 = {
  id: 101,
  name: 'vasya'
};
*/
/*
const data = [
  {
    id: 1,
    login: 'vasya1',
    email: 'vasya1@gmail.com'
  },
  {
    id: 2,
    login: 'vasya2',
    email: 'vasya2@gmail.com'
  },
  {
    id: 3,
    login: 'vasya3',
    email: 'vasya3@gmail.com'
  }
];*/




//Передача данных в React
/*
1. Родитель (sate: count) - Ребенок

Parent <Child count={this.set.count} />

2. Ребенок (установить новое состояние родителя) - Родитель через  callback

Parent: 
1. updateCount = (value) => this.setState({count: value});
2. <Child updateCount={this.updateCount} />

Child:
У Ребенка есть свое состояние score, которое он хочет установить для родителя как count

this.props.updateCount(this.state.score);


3. Ребенок 1 - Ребенок 2
передача данных / обмен данных через Родителя

1. Совместное использование данных : поднять состояние до ближайшего родителя; 
2. Не совместное использование данных: 1) изменить состояние Родителя через callback функцию; 2) передать другому ребенку через props измененное состояние



*/

class App extends React.Component {
  /*
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    console.group('constructor');
    console.log('count = ', this.state.count);
    console.groupEnd();
  };

  componentDidMount(){
    this.setState({count: this.state.count + 1});
    console.group('mount');
    console.log('count = ', this.state.count);
    console.groupEnd();
  };

render(){
  console.group('render');
  console.log('count = ', this.state.count);
  console.groupEnd();
  return(
    <Fragment>
      <h1>React</h1>
    </Fragment>
  );
};
*/


constructor(props){
  super(props);
  this.state = {
      users: usersDB.map((u) => ({
          ...u, 
          isSelected: false,
      })),
  };
}

setUsers = (newUsers) =>{
  this.setState({users: newUsers});
}

render () {
    return (
      <div className='App'>
        <UsersSelectedList users={this.state.users}/>
        <UserList users={this.state.users} setUsers={this.setUsers}/>
      </div>
    );
 };

/*
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.group('Parent constructor');
    console.log('count = ', this.state.count);
    console.groupEnd();
  }
  componentDidMount() {
    console.group('Parent componentDidMount');
    console.log('count = ', this.state.count);
    console.groupEnd();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('Parent componentDidUpdate');
    console.log('count = ', this.state.count);
    console.log('prev state = ', prevState);
    console.log('prev props = ', prevProps);
    console.log('new state =', this.state);
    console.log('new props =', this.props);
    console.groupEnd();
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
    console.group('Parent inc function');
    console.log('count = ', this.state.count);
    console.groupEnd();
  };
  render() {
    console.group('Parent render');
    console.log('count = ', this.state.count);
    console.groupEnd();

    return (
      <Fragment>
        <CounterDisplayValue count={this.state.count} />
        <button onClick={this.inc}>+</button>
      </Fragment>
    );
  }*/
 /* 
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('this constructor: ', this);
    this.inc = this.inc.bind(this);
  }

  inc (){
    console.log('count = ', this);
    return this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <Fragment>
        <CounterDisplayValue count={this.state.count} />
        <button onClick={this.inc}>+</button>
      </Fragment>
    );Ы
  }
*/


}

export default App;
