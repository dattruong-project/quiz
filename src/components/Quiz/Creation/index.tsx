
import MainLayout from "../../Dashboard/layout";
import { python } from "../../../data/QuizQuestions/python";
import { QuestionType, Topic } from "../../../data/QuizQuestions";
import { QuizTopic } from "../../../data/quizTopics";
import { Dictionary, FormsProvider, MasterForm, SelectComponent, dictionary } from "dynamic-builder-form";
import { useState } from "react";
import "./creation.css";
import { Tabs, TabsProps } from "antd";
import { topicSchema } from "./topic/schema";
import { questionSchema } from "./question/schema";
import { quizDictionary } from "../../../dictionary";
import ChoiceComponent from "./component/choice";
import { UseFormReturn } from "dynamic-builder-form/dist/form-controller";

const quiz: Record<string, Topic> = {
  Python: python
}

const category: QuizTopic = {
  title: "Python",
  icon: undefined
}

const topicForm = "topicForm";
const questionForm = "questionForm";

const QuizCreation = () => {
  const [questionType, setQuestionType] = useState<QuestionType>("MAQs");

  const questionDictionary: Dictionary = {
    ...quizDictionary,
    select: (props) => (
      <SelectComponent  {...props} onSelect={setQuestionType} />
    ),
    "question-created": (props) => (
      <ChoiceComponent  {...props} questionType={questionType} />
    ),
  }

  const topicTab = <MasterForm formId={topicForm} schema={topicSchema} onSubmit={(values) => {
    console.log(values);
  }} dictionary={dictionary} />

  const questionTab = <MasterForm defaultValues={async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: "123"
        });
      }, 3000);
    });
  }} componentDidMount={(context: UseFormReturn) => {
    const {formState} = context;
    const {isLoading} = formState;
    console.log(isLoading);
  }} formId={questionForm} schema={questionSchema} onSubmit={(values) => {
   console.log(values)
  }} dictionary={questionDictionary} />

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: topicTab,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: questionTab,
    }
  ];

  return <>
    <FormsProvider>
      <MainLayout>
        <Tabs defaultActiveKey="1" items={items} />
      </MainLayout>
    </FormsProvider>
  </>
}

export default QuizCreation;