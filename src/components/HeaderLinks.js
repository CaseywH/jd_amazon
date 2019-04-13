import React, {Component} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



export default class HeaderLinks extends Component {
    state = {
        icons: [
          {
            id: 0,
            icon: <FaFacebook className='icon facebook-icon'/>,
            path: 'https://www.facebook.com'
          },
          {
            id: 1,
            icon: <FaTwitter className='icon twitter-icon'/>,
            path: 'https://www.twitter.com'
          },
          {
            id: 2,
            icon: <FaInstagram className='icon instagram-icon'/>,
            path: 'https://www.instagram.com'
          },
        ]
      }
      render() {
        return <div className="social-media">
            {
        this.state.icons.map(item => {
         return <a href={item.path} key={item.id} target='_blank' rel="noopener noreferrer">
            {item.icon}
          </a>
        })
      }
        </div>


      }
}


