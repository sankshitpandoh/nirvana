import React,{Component} from 'react'
import './stylesheet.css'
import test from './photo1.png'
import test1 from './photo2.png'
import test2 from './photo3.png'
import test3 from './photo4.png'
import test4 from './photo5.png'
import test5 from './photo6.png'
import test6 from './photo7.png'
import test7 from './photo8.png'
import test8 from './photo9.png'
import test9 from './photo10.png'

export function What(){
    return(
      <div class="main">
        <h1 class="did-heading">
          what we did.
        </h1>
        <div class="video-frame">
          <img src={test9}></img>
        </div>
        
        <h3 class="did">
        As we had said, We wanted to share the emotion of Nirvana. The rule of the Nature is "Only the Strongest will survive.", but the rule of Humanity has always been, "The Strong carries the weak." We believe in this policy thoroughly. And thus, despite not making any profit, We wanted to do something to help those who need it. We are interns, we don't have much idea of life ourselves, much less the financial stability to actually help someone. But still we did not wanted to leave them empty handed.
        </h3>
        <h3 class="did">
        We remember that while adults might hope for much more from life, for a child, one chocolate or candy, or a packet of biscuits and they attain that Nirvana state of mind. So, the choice was made. Everyday while commuting to the office, we see homeless children at the ground near NFD circle.  What else did we need? We went there and the smiles we were able to see by just handing out small items were unbelievable. A big thank you to everyone who participated in our games at Uplers Flea Market. You made this possible. 
        </h3>
        <h3 class="did">
        Also a special thanks to Krunal Bakraniya for a donation, without which we would have definitely not able to do as much as we were able to. Thank You!
        </h3>
        
      </div>
    )
}
