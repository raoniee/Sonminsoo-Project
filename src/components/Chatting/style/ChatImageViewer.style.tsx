import styled from 'styled-components';
import {Swiper as OriginSwiper, SwiperSlide as OriginSwiperSlide} from 'swiper/react';



export const ImageViewerContainer = styled.div`
    width: 100%;
    height: 100%;

    background: black;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
`;

export const ImageViewerHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 16px;
    // background: pink;

    display: flex;
    align-items: center;
`;

export const HeaderText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const ImageButton = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
`;

export const Swiper = styled(OriginSwiper)`
    width: 100%;

    &.mySwiper {
        width: 100%;
        height: 53px;

        .swiper-wrapper {
            display: flex;
            justify-content: center;
        }

        .swiper-slide {
            opacity: 0.4;
          }

        .swiper-slide-thumb-active {
            opacity: 1;
        }
    }

    &.mySwiper2 {
        --swiper-navigation-color: #fff;
        --swiper-pagination-color: #fff;
    }
`;

export const SwiperSlide = styled(OriginSwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageView = styled.img`
    width: 100%;
    background: white;
`;

export const ImageViewerFooter = styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageSliderList = styled.div`
    width: 100%;
    height: 53px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
`;

export const ImageSliderListItem = styled.img`
    width: 40px;
    height: 100%;
    border-radius: 4px;
    cursor: pointer;

    display: block;
    object-fit: cover;
`;

export const ImageSliderText = styled.p`
    color: #FFFFFF;

    & span {
        opacity: 0.5;
    }
`;