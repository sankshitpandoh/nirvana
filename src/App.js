import React,{Component} from 'react'
import './App.css'
import bg from './yellow-stroke.svg'
import {Home} from './components/home.js'
import {Limbo} from './components/limbo.js'
import {Hit} from './components/hit-the-int.js'
import {Dart} from './components/dart-bal.js'
import {Cookie} from './components/face-cookie.js'
import {Chop} from './components/chop-shot.js'
import {Mortal} from './components/mortal-combat.js'
import {Tic} from './components/tic-toe.js'
import {Who} from './components/who-we.js'
import {What} from './components/what-we-did.js'

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
    this.handleClick9 = this.handleClick9.bind(this)
    this.state={
      initial: 1,
      l: "url("+bg+")",
      l1: "none",
      l2: "none",
      l3: "none",
      l4: "none",
      l5: "none",
      l6: "none",
      l7: "none",
      l8: "none",
      l9: "none",
      c: "black",
      c1: "white",
      c2: "white",
      c3: "white",
      c4: "white",
      c5: "white",
      c6: "white",
      c7: "white",
      c8: "white",
      c9: "white"
    }
}
handleClick(){
    this.setState({
        initial: 1,
        l: "url("+bg+")",
        l1: "none",
        l2: "none",
        l3: "none",
        l4: "none",
        l5: "none",
        l6: "none",
        l7: "none",
        l8: "none",
        l9: "none",
        c:  "black",
        c1: "white",
        c2: "white",
        c3: "white",
        c4: "white",
        c5: "white",
        c6: "white",
        c7: "white",
        c8: "white",
        c9: "white"
    })
}
handleClick1(){
  this.setState({
    initial: 2,
    l: "none",
    l1: "url("+bg+")",
    l2: "none",
    l3: "none",
    l4: "none",
    l5: "none",
    l6: "none",
    l7: "none",
    l8: "none",
    l9: "none",
    c:  "white",
    c1: "black",
    c2: "white",
    c3: "white",
    c4: "white",
    c5: "white",
    c6: "white",
    c7: "white",
    c8: "white",
    c9: "white"
  })
}
handleClick2(){
  this.setState({
    initial: 3,
    l: "none",
    l1: "none",
    l2: "url("+bg+")",
    l3: "none",
    l4: "none",
    l5: "none",
    l6: "none",
    l7: "none",
    l8: "none",
    l9: "none",
    c: "white",
    c1: "white",
    c2: "black",
    c3: "white",
    c4: "white",
    c5: "white",
    c6: "white",
    c7: "white",
    c8: "white",
    c9: "white"
  })
}
handleClick3(){
  this.setState({
    initial: 4,
    l: "none",
    l1: "none",
    l2: "none",
    l3:"url("+bg+")",
    l4: "none",
    l5: "none",
    l6: "none",
    l7: "none",
    l8: "none",
    l9: "none",
    c: "white",
    c1: "white",
    c2: "white",
    c3: "black",
    c4: "white",
    c5: "white",
    c6: "white",
    c7: "white",
    c8: "white",
    c9: "white"
  })
}
handleClick4(){
  this.setState({
    initial: 5,
    l: "none",
    l1: "none",
    l2: "none",
    l3: "none",
    l4: "url("+bg+")",
    l5: "none",
    l6: "none",
    l7: "none",
    l8: "none",
    l9: "none",
    c: "white",
    c1: "white",
    c2: "white",
    c3: "white",
    c4: "black",
    c5: "white",
    c6: "white",
    c7: "white",
    c8: "white",
    c9: "white"
  })
}
handleClick5(){
  this.setState({
    initial: 6,
    l: "none",
    l1: "none",
    l2: "none",
    l3: "none",
    l4: "none",
    l5: "url("+bg+")",
    l6: "none",
    l7: "none",
    l8: "none",
    l9: "none",
    c:  "white",
    c1: "white",
    c2: "white",
    c3: "white",
    c4: "white",
    c5: "black",
    c6: "white",
    c7: "white",
    c8: "white",
    c9: "white"
  })
}
handleClick6(){
  this.setState({
    initial: 7,
    l: "none",
    l1: "none",
    l2: "none",
    l3: "none",
    l4: "none",
    l5: "none",
    l6: "url("+bg+")",
    l7: "none",
    l8: "none",
    l9: "none",
    c: "white",
    c1: "white",
    c2: "white",
    c3: "white",
    c4: "white",
    c5: "white",
    c6:"black",
    c7: "white",
    c8: "white",
    c9: "white"
  })
}
handleClick7(){
  this.setState({
    initial: 8,
    l: "none",
    l1: "none",
    l2: "none",
    l3: "none",
    l4: "none",
    l5: "none",
    l6: "none",
    l7: "url("+bg+")",
    l8: "none",
    l9: "none",
    c: "white",
    c1: "white",
    c2: "white",
    c3: "white",
    c4: "white",
    c5: "white",
    c6: "white",
    c7: "black",
    c8: "white",
    c9: "white"

  })
}
handleClick8(){
  this.setState({
    initial: 9,
    l: "none",
    l1: "none",
    l2: "none",
    l3: "none",
    l4: "none",
    l5: "none",
    l6: "none",
    l7: "none",
    l8: "url("+bg+")",
    l9: "none",
    c: "white",
    c1: "white",
    c2: "white",
    c3: "white",
    c4: "white",
    c5: "white",
    c6: "white",
    c7: "white",
    c8: "black",
    c9: "white"
  })
}
  handleClick9(){
    this.setState({
      initial: 9,
      l: "none",
      l1: "none",
      l2: "none",
      l3: "none",
      l4: "none",
      l5: "none",
      l6: "none",
      l7: "none",
      l8: "none",
      l9: "url("+bg+")",
      c: "white",
      c1: "white",
      c2: "white",
      c3: "white",
      c4: "white",
      c5: "white",
      c6: "white",
      c7: "white",
      c8: "white",
      c9: "black"
    })
}

renderElement(){
  if(this.state.initial === 1 ){
     return(
       <Home />
     );}

  if (this.state.initial === 2)
  return(
    <Limbo />
  )
  if (this.state.initial === 3)
  return(
    <Hit />
  )
  if (this.state.initial === 4)
  return(
    <Dart />
  )
  if (this.state.initial === 5)
  return(
    <Cookie />
  )
  if (this.state.initial === 6)
  return(
    <Chop />
  )
  if (this.state.initial === 7)
  return(
    <Mortal />
  )
  if (this.state.initial === 8)
  return(
    <Tic />
  )
  if (this.state.initial === 9)
  return(
    <Who />
  )
  if (this.state.initial === 10)
  return(
    <What />
  )

  return null;
}
  render(){

    return(
      <div className='container'>
                    <div className='link-list'>
                    <div onClick={this.handleClick} style={{backgroundImage: this.state.l, color: this.state.c }} className='bt'>HOME</div>
                    <div onClick={this.handleClick1} style={{backgroundImage: this.state.l1, color: this.state.c1 }} className='bt'>Limbo</div>
                    <div onClick={this.handleClick2} style={{backgroundImage: this.state.l2, color: this.state.c2 }} className='bt'>Hit the Interns</div>
                    <div onClick={this.handleClick3} style={{backgroundImage: this.state.l3, color: this.state.c3 }} className='bt'>Dart Balloons</div>
                    <div onClick={this.handleClick4} style={{backgroundImage: this.state.l4, color: this.state.c4 }}className='bt'>Face the Cookie</div>
                    <div onClick={this.handleClick5} style={{backgroundImage: this.state.l5, color: this.state.c5 }} className='bt'>ChopShots</div>
                    <div onClick={this.handleClick6} style={{backgroundImage: this.state.l6, color: this.state.c6 }} className='bt'>Mortal Kombat</div>
                    <div onClick={this.handleClick7} style={{backgroundImage: this.state.l7, color: this.state.c7 }} className='bt'>Flic Tac Toe</div>
                    <div onClick={this.handleClick8} style={{backgroundImage: this.state.l8, color: this.state.c8 }} className='bt'>Who we are</div>
                    <div onClick={this.handleClick9} style={{backgroundImage: this.state.l9, color: this.state.c9 }} className='bt'>What We Did</div>
                    </div>
                    <div className='display'>
                      {this.renderElement()}
                    </div>
      </div>
    )
  }
}
