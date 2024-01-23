
import MainLayout from "../../Dashboard/layout";
import { FormsProvider } from "dynamic-builder-form";
import "./creation.css";
import { Tabs, TabsProps } from "antd";
import TopicTab from "./component/tab/topic";
import { useTopic } from "../../../context/topic/TopicContext";

export enum QuizTab {
  TopicTab = "topic",
  QuestionTab = "question"
}

const QuizCreation = () => {
  
  const {quizTab, setQuizTab} = useTopic();

  const items: TabsProps['items'] = [
    {
      key: QuizTab.TopicTab,
      label: 'Tab 1',
      children: <TopicTab />,
    },
    {
      key: QuizTab.QuestionTab,
      label: 'Tab 2',
      children: null,
      disabled: true
    }
  ];

  return <>
    <FormsProvider>
      <MainLayout>
        <Tabs defaultActiveKey={QuizTab.TopicTab} items={items} onChange={(tab) => setQuizTab(tab as QuizTab)} activeKey={quizTab} />
      </MainLayout>
    </FormsProvider>
  </>
}

export default QuizCreation;