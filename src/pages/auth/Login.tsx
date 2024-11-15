import { useState } from "react";
import { CustomCard } from "../../components/shared/CustomCard";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import LoginShakespeare from "../../assets/Login_Shakespeare.jpg";
import LoginSpongebob from "../../assets/Login_Spongebob.jpg";
import LoginHorse from "../../assets/Login_Horse.jpg";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form] = Form.useForm();

  const onFinishLogin = (values: any) => {
    console.log("Login values:", values);
  };

  const onFinishSignUp = (values: any) => {
    if (values.password !== values.confirmPassword) {
      return console.error("Passwords do not match!");
    }
    console.log("Sign Up values:", values);
  };

  const toggleFormMode = () => {
    setIsSignUp(!isSignUp);
    form.resetFields(["password", "confirmPassword"]);
  };

  return (
    <div className="flex w-full h-screen login_right_bg">
      {/* Text elements, visible only on large screens */}
      <div className="hidden lg:block">
        <h1 className="text absolute top-10 rotate-12">
          <span className="letter letter-1">S</span>
          <span className="letter letter-2">P</span>
          <span className="letter letter-3">A</span>
          <span className="letter letter-4">R</span>
          <span className="letter letter-1">K</span>
          <span className="letter letter-2">Y</span>
          <span className="letter letter-2">.</span>
          <span className="letter letter-4">A</span>
          <span className="letter letter-4">I</span>
        </h1>

        <h1 className="text absolute top-60 -rotate-12">
          <span className="letter letter-1">S</span>
          <span className="letter letter-2">P</span>
          <span className="letter letter-3">A</span>
          <span className="letter letter-4">R</span>
          <span className="letter letter-1">K</span>
          <span className="letter letter-2">Y</span>
          <span className="letter letter-2">.</span>
          <span className="letter letter-4">A</span>
          <span className="letter letter-4">I</span>
        </h1>

        <h1 className="text absolute bottom-72 rotate-12">
          <span className="letter letter-1">S</span>
          <span className="letter letter-2">P</span>
          <span className="letter letter-3">A</span>
          <span className="letter letter-4">R</span>
          <span className="letter letter-1">K</span>
          <span className="letter letter-2">Y</span>
          <span className="letter letter-2">.</span>
          <span className="letter letter-4">A</span>
          <span className="letter letter-4">I</span>
        </h1>

        <h1 className="text absolute bottom-24 -rotate-12">
          <span className="letter letter-1">S</span>
          <span className="letter letter-2">P</span>
          <span className="letter letter-3">A</span>
          <span className="letter letter-4">R</span>
          <span className="letter letter-1">K</span>
          <span className="letter letter-2">Y</span>
          <span className="letter letter-2">.</span>
          <span className="letter letter-4">A</span>
          <span className="letter letter-4">I</span>
        </h1>
      </div>

      {/* LEFT SIDE - Visible on medium screens */}
      <div className="hidden md:flex lg:hidden w-1/2 h-full justify-center items-center login_left_glass_bg relative">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[70%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[100%] h-[30%] -right-[0%] rounded-full blue__gradient bottom-40" />
        <div className="absolute top-20 rotate-12">
          <CustomCard src={LoginShakespeare} />
        </div>
        <div className="-rotate-12">
          <CustomCard src={LoginSpongebob} />
        </div>
        <div className="absolute bottom-20">
          <CustomCard src={LoginHorse} />
        </div>
      </div>

      {/* LEFT SIDE - Visible on large screens */}
      <div className="hidden lg:flex lg:relative w-1/2 h-full justify-center items-center login_left_glass_bg">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[70%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[100%] h-[30%] -right-[0%] rounded-full blue__gradient bottom-40" />
        <div className="absolute top-20 rotate-12 mt-20">
          <CustomCard src={LoginShakespeare} />
        </div>
        <div className="-rotate-12 mt-20">
          <CustomCard src={LoginSpongebob} />
        </div>
        <div className="rotate-45 mt-40">
          <CustomCard src={LoginHorse} />
        </div>
      </div>

      {/* RIGHT SIDE - Always visible */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
        <div className="absolute z-[0] w-[100%] h-[30%] -right-[0%] rounded-full blue__gradient bottom-40" />
        <motion.div
          initial={{ height: isSignUp ? "650px" : "500px", overflow: "hidden" }}
          animate={{
            height: isSignUp ? "650px" : "500px",
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white p-10 shadow-lg rounded-lg w-3/4 max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 flex flex-col items-center">
            {isSignUp ? (
              <h2 className="text-3xl font-manrope font-black leading-snug text-transparent bg-clip-text login_text_bg">
                Sign Up to Sparky.ai
              </h2>
            ) : (
              <h2 className="text-3xl font-manrope font-black leading-snug text-transparent bg-clip-text login_text_bg">
                Login to Sparky.ai
              </h2>
            )}
          </h2>
          <Form
            form={form}
            name={isSignUp ? "sign_up" : "login"}
            onFinish={isSignUp ? onFinishSignUp : onFinishLogin}
            className="flex flex-col gap-4"
            layout="vertical"
            style={{
              transition: "height 0.5s ease-in-out",
              overflow: "hidden",
            }}
          >
            {isSignUp && (
              <>
                <motion.div
                  key="signUpEmail"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Email"
                      size="large"
                      className="rounded"
                      type="email"
                    />
                  </Form.Item>
                </motion.div>

                <motion.div
                  key="signUpUsername"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Username"
                      size="large"
                      className="rounded"
                    />
                  </Form.Item>
                </motion.div>
              </>
            )}

            {!isSignUp && (
              <motion.div
                key="loginUsername"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: !isSignUp,
                      message: "Please enter your username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Username"
                    size="large"
                    className="rounded"
                  />
                </Form.Item>
              </motion.div>
            )}

            <motion.div
              key={isSignUp ? "signUpPassword" : "loginPassword"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  size="large"
                  className="rounded"
                />
              </Form.Item>
            </motion.div>

            {isSignUp && (
              <motion.div
                key="confirmPassword"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Form.Item
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Confirm Password"
                    size="large"
                    className="rounded"
                  />
                </Form.Item>
              </motion.div>
            )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full btn_gradient rounded"
                size="large"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </Button>
            </Form.Item>
          </Form>

          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <Button
            type="default"
            className="w-full btn_gradient_stable rounded"
            size="large"
            onClick={toggleFormMode}
          >
            {isSignUp ? "Go to Login" : "Sign Up"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
