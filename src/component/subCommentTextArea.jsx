import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SubCommentTextArea(props) {

    let textArea = React.createRef();

    let handleSubmit = (e) => {
        e.preventDefault();
        props.addSubComment(textArea.current.value, props.id);
        textArea.current.value = '';
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Type comments</Form.Label>
            <Form.Control className="mb-2" ref={textArea} as="textarea" rows="3"/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SubCommentTextArea;