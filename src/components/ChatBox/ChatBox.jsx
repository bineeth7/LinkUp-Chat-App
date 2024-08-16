import './ChatBox.css'
import assets from '../../assets/assets'
function ChatBox() {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Bineeth B C <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>

{/* Message area */}
    <div className="chat-msg">
      <div className="s-msg">
        <p className="msg">Lorem Ipsum is simply dummy text of the printing</p>
        <div>
          <img src={assets.profile_img} alt="" />
          <p>7:00 am</p>
        </div>
      </div>
      <div className="s-msg">
          <img className='msg-img' src={assets.pic1} alt="" />
        <div>
          <img src={assets.profile_img} alt="" />
          <p>7:00 am</p>
        </div>
      </div>
 
      <div className="r-msg">
        <p className="msg">Lorem Ipsum is simply dummy text of the printingL</p>
        <div>
          <img src={assets.profile_img} alt="" />
          <p>7:00 am</p>
        </div>
      </div>
    </div>
{/* Message area end */}


      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id='image' accept='image/png, imgae/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox