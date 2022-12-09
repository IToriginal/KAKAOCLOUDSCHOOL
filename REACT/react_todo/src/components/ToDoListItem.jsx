import React from "react";
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import cn from 'classnames';
import "./ToDoListItem.scss";
import { useCallback } from "react";

const ToDoListItem = ({todo, onRemove, onToggle, style}) => {
    //넘어온 데이터 중에서 text와 checked 만 분해
    const {id, text, checked} = todo;
    //data삭제 함수
    const onDelete = useCallback((e)=> {
        const result = window.confirm(text + "를 정말로 삭제하시겠습니까?");
        if(result){
            onRemove(id);
        }
    },[onRemove,id,text]);

    return(
        <div className="ToDoListItem-virtualized" style={style}>
            <div className="ToDoListItem"></div>
                <div className={cn("checkbox", {checked})}
                    onClick={(e)=>onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={onDelete}>
                    <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}
export default React.memo(ToDoListItem);