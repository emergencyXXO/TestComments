import React from 'react';
import Alert from 'react-bootstrap/Alert'

function SubCommentItem(props) {
    return (
        <Alert variant="info" onClose={() => {props.removeSubComment(props.id,props.parentId)}} dismissible>
            <Alert.Heading>Comment #{props.id}</Alert.Heading>
            <p>{props.text}</p>
        </Alert>

    )
}

export default SubCommentItem;