import React from 'react';
import Alert from 'react-bootstrap/Alert'
import SubCommentItem from "./subCommentItem";
import SubCommentTextArea from "./subCommentTextArea";

function CommentItem(props) {

    return (
        <Alert variant="info" onClose={() => {props.removeComment(props.id)}} dismissible>
            <Alert.Heading>Comment #{props.id}</Alert.Heading>
            <p>{props.text}</p>
            {props.subCommentsList.map(el =>
                <SubCommentItem key={el.id}
                             parentId={props.id}
                             id={el.id}
                             text={el.text}
                             removeSubComment={props.removeSubComment}
                />
            )}
            {<SubCommentTextArea id={props.id} addSubComment = {props.addSubComment} />}
        </Alert>
    )
}



export default CommentItem;