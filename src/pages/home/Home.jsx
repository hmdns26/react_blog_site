import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import '../../index.css';
import styled from './home.module.css';
import { useEffect ,useState} from "react";
import Footer from "../../components/footer/Footer";

function Home (){
    const [articles,setArticles]=useState([])
    

    useEffect(()=>{
        setArticles([{
            id:1,
            imageUrl:'',
            title:'javascript',
            readingTime: 10,
        },
        {
            id:2,
            imageUrl:'',
            title:'python',
            readingTime: 3,
        },
        {
            id:3,
            imageUrl:'',
            title:'php',
            readingTime: 6,
        },
        {
            id:4,
            imageUrl:'',
            title:'java',
            readingTime: 7,
        },
        {
            id:3,
            imageUrl:'',
            title:'php',
            readingTime: 6,
        },
        {
            id:3,
            imageUrl:'',
            title:'php',
            readingTime: 6,
        },
        {
            id:3,
            imageUrl:'',
            title:'php',
            readingTime: 6,
        },
        {
            id:3,
            imageUrl:'',
            title:'php',
            readingTime: 6,
        }])
    },[])
    return(
        <div className={styled.homeWrapper}>
            <Navbar/>
            <div className="container">
                <h2>مقالات جدید</h2>
                <div className={styled.articles}>
                    {
                        articles.map(result=>(
                            <Article key={result.id} article={result}/>))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default Home;