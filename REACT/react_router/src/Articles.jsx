import { Link } from "react-router-dom";
const Articles = () => {
    return (
        <ul>
            <li>
                <Link to = "/articles/1">
                    이 페이지에서는 당신은 두가지 선택 뿐입니다. "산다" 그리고 "안산다" 명심하세요.
                </Link>
            </li>
            <li>
                <Link to = "/articles/1">
                    %가 작게 나온다면 과감하게 돈을 버리지 마시고 포기하세요. 
                </Link>
            </li>
        </ul>
    );
}
export default Articles;