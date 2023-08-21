import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../assets/images/svg/ic-arrow-left.svg';


const BackButtonIcon = styled.img`
    width: 24px;
    height: 24px;

    border: 0;
    margin-right: 14px;
    cursor: pointer;
`;

export const BackButton = () => {

    const navigate = useNavigate();
    const onBackButton = () => navigate(-1);

    return (
        <BackButtonIcon src={iconBack} onClick={onBackButton} />
    )
}

const IconButton = styled.img`
    width: 24px;
    height: 24px;

    border: 0;
    cursor: pointer;
`;

export default IconButton;