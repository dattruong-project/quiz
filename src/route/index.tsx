import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen';
import SplashScreen from '../components/SplashScreen';
import QuizCreation from '../components/Quiz/Creation';
import QuestionProvider from '../context/question/QuestionProvider';
import QuizTopicsScreen from '../components/Quiz/QuizTopicsScreen';
import MainQuiz from '../components/Quiz';
import MainLayout from '../components/Dashboard/layout';

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
                <Route index element={<QuestionProvider>
                    < QuizCreation />
                </QuestionProvider>}></Route>
                <Route path={quizCreationRoute} element={<>
                   <MainLayout>
                   <MainQuiz></MainQuiz>
                   </MainLayout>
                </>}>
                </Route>
            </Route>
        </Routes>
    );
}

export default Main;