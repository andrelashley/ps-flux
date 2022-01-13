import dispatcher from '../appDispatcher';
import * as authorApi from '../api/authorApi';
import actionTypes from './actionTypes';

// export function saveAuthor(course) {
//     return courseApi.saveCourse(course).then(savedCourse => {
//         dispatcher.dispatch({
//             actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
//             course: savedCourse
//         });
//     });
// }

export function loadAuthors() {
    return authorApi.getAuthors().then(authors => {
            dispatcher.dispatch({
                actionType: actionTypes.LOAD_AUTHORS,
                authors
            });
        });
}

// export function deleteCourse(id) {
//     return courseApi.deleteCourse(id).then(() => {
//         dispatcher.dispatch({
//             actionType: actionTypes.DELETE_COURSE,
//             id
//         });
//     });
// }