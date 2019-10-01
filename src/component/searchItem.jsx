import React from 'react';
import Alert from 'react-bootstrap/Alert'

function SearchItem(props) {
    return (
        <Alert variant="info"  >
            <Alert.Heading>Comment #{props.id}</Alert.Heading>
            <p>{props.text}</p>
        </Alert>

    )
}

export default SearchItem;