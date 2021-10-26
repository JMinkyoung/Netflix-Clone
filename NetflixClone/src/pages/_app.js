// 모든 페이지에서 공통적인 부분을 처리하는 파일
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {Provider} from 'react-redux';
import {store} from '../reducers/store';
import GlobalStyle from '../../public/styles/GlobalStyle';

import wrapper from '../store/configureStore';

const App = ({Component})=>{

    const [selected, setSelected] = useState(1);

    return(
    <>
    {/* <Provider store={store}> */}
        <GlobalStyle/>
        <Head>
            <meta charSet="utf-8" />
            <title>넷플릭스</title>
        </Head>
        <Component selected={selected} setSelected={setSelected} />
    {/* </Provider> */}
    </>
    );
};

App.propTypes = {
    Component:PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);