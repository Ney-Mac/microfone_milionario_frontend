import './FooterStyles.css'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'

export default function Footer() {

    function onCLick() {
        console.log('clique');
    }

    return (
        <div className="footer">
            <div className="footer-col">
                <p>© 2023 Microfone Milionário</p>
            </div>

            <div className="footer-col">
                <AiOutlineFacebook className='icon-button' onClick={onCLick} />
                <AiOutlineInstagram className='icon-button' onClick={onCLick} />
                <CiTwitter className='icon-button' onClick={onCLick} />
            </div>
        </div>
    )
}