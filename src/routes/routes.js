import { createHashRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../components/home/home.jsx';
import ProjectView from '../components/project/project.jsx';
import About from '../components/about/about.jsx';

const routes = [
    {
        path: "/",
        element: <App content={<Home />} />,
    },
    {
        path: "/project",
        element: <App content={<ProjectView />} />,
    },
    {
        path: "/about",
        element: <App content={<About />} />,
    },
]

export const router = createHashRouter(routes)