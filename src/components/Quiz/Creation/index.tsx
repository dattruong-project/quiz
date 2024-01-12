
import MainLayout from "../../Dashboard/layout";
import { QuestionType } from "../../../data/QuizQuestions";
import { Dictionary, FormsProvider, MasterForm, SelectComponent, dictionary } from "dynamic-builder-form";
import { useState } from "react";
import "./creation.css";
import { Button, Tabs, TabsProps } from "antd";
import { topicSchema } from "./topic/schema";
import { questionSchema } from "./question/schema";
import { quizDictionary } from "../../../dictionary";
import ChoiceComponent from "./component/choice";
import { UseFormReturn } from "dynamic-builder-form/dist/form-controller";
import { useQuestion } from "../../../context/question/QuestionContext";
import { useTopic } from "../../../context/topic/TopicContext";

const topicForm = "topicForm";
const questionForm = "questionForm";

const QuizCreation = () => {
  const [questionType, setQuestionType] = useState<QuestionType>("MAQs");
  const { questions, addQuestion, onSubmit } = useQuestion();
  const topicContext = useTopic();

  const questionDictionary: Dictionary = {
    ...quizDictionary,
    select: (props) => (
      <SelectComponent  {...props} onSelect={setQuestionType} />
    ),
    "question-created": () => (
      <ChoiceComponent questionType={questionType} />
    ),
  }

  const onSubmitTopic = (values: any) => topicContext.addTopic(values);

  const topicTab = <MasterForm formId={topicForm} schema={topicSchema} onSubmit={onSubmitTopic} dictionary={dictionary} />

  const questionTab = <>
    <div>
      <Button onClick={addQuestion}>+</Button>
    </div>
    {questions.map((question, index) => <MasterForm componentDidMount={(context: UseFormReturn) => question.context = context}
      onSubmit={() => {

      }} formId={index.toString()} schema={questionSchema} dictionary={questionDictionary} />)}
    <div>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  </>

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