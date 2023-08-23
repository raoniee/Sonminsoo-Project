import React from 'react';
import styled from 'styled-components';
// import mini from '../../assets/images/png/mini';


// const getHeight = ($imageCount: number) => {
//     let height = 0;
//     const countCalc = $imageCount % 3;
//     if (countCalc === 0) {
//         if ($imageCount === 3) {
//             height = 90;
//         } else if ($imageCount === 6) {
//             height = 181;
//         } else if ($imageCount === 9) {
//             height = 272;
//         }
//     } else if (countCalc === 1) {
//         if ($imageCount === 4) {

//         }
//     }
// }


const GridImageContainer = styled.div<{$imageCount: number}>`
    width: 272px;
    height: 272px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(89px, auto));
    grid-auto-flow: row dense;
    gap: 1px;

    border-radius: 8px;
    border: 1px solid black;
`;

const GridImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: grid;

    background: pink;
    cursor: pointer;
`;




const ChatGridImage = () => {

    const $imageCount = 9;

    return (
        <GridImageContainer $imageCount={$imageCount} >
            <GridImage />
            <GridImage />
            <GridImage />
            <GridImage />
            <GridImage />
        </GridImageContainer>
    )
};

export default ChatGridImage;