const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

//발생할 수 있는 action을 return하는 함수 
//왜 만들었나요? 액션 type 이름이 바뀐다고 가정하면, 액션을 발생시키는 모든 곳(dispatch)에서
//actipn.type를 다 변경해야 함 이]]]ㅣ이를 해결하기 위해 만듦
export const increase = () => ({type: INCREMENT});
export const decrease = () => ({type: DECREMENT});

const initialValue = {number: 100};

const counterReducer = (state=initialValue, action) => {
  switch(action.type) {
    case 'INCREMENT': //INCREMENT 상수 선언 전 VER.3
    case INCREMENT: //INCREMENT 상수 선언 후 VER.3-1
      return {number: state.number + 1};
    case 'DECREMENT':
    case DECREMENT :
      return {number: state.number - 1};
    default:
      return state;
  }
};

export default counterReducer;
