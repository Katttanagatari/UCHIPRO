import { ReactComponent as MainPage } from '../../../assets/img/MainPage.svg' 
import { ReactComponent as Сourses } from '../../../assets/img/Courses.svg' 
import { ReactComponent as Reference } from '../../../assets/img/Reference.svg'
import { ReactComponent as MainPageActive } from '../../../assets/img/MainPage-active.svg' 
import { ReactComponent as СoursesActive } from '../../../assets/img/Courses-active.svg' 
import { ReactComponent as ReferenceActive } from '../../../assets/img/Reference-active.svg' 

export const SidebarData = [
    {
        title: 'Главная',
        path: '/',
        icon: <MainPage />,
        activeIcon : <MainPageActive />,
    },
    {
        title: 'Курсы',
        path: '/courses',
        icon: <Сourses />,
        activeIcon : <СoursesActive />,
    },
    {
        title: 'Справка',
        path: '/reference',
        icon: <Reference />,
        activeIcon : <ReferenceActive />,
    },
]












