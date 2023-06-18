import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SocialTouchable from "../../components/SocialTouchable";
import { colors } from "../../consts/colors";
import { NavigationProps } from "../../models/navigation";
import { FormData } from "../../models/screens";
import {
  StyledContainer,
  StyledDivider,
  StyledForm,
  StyledKeyboardAvoidingView,
  StyledRow,
  StyledText,
  StyledTitle,
  StyledTouchable,
} from "./Login.styles";

const Login: React.FC<NavigationProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data: FormData) => {
    navigation.navigate("Tabs");
  };

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StyledContainer>
          <Image source={require("../../assets/Logo.png")} />

          <StyledTitle>
            <StyledText fontSize={35} fontWeight="bold">
              Welcome Back!
            </StyledText>
            <StyledText color={colors.primary.gray} fontSize={18}>
              Use Credentials to access your account
            </StyledText>
          </StyledTitle>

          <StyledForm>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Enter Username"
                  icon="account"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && (
              <StyledText>The username is required.</StyledText>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter Password"
                  icon="lock"
                  onChange={onChange}
                  value={value}
                  password
                />
              )}
              name="password"
            />
            {errors.password && (
              <StyledText>The password is required.</StyledText>
            )}

            <StyledText textAlign="right">Forgot Password?</StyledText>
            <Button onPress={handleSubmit(onSubmit)} text="Login" />
            <StyledRow>
              <StyledDivider />
              <StyledText color={colors.primary.gray}>or</StyledText>
              <StyledDivider />
            </StyledRow>
            <SocialTouchable icon="facebook" text="Login with Facebook" />
            <SocialTouchable icon="google" text="Login with Google" />
          </StyledForm>

          <StyledRow>
            <StyledText>Don't have an account?</StyledText>
            <StyledTouchable onPress={() => navigation.navigate("SignUp")}>
              <StyledText color={colors.primary.pink}>SignUp</StyledText>
            </StyledTouchable>
          </StyledRow>
        </StyledContainer>
      </TouchableWithoutFeedback>
    </StyledKeyboardAvoidingView>
  );
};

export default Login;
