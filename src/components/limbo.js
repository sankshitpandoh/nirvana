import React,{Component} from 'react'
import './stylesheet.css'
import limbo from './limbo.svg'

export function Limbo(){
    return(
      <div class="main">
      <h1>LIMBO</h1>
      <h2>Kitna Neeche Jhuk Sak Te Hon?</h2>
      <p>
      Get ready to struggle with backpain after the event, with LIMBO!
      Do your friends call you down to Earth? Then get ready to roll.
      Last man standing rules. Only the strongest will be rewarded!
      </p>
      <img src={limbo} alt="limbo"/>
      </div>
    )
}
