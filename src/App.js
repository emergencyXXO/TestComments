import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addComment, addSubComment, removeComment, removeSubComment} from "./reducer/AppReducer";
import {Col, Container, Row} from "react-bootstrap";
import CommentItem from './component/commentItem.jsx';
import CommentTextArea from "./component/commentTextArea.jsx";
import SearchField from "./component/searchField";
import {doSearch, searchOff, searchOn} from "./reducer/SearchReducer";
import SearchItem from "./component/searchItem";


function App(props) {

  return (
    <div className="App">
        <Container>
            <Row>
                <Col>
                    <SearchField searchOn={props.searchOn}
                                 searchOff={props.searchOff}
                                 doSearch={props.doSearch}
                                 commentsList={props.commentsList}/>
                    { props.searchFlag ?
                        <>
                            {props.searchList && props.searchList.map(el =>
                                <SearchItem key={el.id}
                                             id={el.id}
                                             text={el.text}
                                />
                            )}
                        </>
                        :
                        <>
                            {props.commentsList.map(el =>
                                <CommentItem key={el.id}
                                             id={el.id}
                                             text={el.text}
                                             subCommentsList={el.subCommentsList}
                                             removeComment={props.removeComment}
                                             removeSubComment={props.removeSubComment}
                                             addSubComment={props.addSubComment}


                                />
                            )}
                            <CommentTextArea addComment={props.addComment}/>
                        </>
                    }

                </Col>
            </Row>
        </Container>

    </div>
  );
}

const mapStateToProps = state => ({ commentsList: state.app.commentsList,searchFlag:state.search.searchFlag,searchList:state.search.searchList});

export default connect(mapStateToProps,{ searchOn,searchOff,doSearch,addComment,removeComment,addSubComment, removeSubComment })(App);
