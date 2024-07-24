import { Alert, Button, Form, Input, Radio } from "antd"
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const passwordRegexp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const Signup = ({auth}) => {
    const [apiStatus, setApiStatus] = useState("init");
    const [form] = useForm();

    const onsubmitForm = async (data) => {
        setApiStatus("pending");
       const {success} = await auth.signupUser(data);
       setApiStatus(success ? "success" : "error");
    };

    useEffect(() => {
        if(apiStatus === "success"){
            form.resetFields();
        }
    },[apiStatus]);

    return(
        <div className="form">
            {apiStatus === "success" && (
                <Alert
                type="success"
                showIcon
                message="Signup success you can login now!!"
                closable
                />
            )}
            {apiStatus === "error" && (
                <Alert
                type="error"
                showIcon
                message="Something went wrong, try again.."
                closable
                />
            )}
            <Form form={form} onFinish={onsubmitForm} layout="vertical">
                <Form.Item 
                name="email"
                label="Email"
                rules={[
                    {type:"email", message: "Please enter valid email"},
                    {required: true, message: "Please enter email"}
                ]}
                >
                    <Input placeholder="Enter your email"/>
                </Form.Item>

                <Form.Item 
                name="name"
                label="Full Name"
                rules={[{required: true, message: "Please enter your name"},
                    {
                        pattern: /^\w{3,12}$/i,
                        message: "Name must be 3 to 8 characters long"
                    },
                ]}>
                    <Input placeholder="Enter Fullname"/>
                </Form.Item>

                <Form.Item 
                name="city"
                label="City"
                rules={[{required: true, message: "Please enter your city"}]}
                >
                    <Input placeholder="Enter city"/>
                </Form.Item>

                <Form.Item 
                name="password"
                label="Password"
              rules={[{required: true, message: "Please enter password"},
                {
                    pattern: passwordRegexp,
                    message: "Password must required atleast 1 Capital letter, 1 small letter , 1 special character and a number"
                }
              ]}
             >
                <Input.Password placeholder="password"/>
             </Form.Item>

                <Form.Item name="gender" label="select your gender" 
                rules={[{required: true, message: "Please select gender"}]}
                >
                    <Radio.Group>
                        <Radio value="MALE">Male</Radio>
                        <Radio value="FEMALE">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Button
                loading={apiStatus === "pending"} 
                htmlType="submit" 
                type="primary" block>
                    Signup
                </Button>
            </Form>
            <p>Already have an account ? 
                <Link className="link" to="/login">
                Login here
                </Link>
                </p>
        </div>
    )
}