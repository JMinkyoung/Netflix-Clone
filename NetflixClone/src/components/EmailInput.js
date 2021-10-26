import React,{useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const EmailInputWrapper = styled.div`
    position: relative;
    width: 450px;
    height: 48px;
    @media screen and (min-width: 740px) {
        height: 60px;
    }

    @media only screen and (min-width: 550px) and (max-width: 949px)  {
        width: 400px;
        height: 45px;
    }

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px) {
        width: 300px;
        height: 40px;
    }
`;

const EmailInputText = styled.input`
    width: 100%;
    height: 100%;
    padding-top: 5px;
    padding-left: 10px;
    font-size: 1em;
    border-bottom: ${props => props.check && props.clicked ? "solid 2px green" : "solid 2px #ffa00a"};

    :focus {
        outline: none;
    }
`;

const EmailPlaceholder = styled.label`
    position: absolute;
    left: 0;
    top: ${props => props.clicked ? "5px" : "20px"};
    font-size: ${props => props.clicked ? "15px" : "18px"};
    transition: all .2s;
    padding-left: 10px;
    color:grey;

    @media screen and (min-width: 740px) {
        font-size: ${props => props.clicked ? "15px" : "18px"};
    }

    @media only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: ${props => props.clicked ? "10px" : "15px"};
    }

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px) {
        font-size: ${props => props.clicked ? "5px" : "10px"};
    }
`;

const EmailInput = () => {
    const [email, setEmail] = useState('');
    const [clicked, setClicked] = useState(false);
    const el = useRef();

    const onChange = (e) => {
        setEmail(e.target.value);
        // console.log(checkEmail(email));
    }

    const handleUncliked = (e) => {
        if(clicked && !(e.target === el.current)){
            setClicked(false);
            setEmail("");
        }
    }

    useEffect(()=>{
        window.addEventListener("click", handleUncliked);
        return () => {
            window.removeEventListener("click", handleUncliked);
        }
    },[clicked])
    
    const checkEmail = (e) => {
        const reg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (e != '' && e != 'undefined' && reg.test(e)); 
    }
    return (
        <EmailInputWrapper>
            <EmailInputText clicked={clicked}check={checkEmail(email)} value={email} type="email" onChange={onChange} onClick={()=>setClicked(true)} ref={el}/>
            <EmailPlaceholder clicked={clicked}>이메일 주소</EmailPlaceholder>
            {clicked && !checkEmail(email) && email.length > 0 ? <label style={{color:"#ffa00a", position:"absolute", left:"0"}}>정확한 이메일 주소를 입력하세요.</label> : null}
        </EmailInputWrapper>
    );
};

export default EmailInput;