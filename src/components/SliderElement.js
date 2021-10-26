import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { DownCircleOutlined, PlayCircleFilled } from '@ant-design/icons';

const SliderElementWrapper = styled.div`
    margin-right: 3px;
    visibility: ${props => props.id === 0 && !props.started ? "hidden" : "visible"};
    transform: ${props => props.hovered ? "scale(1.2,1.7)": null };
    transition: all .5s ease .2s;
    background-color: rgb(20, 20, 20);
    border-radius: 4px;
    cursor: pointer;
`;


const HoverContentWrapper = styled.div`
    width: ${props => props.hovered ? "330px" :"296px"};
    height: ${props => props.hovered ? "130px" :"166px"};
    background-color: rgb(20, 20, 20);
    transition: all .5s ease .2s;
`;

const SliderElementImg = styled.img`
    transition: all .5s ease .2s;
    width: 100%;
    height: 100%;
    border-radius: 4px;
`;

const HoverInfoWrapper = styled.div`
    width: 100%;
    transition: all .5s ease .2s;
    display: flex;
    height: ${props => props.hovered ? "auto" : "0"};
    opacity: ${props => props.hovered ? "1" : "0"};
    transform: ${props => props.hovered ? "scale(0.9,0.7)" : null};
    background-color: rgb(20, 20, 20);
    font-size: 14px;
    border-radius: 4px;

`;

const HoverButtonWrapper = styled.div`
    margin-top: 5px;
    font-size: 30px;
`;

const HoverTitle = styled.span`
    position: absolute;
    font-size: 20px;
    left: 2%;
`;

const HoverInfoButton = styled(DownCircleOutlined)`
    position: absolute;
    right: 2%;
    :hover {
        color: grey;
    }
`;

const SliderElement = ({type, setContentId, setModalOpend, setMediaType, id, started, data}) => {

    const [delayHandler, setDelayHandler] = useState(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = e => {
        setDelayHandler(setTimeout(()=>{
            setHovered(true);
        },500));
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setHovered(false);
    }

    
    const modalOpen = () => {
        if(data.media_type === undefined){
            setMediaType(type);
        }else{
            setMediaType(data.media_type);
        }
        setModalOpend(true);
        setContentId(data.id);
        
    };

    useEffect(()=>{
        if(type === "tv"){
            console.log(data);
        }
    },[])

    return (
        <>
        <SliderElementWrapper onClick={modalOpen}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={id} started={started} hovered={hovered}>         
            <HoverContentWrapper hovered={hovered}>
                <SliderElementImg hovered={hovered} id={id} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
                <HoverInfoWrapper style={{color:"white"}} hovered={hovered}>
                    <HoverButtonWrapper>
                        <HoverTitle>{data.title ? data.title : data.name}</HoverTitle>
                        <HoverInfoButton onClick={modalOpen}/>
                    </HoverButtonWrapper>
                </HoverInfoWrapper>
            </HoverContentWrapper>
        </SliderElementWrapper>
        </>
    );
};

export default SliderElement;