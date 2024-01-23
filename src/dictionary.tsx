import { Dictionary, InputComponent, dictionary } from "dynamic-builder-form";
import Button from "./components/ui/Button";
import TextArea from "antd/es/input/TextArea";

export const quizDictionary: Dictionary = {
      ...dictionary,
      input: ({ ...props }) => (
            <InputComponent {...props} style={{ fontFamily: 'Anek Malayalam' }} />
      ),
      submit: ({ ...props }) => (
            <Button {...props} outline text={props.label}  />
      ),
      area: ({ disabledField, isValidating, propRef, ...rest }) => (
            <TextArea {...rest} disabled={disabledField} style={{ fontFamily: 'Anek Malayalam' }} rows={rest.rows} />
      )
}