export const initialState = {
  infos:[],
  videos: [],
  keywords: [],
  credits:[],
  similars: [],

  popularmovie: [],
  trendingmovie:[],
  nowplayingmoive:[],
  upcomingmovie:[],

  getInfoLoading: false,
  getInfoDone: false,
  getInfoError: null,

  getVideoLoading: false,
  getVideoDone: false,
  getVideoError: null,

  getKeywordLoading: false,
  getKeywordDone: false,
  getKeywordError: null,

  getCreditLoading: false,
  getCreditDone: false,
  getCreditError: null,

  getSimilarLoading: false,
  getSimilarDone: false,
  getSimilarError: null,

  getPopularLoading: false,
  getPopularDone: false,
  getPopularError: null,

  getTrendingLoading: false,
  getTrendingDone: false,
  getTrendingError: null,

  getNowPlayingLoading: false,
  getNowPlayingDone: false,
  getNowPlayingError: null,

  getUpComingLoading: false,
  getUpComingDone: false,
  getUpComingError: null,
}

export const GET_MOVIE_INFO_REQUEST = 'GET_MOVIE_INFO_REQUEST';
export const GET_MOVIE_INFO_SUCCESS = 'GET_MOVIE_INFO_SUCCESS';
export const GET_MOVIE_INFO_FAILURE = 'GET_MOVIE_INFO_FAILURE';

export const GET_MOVIE_VIDEO_REQUEST = 'GET_MOVIE_VIDEO_REQUEST';
export const GET_MOVIE_VIDEO_SUCCESS = 'GET_MOVIE_VIDEO_SUCCESS';
export const GET_MOVIE_VIDEO_FAILURE = 'GET_MOVIE_VIDEO_FAILURE';

export const GET_MOVIE_KEYWORDS_REQUEST = 'GET_MOVIE_KEYWORDS_REQUEST';
export const GET_MOVIE_KEYWORDS_SUCCESS = 'GET_MOVIE_KEYWORDS_SUCCESS';
export const GET_MOVIE_KEYWORDS_FAILURE = 'GET_MOVIE_KEYWORDS_FAILURE';

export const GET_MOVIE_CREDITS_REQUEST = 'GET_MOVIE_CREDITS_REQUEST';
export const GET_MOVIE_CREDITS_SUCCESS = 'GET_MOVIE_CREDITS_SUCCESS';
export const GET_MOVIE_CREDITS_FAILURE = 'GET_MOVIE_CREDITS_FAILURE';

export const GET_MOVIE_SIMILAR_REQUEST = 'GET_MOVIE_SIMILAR_REQUEST';
export const GET_MOVIE_SIMILAR_SUCCESS = 'GET_MOVIE_SIMILAR_SUCCESS';
export const GET_MOVIE_SIMILAR_FAILURE = 'GET_MOVIE_SIMILAR_FAILURE';

export const GET_POPULAR_MOVIE_REQUEST = 'GET_POPULAR_MOVIE_REQUEST';
export const GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS';
export const GET_POPULAR_MOVIE_FAILURE = 'GET_POPULAR_MOVIE_FAILURE';

export const GET_TRENDING_MOVIE_REQUEST = 'GET_TRENDING_MOVIE_REQUEST';
export const GET_TRENDING_MOVIE_SUCCESS = 'GET_TRENDING_MOVIE_SUCCESS';
export const GET_TRENDING_MOVIE_FAILURE = 'GET_TRENDING_MOVIE_FAILURE';

export const GET_NOWPLAYING_MOVIE_REQUEST = 'GET_NOWPLAYING_MOVIE_REQUEST';
export const GET_NOWPLAYING_MOVIE_SUCCESS = 'GET_NOWPLAYING_MOVIE_SUCCESS';
export const GET_NOWPLAYING_MOVIE_FAILURE = 'GET_NOWPLAYING_MOVIE_FAILURE';

export const GET_UPCOMING_MOVIE_REQUEST = 'GET_UPCOMING_MOVIE_REQUEST';
export const GET_UPCOMING_MOVIE_SUCCESS = 'GET_UPCOMING_MOVIE_SUCCESS';
export const GET_UPCOMING_MOVIE_FAILURE = 'GET_UPCOMING_MOVIE_FAILURE';


const reducer = (state = initialState , action) => {
    switch(action.type){
      case GET_MOVIE_INFO_REQUEST:
        return{
            ...state,
            getInfoLoading:true,
            getInfoDone:false,
            getInfoError:null,
        };
      case GET_MOVIE_INFO_SUCCESS:
        return{
            ...state,
            infos: action.data,
            getInfoLoading:false,
            getInfoDone:true,
        };
      case GET_MOVIE_INFO_FAILURE:
        return{
          ...state,
          getInfoLoading:false,
          getInfoError:action.error,
        };
      case GET_MOVIE_VIDEO_REQUEST:
        return{
            ...state,
            getVideoLoading:true,
            getVideoDone:false,
            getVideoError:null,
        };
      case GET_MOVIE_VIDEO_SUCCESS:
        return{
            ...state,
            videos: action.data,
            getVideoLoading:false,
            getVideoDone:true,
        };
      case GET_MOVIE_VIDEO_FAILURE:
        return{
          ...state,
          getVideoLoading:false,
          getVideoError:action.error,
        };
      case GET_MOVIE_KEYWORDS_REQUEST:
        return{
            ...state,
            getKeywordLoading:true,
            getKeywordDone:false,
            getKeywordError:null,
        };
      case GET_MOVIE_KEYWORDS_SUCCESS:
        return{
            ...state,
            keywords: action.data,
            getKeywordLoading:false,
            getKeywordDone:true,
        };
      case GET_MOVIE_KEYWORDS_FAILURE:
        return{
          ...state,
          getKeywordLoading:false,
          getKeywordError:action.error,
        };
      case GET_MOVIE_CREDITS_REQUEST:
        return{
            ...state,
            getCreditLoading:true,
            getCreditDone:false,
            getCreditError:null,
        };
      case GET_MOVIE_CREDITS_SUCCESS:
        return{
            ...state,
            credits: action.data,
            getCreditLoading:false,
            getCreditDone:true,
        };
      case GET_MOVIE_CREDITS_FAILURE:
        return{
          ...state,
          getCreditLoading:false,
          getCreditError:action.error,
        };
      case GET_MOVIE_SIMILAR_REQUEST:
        return{
            ...state,
            getSimilarLoading:true,
            getSimilarDone:false,
            getSimilarError:null,
        };
      case GET_MOVIE_SIMILAR_SUCCESS:
        return{
            ...state,
            similars: action.data,
            getSimilarLoading:false,
            getSimilarDone:true,
        };
      case GET_MOVIE_SIMILAR_FAILURE:
        return{
          ...state,
          getSimilarLoading:false,
          getSimilarError:action.error,
        };
      case GET_POPULAR_MOVIE_REQUEST:
        return{
            ...state,
            getPopularLoading:true,
            getPopularDone:false,
            getPopularError:null,
        };
      case GET_POPULAR_MOVIE_SUCCESS:
        return{
            ...state,
            popularmovie: action.data,
            getPopularLoading:false,
            getPopularDone:true,
        };
      case GET_POPULAR_MOVIE_FAILURE:
        return{
          ...state,
          getPopularLoading:false,
          getPopularError:action.error,
        };
      case GET_TRENDING_MOVIE_REQUEST:
        return{
            ...state,
            getTrendingLoading:true,
            getTrendingDone:false,
            getTrendingError:null,
        };
      case GET_TRENDING_MOVIE_SUCCESS:
        return{
            ...state,
            trendingmovie: action.data,
            getTrendingLoading:false,
            getTrendingDone:true,
        };
      case GET_TRENDING_MOVIE_FAILURE:
        return{
          ...state,
          getTrendingLoading:false,
          getTrendingError:action.error,
        };
      case GET_NOWPLAYING_MOVIE_REQUEST:
        return{
            ...state,
            getNowPlayingLoading:true,
            getNowPlayingDone:false,
            getNowPlayingError:null,
        };
      case GET_NOWPLAYING_MOVIE_SUCCESS:
        return{
            ...state,
            nowplayingmoive: action.data,
            getNowPlayingLoading:false,
            getNowPlayingDone:true,
        };
      case GET_NOWPLAYING_MOVIE_FAILURE:
        return{
          ...state,
          getNowPlayingLoading:false,
          getNowPlayingError:action.error,
        };
      case GET_UPCOMING_MOVIE_REQUEST:
        return{
            ...state,
            getUpComingLoading:true,
            getUpComingDone:false,
            getUpComingError:null,
        };
      case GET_UPCOMING_MOVIE_SUCCESS:
        return{
            ...state,
            upcomingmovie: action.data,
            getUpComingLoading:false,
            getUpComingDone:true,
        };
      case GET_UPCOMING_MOVIE_FAILURE:
        return{
          ...state,
          getUpComingLoading:false,
          getUpComingError:action.error,
        };
        default:
          return state;
    };
};

export default reducer;
