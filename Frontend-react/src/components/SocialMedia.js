import React from 'react';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaTelegram, FaTiktok} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
      <a href="https://www.linkedin.com/in/anwar-hussen-0b0b3b1b1/" target="_blank" rel='noopener noreferrer'>
        <BsLinkedin className='linkedin'/>
      </a>
    </div>
       <div>
        <a href="https://www.facebook.com/profile.php?id=100088791361906" target="_blank" rel='noopener noreferrer'>
          <FaFacebookF className='facebook'/>
        </a>
       
     </div>
        <div>
          <a href="https://youtube.com/@anwarhussen6254?si=jug-7i43upEOwoiK" target="_blank" rel='noopener noreferrer'>
            <BsYoutube className='youtube'/>
          </a>  
      </div>
      <div>
        <a href="https://www.tiktok.com/@gifter7638?_t=ZM-8t7OUBrypNO&_r=1" target="_blank" rel='noopener noreferrer'>
          <FaTiktok className='tiktok'/>
        </a>
      </div>
      <div>
        <a href="https://t.me/Billaden5" target="_blank" rel='noopener noreferrer'>
          <FaTelegram className='telegram'/>
        </a>
      </div>
      </div>
  )
}

export default SocialMedia
