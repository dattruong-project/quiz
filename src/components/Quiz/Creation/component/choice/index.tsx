import { FC, useEffect, useState } from "react";
import { QuestionType } from "../../../../../data/QuizQuestions";
import { Checkbox, Input, Button, Col } from "antd";
import { FileAddTwoTone } from '@ant-design/icons';
import { useFormContext } from "dynamic-builder-form";
import { answerId, choicesId } from "../../question/fields";

type ChoiceComponentProps = {
    questionType: QuestionType
};

interface Answer {
    selectedAns: any;
    value: string;
}

const ChoiceComponent: FC<ChoiceComponentProps> = ({ questionType }) => {
    const context = useFormContext();

    const [answers, setAnswers] = useState<Answer[]>(
        questionType === "boolean" ? [
            { value: "", selectedAns: true },
            { value: "", selectedAns: false }
        ] : [
            { value: "", selectedAns: "A" },
            { value: "", selectedAns: "B" },
            { value: "", selectedAns: "C" },
            { value: "", selectedAns: "D" }
        ]
    );

    const [selectedAns, setSelectedAns] = useState<string[]>([]);

    useEffect(() => {
        setSelectedAns([]);
    }, [questionType]);

    const addChoice = () => {
        const newChoice: Answer = {
            value: "",
            selectedAns: String.fromCharCode(answers.length + 65)
        };
        setAnswers([...answers, newChoice]);
    };

    // const removeChoice = (index: number) => {
    //     const updatedChoices = [...answers];
    //     updatedChoices.splice(index, 1);
    //     setAnswers(updatedChoices);
    // };

    const handleChange = (value: any) => {
       setSelectedAns(value);
       context.setValue(answerId,value);
       const answerLs: string[] = answers.map(answer => answer.value);
       context.setValue(choicesId,answerLs);
    };

    const renderChoices = () => {
        return answers.map((item, index) => (
            <Checkbox.Group value={selectedAns} onChange={handleChange} key={index}>
                <Col>
                    <Checkbox value={item.selectedAns} />
                </Col>
                <Input
                    placeholder={`Enter ${index + 1} details`}
                    onChange={(e) => { item.value = e.target.value }}
                    key={index}
                />
            </Checkbox.Group>
        ));
    };

    return (
        <div>
            <div>
                {renderChoices()}
            </div>
            {questionType !== "boolean" && (
                <div>
                    <Button onClick={addChoice} icon={<FileAddTwoTone />} />
                </div>
            )}
        </div>
    );
};

export default ChoiceComponent;
