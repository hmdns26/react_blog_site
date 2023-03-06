import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from './about.module.css';
import ax from "./../../assets/images/laptop.png";
function AboutUs(){
    return(
        <div>
            <Navbar/>
            <div className={styled.aboutPage}>
            
            <div className="container">
            <h2>درباره ما</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque velit quisquam provident saepe possimus quam aliquam atque excepturi eos, fugit modi iste minima cum rem nemo dolore aspernatur. Facilis numquam sint dicta ab dolores, eligendi cupiditate a eaque recusandae, tenetur saepe optio incidunt officia. Tempora cupiditate repudiandae et exercitationem quos autem natus nostrum doloribus ratione cum excepturi blanditiis sapiente debitis neque aperiam veniam, quidem hic ut enim fuga animi, cumque temporibus quisquam? Assumenda repudiandae, nemo eveniet nisi, maiores atque sequi sint vero, pariatur hic est laudantium modi corrupti? Ab laborum iusto suscipit non sapiente nostrum dolor! Accusantium, aliquid. Labore.</p>
            <img src={ax} alt="axha" />
            </div>
            <Footer/>
        </div>
        </div>
    );
};
export default AboutUs;