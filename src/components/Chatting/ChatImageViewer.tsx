import React, { useRef, useState } from 'react';
import * as S from './style/ChatImageViewer.style';
import iconX from '../../assets/images/svg/ic-x.svg';
import SwiperCore from 'swiper';
import { Keyboard, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const imageMock = [
    "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/17/4a3691f8-a5b9-4705-9c47-44be7988c66a.jpg",
    "https://jmagazine.joins.com/_data2/photo/2022/08/990874659_M2LfNeRF_3.jpg",
    "https://cdnweb01.wikitree.co.kr/webdata/editor/202203/20/img_20220320152018_d56ef2d9.webp",
    "https://image.jtbcplus.kr/data/contents/jam_photo/202209/21/37a8d815-ed8d-4cf5-8cd4-3714f3d8c649.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNzUg/MDAxNjEyMzY5MDQ2ODMw.k6txr5dsICIPp9EzfUknZABzC8RYutPHYkGSIrwbv-sg.Vb8kG_i1p1YpDLQVp7zAlYCdWm2O4aTjekdAOdIzM7wg.JPEG.kisluvme/IMG_2574.JPG?type=w800",
    "https://dimg.donga.com/wps/SPORTS/IMAGE/2022/01/27/111487379.1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUURz18LJaYfQPqh2P0EWzvsGXJqZNI3UUA&usqp=CAU",
];



const ChatImageViewer = () => {

    SwiperCore.use([Keyboard, FreeMode, Navigation, Thumbs]);

    const [imageSwiper, setImageSwiper] = useState<SwiperCore>();

    const SwiperParams = {
        loop: true,
        spaceBetween: 10,
        navigation: true,
        keyboard: {enabled: true},
        thumbs: {swiper: imageSwiper},
        modules: [Keyboard, FreeMode, Navigation, Thumbs],
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        className: 'mySwiper2'
    };

    const SwiperFooterParams = {
        onSwiper: setImageSwiper,
        spaceBetween: 4,
        slidesPerView: 9,
        freeMode: true,
        watchSlidesProgress: true,
        keyboard: {enabled: true},
        modules: [Keyboard, FreeMode, Navigation, Thumbs],
        // centeredSlides: true,
        // // centeredSlidesBounds: true,
        pagination: {clickable: true},
        className: 'mySwiper',
    };



    return (
        <S.ImageViewerContainer>
            <S.ImageViewerHeader>
                <S.ImageButton src={iconX} />
                <S.HeaderText>뷰어</S.HeaderText>
            </S.ImageViewerHeader>
            <S.Swiper {...SwiperParams}>
               <S.SwiperSlide>
                    <S.ImageView src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/17/4a3691f8-a5b9-4705-9c47-44be7988c66a.jpg" />
                </S.SwiperSlide> 
               <S.SwiperSlide>
                    <S.ImageView src="https://jmagazine.joins.com/_data2/photo/2022/08/990874659_M2LfNeRF_3.jpg" />
                </S.SwiperSlide> 
               <S.SwiperSlide>
                    <S.ImageView src="https://cdnweb01.wikitree.co.kr/webdata/editor/202203/20/img_20220320152018_d56ef2d9.webp" />
                </S.SwiperSlide> 
               <S.SwiperSlide>
                    <S.ImageView src="https://image.jtbcplus.kr/data/contents/jam_photo/202209/21/37a8d815-ed8d-4cf5-8cd4-3714f3d8c649.jpg" />
                </S.SwiperSlide> 
               <S.SwiperSlide>
                    <S.ImageView src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNzUg/MDAxNjEyMzY5MDQ2ODMw.k6txr5dsICIPp9EzfUknZABzC8RYutPHYkGSIrwbv-sg.Vb8kG_i1p1YpDLQVp7zAlYCdWm2O4aTjekdAOdIzM7wg.JPEG.kisluvme/IMG_2574.JPG?type=w800" />
                </S.SwiperSlide> 
               <S.SwiperSlide>
                    <S.ImageView src="https://dimg.donga.com/wps/SPORTS/IMAGE/2022/01/27/111487379.1.jpg" />
                </S.SwiperSlide> 
               <S.SwiperSlide>
                    <S.ImageView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUURz18LJaYfQPqh2P0EWzvsGXJqZNI3UUA&usqp=CAU" />
                </S.SwiperSlide> 
            </S.Swiper>
            <S.ImageViewerFooter>
                <S.ImageSliderList>
                    <S.Swiper {...SwiperFooterParams}>
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/17/4a3691f8-a5b9-4705-9c47-44be7988c66a.jpg" />
                        </S.SwiperSlide> 
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://jmagazine.joins.com/_data2/photo/2022/08/990874659_M2LfNeRF_3.jpg" />
                        </S.SwiperSlide> 
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://cdnweb01.wikitree.co.kr/webdata/editor/202203/20/img_20220320152018_d56ef2d9.webp" />
                        </S.SwiperSlide> 
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://image.jtbcplus.kr/data/contents/jam_photo/202209/21/37a8d815-ed8d-4cf5-8cd4-3714f3d8c649.jpg" />
                        </S.SwiperSlide> 
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNzUg/MDAxNjEyMzY5MDQ2ODMw.k6txr5dsICIPp9EzfUknZABzC8RYutPHYkGSIrwbv-sg.Vb8kG_i1p1YpDLQVp7zAlYCdWm2O4aTjekdAOdIzM7wg.JPEG.kisluvme/IMG_2574.JPG?type=w800" />
                        </S.SwiperSlide> 
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://dimg.donga.com/wps/SPORTS/IMAGE/2022/01/27/111487379.1.jpg" />
                        </S.SwiperSlide> 
                        <S.SwiperSlide>
                            <S.ImageSliderListItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUURz18LJaYfQPqh2P0EWzvsGXJqZNI3UUA&usqp=CAU" />
                        </S.SwiperSlide> 
                    </S.Swiper>
                </S.ImageSliderList>
                <S.ImageSliderText>9<span>장 중</span> 1<span>번</span></S.ImageSliderText>
            </S.ImageViewerFooter>
        </S.ImageViewerContainer>
    )
}

export default ChatImageViewer;