import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen';
import QuizScreen from '../components/Quiz/Creation';
import SplashScreen from '../components/SplashScreen';
import QuizTopicsScreen from '../components/Quiz/QuizTopicsScreen';
import MainLayout from '../components/Dashboard/layout';
import QuizProvider from '../context/QuizProvider';
import QuizCreation from '../components/Quiz/Creation';

export const defaultRoute = '/';
export const loginRoute = 'login';

export const dashboardRoute = 'dashboard';
export const quizRoute = 'quiz';
export const quizCreationRoute = 'quiz-creation';

const Main = () => {
    return (
        <Routes >
            <Route path={defaultRoute} element={<SplashScreen />} />
            <Route path={loginRoute} element={<LoginScreen />} />
            <Route path={dashboardRoute}>
                <Route index element={< QuizCreation/>}></Route>
                <Route path={quizCreationRoute} element={<>
                    <MainLayout>
                            <QuizTopicsScreen></QuizTopicsScreen>
                    </MainLayout>
                </>}>
                </Route>
            </Route>
        </Routes>
    );
}

export default Main;