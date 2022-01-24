import styled from "styled-components";


export const TextBlock = styled.div`
    width: 100%;
    height: auto;
    padding-left: 10px;
    .link-btn{
        width: 130px;
        height: 40px;
        background-color: blue;
        color: #fff;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        margin: 0 auto;
        margin-top: 20px;
    }
`;

export const AllWrap = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #111;
    .navbar{
        width: 100%;
        height: 50px;
        background-color: rgb(43,42,50);
        color: #fff;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    .swiper{
        width: 100%;
        height: calc(100% - 100px);
        padding-left: 35%;
       .swiper-slide{
            min-width: 500px;
            height: fit-content;
            min-height: 500px;
            border-radius: 15px;
            margin-top: 30px;
            box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75) inset;
            -webkit-box-shadow: 1px 1px 27px 11px rgba(0,0,0,0.75) inset;
            -moz-box-shadow: 1px 1px 27px 11px rgba(0,0,0,0.75) inset;
            padding: 10px;
            span{
                img{
                    width: 95%;
                    margin: 0 auto;
                    height: 350px !important;
                    object-fit: cover;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                }
            }
            .text-block{
                width: 100%;
                height: auto;
                padding: 0 15px;
                padding-bottom: 25px;
                color: #fff;
                .link-btn{
                    width: 130px;
                    height: 40px;
                    background: yellow;
                    color: #000;
                    border-radius: 20px;
                    text-align: center;
                    line-height: 40px;
                    margin: 0 auto;
                    margin-top: 20px;
                    box-shadow: 0px 0px 5px #fff;
                    &:hover{
                        opacity: 0.9;
                        box-shadow: 0px 0px 0;
                    }
                    &:active{
                        transform: translateY(2px);
                    }
                }
            }
        }
        .swiper-button-prev, .swiper-button-next{
            background-color: #fff;
            color: #000;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 20px;
            padding: 20px;
            &::after{
                scale: 0.6;
                padding: 0 5px;
            }
        }
        
    }
    @media (max-width: 1024px){
        .swiper{
            padding-left: 25%;
        }
    }
    @media (max-width: 900px){
        .swiper{
            width: 100%;
            padding-left: 30%;
            .swiper-slide{
                width: 400px !important;
                min-width: 400px !important;
                min-height: 450px;
                margin-top: 40px;
                span{
                    img{
                        width: 100%;
                        height: 300px !important;
                        
                    }
                }
            }
            .swiper-button-prev, .swiper-button-next{
                width: 40px;
                height: 40px;
                line-height: 40px;
                margin: 0 10px;
                margin-top: -20px;
            }
        }
    }
    @media (max-width: 768px){
        .swiper{
            margin-top: 50px;
            padding-left: 25%;
        }
    }
    @media (max-width: 670px){
        .swiper{
            padding-left: 20%;
            .swiper-button-prev, .swiper-button-next{
                width: 40px;
                height: 40px;
                line-height: 40px;
                margin: 0 10px;
                margin-top: -100px;
            }
            .swiper-button-prev::after, .swiper-button-next::after{
                padding: 0 5px;
                scale: 0.4;
            }
        }
    }
    @media (max-width: 630px){
        .swiper{
            width: 100%;
            padding-left: 20%;
            .swiper-slide{
                width: 350px !important;
                min-width: 350px !important;
                min-height: 450px;
                margin-top: 40px;
                span{
                    img{
                        width: 100%;
                        height: 300px !important;
                    }
                }
            }
        }  
    }
    @media (max-width: 550px){
        .swiper{
            padding-left: 15%;
            .swiper-slide{
                width: 300px !important;
                min-width: 300px !important;
                margin-top: 30px;
                span{
                    img{
                        width: 100%;
                        height: 300px !important;
                    }
                }
                .text-block{
                    h3{
                        font-size: 20px;
                    }
                    p{
                        font-size: 14px;
                    }
                }
            }
        }
    }
    @media (max-width: 460px){
        .swiper{
            padding-left: 20%;
            border: 1px solid #fff;
            margin-top: 20px;
            height: calc(100% - 70px);
            .swiper-slide{
                width: 270px !important;
                min-width: 270px !important;
                margin-top: 10px;
                span{
                    img{
                        width: 100%;
                        height: 300px !important;
                        
                    }
                }
                .text-block{
                    h3{
                        font-size: 20px;
                    }
                    p{
                        font-size: 14px;
                        padding-top: 0;
                    }
                }
            }
            .swiper-button-prev, .swiper-button-next{
                margin-top: calc(60% + 20px);
                margin-bottom:50px;
                &::after{
                    scale: 0.4;
                    padding: 0 3px;
                }
            }
            .swiper-button-prev{
                margin-left: calc(50% - 60px);
            }
            .swiper-button-next{
                margin-right: calc(50% - 60px);
            }
        }
    }
`;