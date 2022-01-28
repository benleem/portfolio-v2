import { useEffect, useState } from 'react';
import './introduction.css';

const Introduction = () => {
    const [currentColor, setCurrentColor] = useState('#2B8A9E');
    const colors = ['#B614D3', '#4EDE59','#FFCD3D', '#DF2038'];
    let i = 0;
    
    const changeColor = () => {
        if(i < colors.length){
            setCurrentColor(colors[i]);
            i++
            setTimeout(changeColor, 800);
        }
        else{
            i=0;
            setTimeout(changeColor, 50);
        }
    }

    useEffect(() => {
        changeColor();
    }, []);

    return (
        <div className='introduction'>
            <h1 className='introduction-title'>Hi. I'm  <span style={{color: currentColor}}>Ben</span>,</h1>
            <p className='introduction-sub-title'>a <span style={{color: currentColor}}>front-end</span> web developer and advocate for the JAM stack.</p>
            <p className='introduction-description'>
                I specialize in utilizing 
                APIs in the front-end to create a seamless user experience. Learning new technologies is my passion, 
                and I'm always looking for new ways to improve my toolkit.
            </p>
            <button className='introduction-button'>Contact me</button>
        </div>
    );
};

export default Introduction;
