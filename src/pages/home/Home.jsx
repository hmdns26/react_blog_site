import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import '../../index.css';
import styled from './home.module.css';

function Home (){
    return(
        
        <div className={styled.homeWrapper}>
            <Navbar/>
            <div className="container">
                <h2>مقالات جدید</h2>
                <div className={styled.articles}>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;