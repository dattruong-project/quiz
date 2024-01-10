import { MasterForm } from "dynamic-builder-form"
import { loginSchema } from "./schema"
import { quizDictionary } from "../../dictionary";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { device } from "../../styles/BreakPoints";

export const loginFormId = "loginForm";

const LoginStyle = styled.div`
    form {
            margin-top: 30px;
          }
    .ant-input {
        width: 50%;
     
        @media ${device.md} {
            width: 100%;
        }
    }
    #username, #password {
      flex-direction: column;
      display: flex;
    }

    #submit-field {
        background-color: red;
    }
               
`
export const LoginForm = () => {
    const navigate = useNavigate();

    const onSubmit = async () => {
        navigate("/dashboard");
    };

    return <LoginStyle>
        <MasterForm formId={loginFormId} schema={loginSchema} dictionary={quizDictionary}
            onSubmit={onSubmit}
        />
    </LoginStyle>
}