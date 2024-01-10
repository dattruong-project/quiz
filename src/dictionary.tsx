import { Dictionary, InputComponent, dictionary } from "dynamic-builder-form";
import Button from "./components/ui/Button";
import TextArea from "antd/es/input/TextArea";

export const quizDictionary: Dictionary = {
   ...dictionary,
   input: ({ ...props }) => (
         <InputComponent {...props} style={{ fontFamily: 'Anek Malayalam' }}/>
   ),
   submit: ({ ...props }) => (
         <Button outline text={props.label} {...props} />
   ),
   area: ({ disabledField, ...rest}) => (
      <TextArea  style={{ fontFamily: 'Anek Malayalam' }} rows={rest.rows} {...rest}/>
  )
}