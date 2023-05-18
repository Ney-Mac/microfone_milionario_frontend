import './FooterStyles.css'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-col">
                <p>© 2023 Microfone Milionário</p>
            </div>

            <div className="footer-col">
                <AiOutlineFacebook />
                <AiOutlineInstagram />
                <CiTwitter />
            </div>
        </div>
    )
}