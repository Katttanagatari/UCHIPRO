class StudentCourses {
    render() {
        if (typeof COURSES !== 'undefined') {
            COURSES.forEach((el) => {
                console.log(el);
            });
        } else {
            console.error('COURSES is not defined.');
        }
    }
}

const StudentCoursesPage = new StudentCourses();
StudentCoursesPage.render();