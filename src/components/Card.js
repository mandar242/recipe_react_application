import React from 'react';

const Card = (props) =>{
    const { name,email,id,img } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={img} alt = 'robot' height = '200px' width='200px'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;