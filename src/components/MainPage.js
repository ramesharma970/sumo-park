import React,{useState} from 'react';
import '../styles/Mainpage.css';
import person1 from '../assets/images/person1.jpg';



const MainPage = () => {
    const [count, setCount] =useState(1);
    
    return (
        <>
        <div className='main-page'>
            <div className='main-info'>
                <h1>
                    Hello, <span> Guys </span> 
                </h1>
                <p> HOC is higher order components, it is advanced technique in react to build reusable components. Just like components take props and give UI, HOC are take component and give components.</p>
                <button onClick={() => setCount(count+1)}> Increase</button>
                <button onClick={() => setCount(0)}> Reset</button>
                <button onClick={() => setCount(count-1)}> Decrease</button>
                <h2>{count}</h2>
            </div>
            <div className='main-image'>
                <img alt ='image1' src={person1}/>
            </div>
          
        </div>
       
       
        </>
    )
}

export default MainPage
