import { useParams } from "react-router-dom";

//출력할 데이터 생성
const outputData = { //data
    userSmaria1:{ //adam
        name:'김철수',
        description:'이걸 사? 말아?'
    },
    userSmaria2:{ //jesica
        name:'김영희',
        description:'답정너 인데...'
    }
}

const Profile = () => {
    //URL 파라미터 읽기
    const params = useParams();
    //데이터 찾아오기
    //username이라는 파라미터를 찾아옴
    const profile = outputData[params.username];

    return(
    <div>
        <h1>사용자 프로필</h1>
        {profile ? (<div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            </div>) : 
            (<p>존재하지 않는 프로필입니다.</p>)}
        </div>
    )
}

export default Profile;