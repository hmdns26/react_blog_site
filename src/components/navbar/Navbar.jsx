import styled from './navbar.module.css';
import '../../index.css';
function Navbar(props){
    
    return(
        <div className={styled.headerWrapper}>
            <div className="container">
            <div className={styled.header}>
            
            <ul>
                <li>لیست مقالات</li>
                <li> مقاله جدید</li>
                <li>درباره </li>
            </ul>
        </div>
        </div>
        </div>
    );
};
export default Navbar;