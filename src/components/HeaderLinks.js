import React, {Component} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components'


export default class HeaderLinks extends Component {
    state = {
        icons: [
          {
            id: 0,
            icon: <FaFacebook className='icon facebook-icon'/>,
            path: 'https://www.facebook.com',
            class: 'facebook'
          },
          {
            id: 1,
            icon: <FaTwitter className='icon twitter-icon'/>,
            path: 'https://www.twitter.com',
            class: 'twitter'
          },
          {
            id: 2,
            icon: <FaInstagram className='icon instagram-icon'/>,
            path: 'https://www.instagram.com',
            class: 'instagram'
          },
        ]
      }
      render() {
        return <SocialMediaIcons className="social-media">
            {
        this.state.icons.map(item => {
         return <a href={item.path} className={item.class} key={item.id} target='_blank' rel="noopener noreferrer">
            {item.icon}
          </a>
        })
      }
        </SocialMediaIcons>
      }
}

const SocialMediaIcons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 700px) {
    top: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    z-index: 10;
  }

  a {
  font-size: 2.75rem;
  color: whitesmoke;
    padding-right:.75rem;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`


