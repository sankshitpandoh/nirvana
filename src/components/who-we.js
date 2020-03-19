import React,{Component} from 'react'
import './stylesheet.css'
import avatar1 from './sank-avatar.png'
import avatar2 from './akash-avatar.png'
import avatar3 from './aum-avatar.png'
import avatar4 from './shaifali-avatar.png'
import avatar5 from './nidhi-avatar.png'
import avatar6 from './rajvi-avatar.png'

export function Who(){
    return(
      <div class="main">
      <h1>apun kaun hai?</h1>
      <div class="card-grid">

        <div class="item">
        <figure>
        <img class="avatars" src={avatar1} />
        </figure>
        <h3>Sankshit Pandoh</h3>
        <h4>"The guy who wasted his time to code this website"</h4>
        </div>

        <div class="item">
        <figure>
        <img class="avatars" src={avatar2} />
        </figure>
        <h3>Akash Odedara</h3>
        <h4>"The guy with an artistic vision<br />PS: I won the argument"</h4>
        </div>

        <div class="item">
        <figure>
        <img class="avatars" src={avatar3} />
        </figure>
        <h3>Aum Shukla</h3>
        <h4>"The guy who argued with Akash about design and wrote stuff."</h4>
        </div>

        <div class="item">
        <figure>
        <img class="avatars" src={avatar4} />
        </figure>
        <h3>Shaifali Gorwadia</h3>
        <h4>"Is my art fine or am I a fine art? <br />you decide!"</h4>
        </div>

        <div class="item">
        <figure>
        <img class="avatars" src={avatar5} />
        </figure>
        <h3>Nidhi Trivedi</h3>
        <h4>"Mommy to these dumb kids <br />
        YOU ALL ARE GROUNDED!"</h4>
        </div>

        <div class="item">
        <figure>
        <img class="avatars" src={avatar6} />
        </figure>
        <h3>Rajvi Dobariya</h3>
        <h4>"Too clumsy, lost my caption somewhere."</h4>
        </div>

      </div>
      <p>We at Nirvana believe in giving back. So, We have decided that we will
      donate 50% of the profits we get to the purpose of feeding hungry kids.
      </p>
      </div>
    )
}
