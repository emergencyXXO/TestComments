const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const ADD_SUB_COMMENT = 'ADD_SUB_COMMENT';
const REMOVE_SUB_COMMENT = 'REMOVE_SUB_COMMENT';

let InitialState = {
commentsList: [
    {   id:1,
        text:"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без",
        subCommentsList:[
            {id:2, text:"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки"},
            {id:45, text:"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки"},
        ]
    },
    {
        id:3,
        text:"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки",
        subCommentsList:[
            {id:4, text:"Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки"},
        ]
    },



]
};

let AppReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            return {
                ...state,
                commentsList: [...state.commentsList, {id: randomInt(0,1000), text: action.newCom, subCommentsList:[]}]
            }
        }

        case REMOVE_COMMENT: {
            return {
                ...state,
                commentsList: state.commentsList.filter(e => e.id !== action.comId),
            }
        }

        case ADD_SUB_COMMENT: {
            let newCommentsList = state.commentsList;
            newCommentsList.filter(e=> e.id === action.comId)[0].subCommentsList.push({id: randomInt(0,1000), text: action.newCom});
            return {
                ...state,
                commentsList:[...newCommentsList]

            }
        }

        case REMOVE_SUB_COMMENT: {

            let targetComment = state.commentsList.filter(e=>e.id === action.subId)[0];
            targetComment.subCommentsList=targetComment.subCommentsList.filter(e => e.id !== action.comId);

            return {
                ...state,
                commentsList:[...state.commentsList]

            }
        }


        default:
            return state;
    }
};

export const addComment = newCom => ({type: ADD_COMMENT, newCom});
export const removeComment = comId => ({ type: REMOVE_COMMENT, comId });
export const addSubComment = (newCom, comId) => ({type: ADD_SUB_COMMENT, newCom, comId});
export const removeSubComment = (comId, subId) => ({ type: REMOVE_SUB_COMMENT, comId, subId });


let randomInt=(min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export default AppReducer;

