import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';

import {login} from '../actions/loginAction';

export const Login = () =>{
    const dispatch = useDispatch();
    const onFinish = values => {
      console.log('Success:', values);
      dispatch(login(values))
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
        <>
      <header>
        <img alt="" src="./images/dhg_whole.png" />
      </header>
      <main>
        <Form
          layout={'vertical'}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]{1,128}\.)+[a-zA-Z]{2,6}))$/,
                message: 'Please input valid email id'
              }
            ]}
          >
            <Input
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 8,
                message: 'Minimum 8 character required.'
              },
              {
                max: 128,
                message: 'Maximum 128 character limit.'
              },
              {
                pattern: /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]+)$/,
                message: 'Please input valid password'
              }
            ]}
          >
            <Input.Password
              size="large"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </main>
      <footer>
      </footer>
    </>
    )
}