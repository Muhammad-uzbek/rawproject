export const styles={
    swiper:{
        width: '80%',
        height: '85vh',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto',
        padding: '0',
    },
    swiperSlide:{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto',
        maxHeight: '100%',
    },
    
    swiperSlideImage:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 1s ease-in-out',
    },
    textBlock:{
        width: '100%',
        height: '20%',
        position: 'absolute',
        bottom: '0',
        left: '0',
        zIndex: '1',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        padding: '10px',
        fontSize: '1.5em',
        fontWeight: 'bold',
        transition: 'opacity 1s ease-in-out',
    },
    swiperSlideTitle:{
        fontSize: '22px',
        lineHeight: '25px',
        marginTop: '5px',
    },
    swiperSlideDescription:{
        fontSize: '18px',
        lineHeight: '20px',
        marginTop: '5px',
    }
}
export default styles;