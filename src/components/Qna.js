import React,{useState, useRef} from 'react';
import styled from 'styled-components';
import {PlusOutlined} from '@ant-design/icons';

const QnaListItem = styled.li`
    list-style-type: none;
    max-width: 815px;
    margin-bottom: 8px;
    font-weight: 400;
`;

const QnaQuestion = styled.button`
    padding: .8em 2.2em .8em 1.2em;
    margin-bottom: 1px;
    font-weight: 400;
    font-size: 1.625rem;
    font-weight: 400;
    position: relative;
    width: 100%;
    border: 0;
    display: block;
    text-align: left;
    background: #303030;
    color: #f2f2f2;
    cursor: pointer;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1.125rem;
    }
`;

const PlusIcon = styled(PlusOutlined)`
    position: absolute;
    right: 1em;
    top: 30%;
    height: 1em;
    width: 1em;

    transform: rotate( ${props => props.open ? "45deg" : "none"});

`;


const QnaAnswer = styled.div`
    font-size: 1.625rem;
    font-weight: 400;  
    display: ${props => props.close ? "block" : "none"};
    transition: display .25s cubic-bezier(.5,0,.1,1);
    text-align: left;
    background: #303030;
    padding: 1.2em;
    text-align: left;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1.125rem;
    }
    
`;
const Qna = ({id, question, answer}) => {

    const [open, setOpen] = useState(false);

    const onClickButton = (e) => {
        setOpen(!open);
        console.log(open);
    }

    return(
        <>
            <QnaListItem>
                <QnaQuestion id={id} onClick={onClickButton}>
                    {question}
                    <PlusIcon open={open}/>
                </QnaQuestion>
                {open ? 
                (<QnaAnswer close={open}>
                    <span style={{color:"whtie", whiteSpace:"pre-wrap"}}>
                        {answer}
                    </span>
                </QnaAnswer>) 
                :
                null}
            </QnaListItem>
        
        </>
    );
};

export default Qna;
