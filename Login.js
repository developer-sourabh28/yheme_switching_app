import { useState } from "react"
import { Alert, Button, Form, Input } from "antd";
import { passwordRegexp } from "./Signup";
import { Link, useParams } from "react-router-dom";

export const Login = ({ auth}) => {
    const [apiStatus, setApiStatus] = useState("init");

    const onsubmitForm = async (loginInfo) => {
        setApiStatus("pending");
      const {success} = await auth.loginUser(loginInfo);
      setApiStatus (success ? "success" : "error")
    };

    return (
        <div className="form">
            {apiStatus === "success" && (
                <Alert
                type="success"
                showIcon
                message="Logged in success"
                closable
                />
            )}
            {apiStatus === "error" && (
                <Alert
                type="error"
                showIcon
                message="Invalid credentials"
                closable
                />
            )}
            <Form onFinish={onsubmitForm} layout="vertical">
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

                <Button
                loading={apiStatus === "pending"} 
                htmlType="submit" 
                type="primary" block>
                    Log in
                </Button>
            </Form>
            <p>
                Don't have an account ? 
                <Link className="link" to="/signup">
                Signup here
                </Link>
                </p>
        </div>
    )
}