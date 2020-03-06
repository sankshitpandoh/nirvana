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
      <p>
      A game of battle royale. We will keep noting down the name of top
      contestants and the one to score the highest points at the end of
      the day will take home half, yes HALF the profit we make from the game!
      </p>

      <div class="price-cont">

      <div class="price">
      <h3>Entry Fee</h3>
      <h3>30rs</h3>
      </div>

      <div class="price">
      <h3>Prize</h3>
      <h3>TbT*</h3>
      </div>

      </div>

      <img src={limbo} alt="limbo"/>
      </div>
    )
}
