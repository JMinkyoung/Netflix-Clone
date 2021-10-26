import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from 'redux';
import saved from './saved';
import movie from './movie';
import tv from './tv';

// (이전 상태, 액션) => 다음상태
const rootReducer = (state, action) => {
    switch (action.type){
        case HYDRATE:
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                saved,
                movie,
                tv,
            });
            return combinedReducer(state,action);
        }
    }
};
 
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;