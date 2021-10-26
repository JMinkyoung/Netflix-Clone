import { all, fork ,put, takeLatest, call} from "redux-saga/effects";
import axios from 'axios';
import { 
    GET_TV_INFO_REQUEST, GET_TV_INFO_SUCCESS, GET_TV_INFO_FAILURE, 
    GET_TV_VIDEO_REQUEST, GET_TV_VIDEO_SUCCESS, GET_TV_VIDEO_FAILURE,
    GET_TV_CREDITS_REQUEST, GET_TV_CREDITS_SUCCESS, GET_TV_CREDITS_FAILURE,
    GET_TV_KEYWORDS_REQUEST, GET_TV_KEYWORDS_SUCCESS, GET_TV_KEYWORDS_FAILURE,
    GET_TV_SIMILAR_REQUEST, GET_TV_SIMILAR_SUCCESS, GET_TV_SIMILAR_FAILURE,
    GET_TV_POPULAR_REQUEST, GET_TV_POPULAR_SUCCESS, GET_TV_POPULAR_FAILURE,
    GET_TV_TRENDING_REQUEST, GET_TV_TRENDING_SUCCESS, GET_TV_TRENDING_FAILURE,
    GET_TV_TOPRATED_REQUEST, GET_TV_TOPRATED_SUCCESS, GET_TV_TOPRATED_FAILURE,
    GET_TV_ONTHEAIR_REQUEST, GET_TV_ONTHEAIR_SUCCESS, GET_TV_ONTHEAIR_FAILURE,
    GET_TRENDING_WEEK_REQUEST, GET_TRENDING_WEEK_SUCCESS, GET_TRENDING_WEEK_FAILURE,
    GET_TRENDING_DAY_REQUEST, GET_TRENDING_DAY_SUCCESS, GET_TRENDING_DAY_FAILURE

} from '../reducers/tv';

function tvvideoAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/tv/${data}/videos?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function tvinfoAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/tv/${data}?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function tvcreditAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/tv/${data}/credits?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function tvkeywordAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/tv/${data}/keywords?api_key=0f54240da860f0ee0a59657346e7a8cc`);
}

function tvsimilarAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/tv/${data}/similar?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}

function populartvAPI() {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}

function populartvAPI2() {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=2`);
}

function populartvAPI3() {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=3`);
}

function tvtrendingAPI() {
    return axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function tvtrendingAPI2() {
    return axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=2`);
}

function tvtopratedAPI() {
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}

function tvtopratedAPI2() {
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=2`);
}

function tvontheairAPI() {
    return axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}

function tvontheairAPI2() {
    return axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=2`);
}

function tvontheairAPI3() {
    return axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=3`);
}

function trendingweekAPI() {
    return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}

function trendingweekAPI2() {
    return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=2`);
}

function trendingdayAPI() {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}

function trendingdayAPI2() {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=2`);
}

function* getTVVideo(action) {
    try {
        const result = yield call(tvvideoAPI,action.data);
        yield put({
            type: GET_TV_VIDEO_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_VIDEO_FAILURE,
            error: error.response.data
        });
    }
}

function* getTVInfo(action) {
    try {
        const result = yield call(tvinfoAPI,action.data);
        yield put({
            type: GET_TV_INFO_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_INFO_FAILURE,
            error: error.response.data
        });
    }
}

function* getTVCredit(action) {
    try {
        const result = yield call(tvcreditAPI,action.data);
        yield put({
            type: GET_TV_CREDITS_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_CREDITS_FAILURE,
            error: error.response.data
        });
    }
}

function* getTVKeyword(action) {
    try {
        const result = yield call(tvkeywordAPI,action.data);
        yield put({
            type: GET_TV_KEYWORDS_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_KEYWORDS_FAILURE,
            error: error.response.data
        });
    }
}

function* getTVSimilar(action) {
    try {
        const result = yield call(tvsimilarAPI,action.data);
        yield put({
            type: GET_TV_SIMILAR_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_SIMILAR_FAILURE,
            error: error.response.data
        });
    }
}

function* getPopularTV() {
    try {
        const data1 = yield call(populartvAPI);
        const data2 = yield call(populartvAPI2);
        const data3 = yield call(populartvAPI3);
        yield put({
            type: GET_TV_POPULAR_SUCCESS,
            data: [...data1.data.results, ...data2.data.results, ...data3.data.results],
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_POPULAR_FAILURE,
            error: error.response.data
        });
    }
}

function* getTrendingTV() {
    try {
        const data1 = yield call(tvtrendingAPI);
        const data2 = yield call(tvtrendingAPI2);
        yield put({
            type: GET_TV_TRENDING_SUCCESS,
            data: [...data1.data.results,...data2.data.results],
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_TRENDING_FAILURE,
            error: error.response.data
        });
    }
}

function* getTopRatedTV() {
    try {
        const data1 = yield call(tvtopratedAPI);
        const data2 = yield call(tvtopratedAPI2);
        yield put({
            type: GET_TV_TOPRATED_SUCCESS,
            data: [...data1.data.results,...data2.data.results],
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_TOPRATED_FAILURE,
            error: error.response.data
        });
    }
}

function* getOnTheAirTV() {
    try {
        const data1 = yield call(tvontheairAPI);
        const data2 = yield call(tvontheairAPI2);
        const data3 = yield call(tvontheairAPI3);

        yield put({
            type: GET_TV_ONTHEAIR_SUCCESS,
            data: [...data1.data.results,...data2.data.results,...data3.data.results],
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TV_ONTHEAIR_FAILURE,
            error: error.response.data
        });
    }
}

function* getTrendingWeek() {
    try {
        const data1 = yield call(trendingweekAPI);
        const data2 = yield call(trendingweekAPI2);
        yield put({
            type: GET_TRENDING_WEEK_SUCCESS,
            data: [...data1.data.results,...data2.data.results],
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TRENDING_WEEK_FAILURE,
            error: error.response.data
        });
    }
}

function* getTrendingDay() {
    try {
        const data1 = yield call(trendingdayAPI);
        const data2 = yield call(trendingdayAPI2);
        yield put({
            type: GET_TRENDING_DAY_SUCCESS,
            data: [...data1.data.results,...data2.data.results],
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_TRENDING_DAY_FAILURE,
            error: error.response.data
        });
    }
}


function* watchGetTvVideo() {
    yield takeLatest(GET_TV_VIDEO_REQUEST,getTVVideo);
}

function* watchGetTvInfo() {
    yield takeLatest(GET_TV_INFO_REQUEST,getTVInfo);
}

function* watchGetTvCredit() {
    yield takeLatest(GET_TV_CREDITS_REQUEST,getTVCredit);
}

function* watchGetTvKeyword() {
    yield takeLatest(GET_TV_KEYWORDS_REQUEST,getTVKeyword);
}

function* watchGetTvSimilar() {
    yield takeLatest(GET_TV_SIMILAR_REQUEST,getTVSimilar);
}

function* watchGetPopularTv() {
    yield takeLatest(GET_TV_POPULAR_REQUEST,getPopularTV);
}

function* watchGetTrendingTv() {
    yield takeLatest(GET_TV_TRENDING_REQUEST,getTrendingTV);
}

function* watchGetTopRatedTv() {
    yield takeLatest(GET_TV_TOPRATED_REQUEST,getTopRatedTV);
}

function* watchGetOnTheAirTv() {
    yield takeLatest(GET_TV_ONTHEAIR_REQUEST,getOnTheAirTV);
}

function* watchGetTrendingWeek() {
    yield takeLatest(GET_TRENDING_WEEK_REQUEST,getTrendingWeek);
}

function* watchGetTrendingDay() {
    yield takeLatest(GET_TRENDING_DAY_REQUEST,getTrendingDay);
}

export default function* tvSaga() {
    yield all([
        fork(watchGetTvInfo),
        fork(watchGetTvVideo),
        fork(watchGetTvCredit),
        fork(watchGetTvKeyword),
        fork(watchGetTvSimilar),
        fork(watchGetPopularTv),
        fork(watchGetTrendingTv),
        fork(watchGetTopRatedTv),
        fork(watchGetOnTheAirTv),
        fork(watchGetTrendingWeek),
        fork(watchGetTrendingDay),
    ]);
}