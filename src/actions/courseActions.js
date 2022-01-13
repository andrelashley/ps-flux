import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import * as authorApi from '../api/authorApi';
import actionTypes from './actionTypes';

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        authorApi.getAuthors().then(authors => {

            courses.forEach(course => {
                course.authorName = authors.find(author => author.id === course.authorId).name;
            });

            dispatcher.dispatch({
                actionType: actionTypes.LOAD_COURSES,
                courses
            });
        });

    });
}

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            id
        });
    });
}