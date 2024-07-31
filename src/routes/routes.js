import { createHashRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../components/home/home.jsx';
import ProjectView from '../components/project/project.jsx';

const routes = [
    {
        path: "/",
        element: <App content={<Home />} />,
    },
    {
        path: "/project",
        element: <App content={<ProjectView />} />,
    },
]

export const router = createHashRouter(routes)