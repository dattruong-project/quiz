import React, { FC, useEffect, useState } from "react";
import { QuestionType } from "../../../../../data/QuizQuestions";
import { Checkbox, Input, Button, Row, Col } from "antd";
import { FileAddTwoTone } from '@ant-design/icons';
import { FormBuilderProps } from "dynamic-builder-form/dist/form-builder/formBuilder";
import { FieldValues, UseFormSetValue } from "dynamic-builder-form/dist/form-controller";

type ChoiceComponentProps = {
    questionType: QuestionType;
    onChange: (value: any) => void;
    setValue: UseFormSetValue<FieldValues>;
};

type ChoiceType = ChoiceComponentProps & FormBuilderProps;

interface Answer {
  selectedAns: any;
  value: string;
}

const ChoiceComponent: FC<ChoiceType> = ({ questionType, onChange, setValue }) => {
   
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
        console.log(value);
        onChange(value);
    };

    const renderChoices = () => {
        return answers.map((item, index) => (
            <Row style={{ display: "flex", alignItems: "center", marginBottom: 8 }} key={index}>
                    <Checkbox.Group value={selectedAns} onChange={handleChange}>
                        <Col>
                            <Checkbox value={item} />
                        </Col>
                        <Input
                            placeholder={`Enter ${index + 1} details`}
                            onChange={(e) => {item.value = e.target.value}}
                        />   
                    </Checkbox.Group>
                {/* <Col span={4}>
                    <Button onClick={() => removeChoice(index)} icon={<DeleteTwoTone />} style={{ marginLeft: 8 }} />
                </Col> */}
            </Row>
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
