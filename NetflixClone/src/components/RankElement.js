import React,{useState} from 'react';
import styled from 'styled-components';
import { DownCircleOutlined, PlayCircleFilled } from '@ant-design/icons';

const RankElementWrapper = styled.div`
    display: flex;
    width:300px; 
    height:220px;
    margin-right:5px;
    transform: ${props => props.hovered ? "scale(1.5,1.4)": null };
    transition: all .5s ease .2s;
    border-radius: 4px;
    cursor: pointer;
`;

const RankImage = styled.img`
    display: ${props => props.hovered ? "none" :"block"};
    transition: all .5s ease .2s;

`;

const RankPoster = styled.img`
    display: ${props => props.hovered ? "none" :"block"};
    transition: all .5s ease .2s;
    border-radius: 0px 4px 4px 0px;

`;

const RankHoverImage = styled.img`
    width: 100%;
    border-radius: 4px 4px 0px 0px;
    vertical-align: bottom;
`;

const RankInfoWrapper = styled.div`
    border-radius: 0px 0px 4px 4px;
    width:100%;
    height:50px;
    background-color: rgb(20, 20, 20);
`;

const RankHoverWrapper = styled.div`
    width: 400px;
    display: flex;
    color: white;
    font-size: 25px;
    display: ${props => props.hovered ? "block" :"none"};
    transition: all .5s ease .2s;
    background-color: rgb(20, 20, 20);

`;

const HoverTitle = styled.span`
    position: absolute;
    font-size: 20px;
    left: 5%;
    bottom: 6%;
`;

const HoverInfoButton = styled(DownCircleOutlined)`
    position: absolute;
    right: 5%;
    bottom: 6%;
    :hover {
        color: grey;
    }
`;

const RankElement = ({setContentId, setModalOpend, setMediaType, data}) => {

    const [delayHandler, setDelayHandler] = useState(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = e => {
        setDelayHandler(setTimeout(()=>{
            setHovered(true);
        },800));
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setHovered(false);
    }

    
    const modalOpen = () => {
        setModalOpend(true);
        setContentId(data.id);
        setMediaType(data.type);
    };

    return (
        <RankElementWrapper onClick={modalOpen}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} hovered={hovered}>
            <RankImage hovered={hovered} src={`/images/rank/${data.rank}_1.png`}/>
            <RankPoster hovered={hovered} src={`/images/rank/${data.rank}.png`}/>
            <RankHoverWrapper hovered={hovered}>
                <RankHoverImage src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
                <RankInfoWrapper >
                    <HoverTitle>{data.title}</HoverTitle>
                    <HoverInfoButton/>
                </RankInfoWrapper>
            </RankHoverWrapper>
        </RankElementWrapper>
    );
};

export default RankElement;
