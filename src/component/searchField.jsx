import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {FormControl} from "react-bootstrap";


function SearchField(props) {

    let searchArea = React.createRef();

    let hendleChange = () => {

        searchArea.current.value ? props.searchOn() : props.searchOff();
        let newSubCommentsList = props.commentsList.map(e=>e.subCommentsList).flat(1);
        let newCommentsList = props.commentsList.concat(newSubCommentsList);
        let searchList  = newCommentsList.filter((val) =>{
             return val.text.toLowerCase().includes((searchArea.current.value).toLowerCase());
        });
        props.doSearch(searchList);
    }

    return (
        <InputGroup className="mb-3 mt-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><span aria-label="img" role="img">🔍</span></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                ref={searchArea}
                onChange={hendleChange}
                placeholder="Search"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}

export default SearchField;


