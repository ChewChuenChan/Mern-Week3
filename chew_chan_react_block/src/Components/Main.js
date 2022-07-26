import SubContents from './SubContents';
import Advertisement from './Advertisement';
import Navigation from "./Navigation";

const Main = () =>{
    return (
            <Navigation bgColor="#e06666" height="380px" width="580px">
                <SubContents bgColor="#ffd966" height="200px" width="170px"/>
                <SubContents bgColor="#ffd966" height="200px" width="170px"/>
                <SubContents bgColor="#ffd966" height="200px" width="170px"/>
                <Advertisement bgColor="#b4a7d6" height="120px" width="550px" margin="10px" />
            </Navigation>
    );
}

export default Main;