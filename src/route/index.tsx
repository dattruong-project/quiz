import { Routes, Route } from 'react-router-dom'
import SplashScreen from '../components/SplashScreen';
// import QuizCreation from '../components/Quiz/Creation';
// import QuestionProvider from '../context/question/QuestionProvider';
// import QuizTopicsScreen from '../components/Quiz/QuizTopicsScreen';
// import MainQuiz from '../components/Quiz';
// import MainLayout from '../components/Dashboard/layout';
import QuizScreen from '../components/Quiz';
import LoginScreen from '../components/LoginScreen';

export const defaultRoute = '/';
export const loginRoute = 'login';

export const dashboardRoute = 'dashboard';
export const quizRoute = '/quiz';

const Main = () => {
    return (
        <Routes >
            <Route path={defaultRoute} element={<SplashScreen />} />
            <Route path={loginRoute} element={<LoginScreen />} />
            <Route path={dashboardRoute} element = {<QuizScreen />}> 
                {/* <Route index path={quizRoute} element={<>
                   <QuizScreen />
                </>}>
                </Route> */}
            </Route>
        </Routes>
    );
}

export default Main;