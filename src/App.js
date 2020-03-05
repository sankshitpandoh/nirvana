import React,{Component} from 'react'
import './App.css'
import logo from './logo.png'

export default class App extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.handleClick4 = this.handleClick4.bind(this)
    this.handleClick5 = this.handleClick5.bind(this)
    this.handleClick6 = this.handleClick6.bind(this)
    this.handleClick7 = this.handleClick7.bind(this)
    this.handleClick8 = this.handleClick8.bind(this)
    this.state={
      initial: 1,

    }

}
handleClick(){
    this.setState({
        initial: 1,
    })
}
handleClick1(){
  this.setState({
    initial: 2,
  })
}
handleClick2(){
  this.setState({
    initial: 3,
  })
}
handleClick3(){
  this.setState({
    initial: 4,
  })
}
handleClick4(){
  this.setState({
    initial: 5,
  })
}
handleClick5(){
  this.setState({
    initial: 6,
  })
}
handleClick6(){
  this.setState({
    initial: 7,
  })
}
handleClick7(){
  this.setState({
    initial: 7,
  })
}
handleClick8(){
  this.setState({
    initial: 8,
  })
}
renderElement(){
  if(this.state.initial === 1 ){
     return(
       <div class="home">
       <img src={logo} className="App-logo" alt="logo" />
       </div>
     );}

  if (this.state.initial === 2)
  return(
    <div>hi</div>
  )
  if (this.state.initial === 3)
  return(
    <div>hi</div>
  )
  if (this.state.initial === 4)
  return(
    <div>hi</div>
  )
  if (this.state.initial === 5)
  return(
    <div>hi</div>
  )

  return null;
}
  render(){
    return(
      <div className='container'>
                    <div className='link-list'>
                    <button onClick={this.handleClick} className='button'>HOME</button>
                    <button onClick={this.handleClick1} className='button'>Limbo</button>
                    <button onClick={this.handleClick2} className='button'>Hit the Interns</button>
                    <button onClick={this.handleClick3} className='button'>Dart Balloons</button>
                    <button onClick={this.handleClick4} className='button'>Face the Cookie</button>
                    <button onClick={this.handleClick5} className='button'>ChopShots</button>
                    <button onClick={this.handleClick6} className='button'>Mortal Kombat</button>
                    <button onClick={this.handleClick7} className='button'>Flic Tac Toe</button>
                    <button onClick={this.handleClick8} className='button'>Who we are</button>
                    </div>
                    <div className='display'>
                      {this.renderElement()}
                    </div>
      </div>
    )
  }
}
