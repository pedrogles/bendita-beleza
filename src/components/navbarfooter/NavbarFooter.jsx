import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { BsScissors } from 'react-icons/bs';
import { TbLocation } from 'react-icons/tb';

import '../../style/navbarfooter/navbarfooter.scss';

export default function NavbarFooter () {
    return (
        <div id="navbarfooter">
            <ul className='navbarfooter-items'>
                <li><a href="/#home"><AiOutlineHome /></a></li>
                <li><a href="/#services"><BsScissors /></a></li>
                <li><a href="/#localization"><TbLocation /></a></li>
                <li><a href="/#contact"><AiOutlinePhone /></a></li>
            </ul>
        </div>
    )
}