import styled from './navbar.module.css';
import '../../index.css';
import {Link} from "react-router-dom";

function Navbar(props){
    
    return(
        <div className={styled.headerWrapper}>
            <div className="container">
            <div className={styled.header}>
            
            <ul>
                <li><Link to="/">لیست مقالات</Link></li>
                <li> مقاله جدید</li>
                <li><Link to="/about">درباره</Link></li>
            </ul>
        </div>
        </div>
        </div>
    );
};
export default Navbar;