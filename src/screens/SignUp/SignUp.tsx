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
import { FormDataSignUp } from "../../models/screens";
import {
  StyledContainer,
  StyledDivider,
  StyledForm,
  StyledKeyboardAvoidingView,
  StyledRow,
  StyledText,
  StyledTitle,
  StyledTouchable,
} from "../../styles/Auth.styles";

const SignUp: React.FC<NavigationProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSignUp>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: FormDataSignUp) => {
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
            <StyledText fontSize={30} fontWeight="bold">
              Create an Account
            </StyledText>
            <StyledText color={colors.primary.gray} fontSize={16}>
              Please fill this detail to create an account
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
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Enter Email"
                  icon="email"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <StyledText>The email is required.</StyledText>}

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

            <Button onPress={handleSubmit(onSubmit)} text="SignUp" />
            <StyledRow>
              <StyledDivider />
              <StyledText color={colors.primary.gray}>or</StyledText>
              <StyledDivider />
            </StyledRow>
            <SocialTouchable icon="facebook" text="Login with Facebook" />
            <SocialTouchable icon="google" text="Login with Google" />
          </StyledForm>

          <StyledRow>
            <StyledText>Already have an account?</StyledText>
            <StyledTouchable onPress={() => navigation.navigate("Login")}>
              <StyledText color={colors.primary.pink}>Login</StyledText>
            </StyledTouchable>
          </StyledRow>
        </StyledContainer>
      </TouchableWithoutFeedback>
    </StyledKeyboardAvoidingView>
  );
};

export default SignUp;
