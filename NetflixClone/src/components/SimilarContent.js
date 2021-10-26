import React from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';

const SimilarCardWrapper = styled.div`
    margin: .1em;
    height: 355px;
    border-radius: 5px;
    background-color: #2f2f2f;
    cursor: pointer;

`;

const PlayButton = styled(PlayCircleOutlined)`
    visibility: hidden;
    position: absolute;
    font-size: 50px;
    transition: opacity .2s ease-in;
    ${SimilarCardWrapper}:hover & {
        visibility: visible;
    }
`;

const SimilarContent = ({data}) => {

    return (
        <SimilarCardWrapper>
            <div style={{width:"100%", display:"flex", alignItems:"center",justifyContent:"center"}}>
                <img style={{ textAlign:"center", width:"100%", borderRadius:"5px"}} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
                <PlayButton />
            </div>
            <div style={{padding:"0 1em 1em"}}>
                <div style={{display:"flex", alignItems:"center", margin:"15px 0 15px 0"}}>
                    <img src={data.adult ? "/images/age_18.png" : "/images/age_15.png"}/>
                    <div style={{fontSize:"16px",fontWeight:"bold", marginLeft:"10px", marginRight:"130px"}}>
                        {data.first_air_date ? 
                            data.first_air_date.substr(0,4) :
                            data.release_date.substr(0,4)
                        }
                    </div>
                    <PlusCircleOutlined style={{fontSize:"35px"}} />
                </div>
                <div style={{fontSize:"14px"}}>
                    {data.overview.length > 90 ? data.overview.substr(0,90)+" ···" : data.overview}
                </div>
            </div>
        </SimilarCardWrapper>
    );
};

export default SimilarContent;
