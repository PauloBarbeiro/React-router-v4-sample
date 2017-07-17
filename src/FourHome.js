import React, {Component} from 'react';
import PlayerAPI from './Data';
import { Link } from 'react-router-dom'

class FourHome extends Component {
  render(){
    return(
      <div>
        <p className="App-intro-2">
          I am page FourHome. And I present some dinamic content.
        </p>
        <ul>
          {
            PlayerAPI.all().map(p => (
              <li key={p.number}>
                <Link to={`/four/${p.number}`}>{p.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default FourHome;
