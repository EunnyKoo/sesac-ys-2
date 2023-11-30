import { Component } from "react";

class EventClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "hoi hoi",
        }

        //함수 선언문을 이용하여 선언된 메소드는 this객체를 직접 바인딩 해줘야지
        //handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다. 
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    //함수 선언문을 사용하여 메소드를 정의
    //함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 됨.
    //해결법 1. 생성자 내부에서 this를 원하는 것으로 바인딩
    //해결법 2. 함수 표현식 사용 
    //함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정됨
    handleOnClick() {
        // console.log(this)
        this.setState({msg: "doi doi"}); 
    }

    //함수 표현식을 사용하면 this를 가져오는 코드를 작성하지 않아도 되죠? : 정적바인딩
    //함수 표현식은 함수가 선언할 때 this를 결정 지음. 함수를 선언하는 코드를 읽을 때 this 결정됨.
    handleOnClickHello = () => {
        this.setState({msg: "hoi hoi"}); 
    }

    render() {
        return (
        <>
            <h3>클래스형 컴포넌트 event handling 공부</h3>
            
            {this.state.msg}
            <button onClick={this.handleOnClick}>
                잘가
            </button>
            <button onClick={this.handleOnClickHello}>
                안녕
            </button>
        </>
        )
    }
}

export default EventClass;