import React,{Component} from 'react'
import './stylesheet.css'

export function Cookie(){
    return(
      <div class="main">
      <h1>Face the cookie</h1>
      <h2>Be the cookie monster and take on the challenge!</h2>
      <p>
      If you win, you get to keep the whole packet.
      P.S. You have only one minute, so better hurry up!
      </p>
      <div class="price-cont">

      <div class="price">
      <h3>Entry Fee</h3>
      <h3>30rs</h3>
      </div>

      <div class="price">
      <h3>Prize</h3>
      <h3>50rs</h3>
      </div>

      </div>
      </div>
    )
}
