import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SocialTouchable from "../../components/SocialTouchable";
import { colors } from "../../consts/colors";
import { NavigationProps } from "../../models/navigation";
import { FormDataLogin } from "../../models/screens";
import {
  StyledContainer,
  StyledDivider,
  StyledForm,
  StyledImage,
  StyledKeyboardAvoidingView,
  StyledRow,
  StyledText,
  StyledTitle,
  StyledTouchable,
} from "../../styles/Auth.styles";

const Login: React.FC<NavigationProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data: FormDataLogin) => {
    navigation.navigate("Tabs");
  };

  const { t } = useTranslation();
  const rules = {
    required: true,
  };
  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StyledContainer>
          <StyledImage source={require("../../assets/welcome/initial.jpg")} />

          <StyledTitle>
            <StyledText fontSize={35} fontWeight="bold">
              {t("Login.title")}
            </StyledText>
            <StyledText color={colors.primary.gray} fontSize={17}>
              {t("Login.description")}
            </StyledText>
          </StyledTitle>

          <StyledForm>
            <Controller
              control={control}
              rules={rules}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={t("Auth.username.title")}
                  icon="account"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && (
              <StyledText>{t("Auth.username.rules")}</StyledText>
            )}

            <Controller
              control={control}
              rules={rules}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={t("Auth.password.title")}
                  icon="lock"
                  onChange={onChange}
                  value={value}
                  password
                />
              )}
              name="password"
            />
            {errors.password && (
              <StyledText>{t("Auth.password.rules")}</StyledText>
            )}

            <StyledText textAlign="right">
              {t("Login.password.forget")}
            </StyledText>
            <Button onPress={handleSubmit(onSubmit)} text="LOGIN" fullWidth />
            <StyledRow>
              <StyledDivider />
              <StyledText color={colors.primary.gray}>
                {t("Auth.divider")}
              </StyledText>
              <StyledDivider />
            </StyledRow>
            <SocialTouchable icon="facebook" text={t("Auth.facebook")} />
            <SocialTouchable icon="google" text={t("Auth.google")} />
          </StyledForm>

          <StyledRow>
            <StyledText>{t("Login.account")}</StyledText>
            <StyledTouchable onPress={() => navigation.navigate("SignUp")}>
              <StyledText color={colors.primary.blue}>
                {t("Login.signup")}
              </StyledText>
            </StyledTouchable>
          </StyledRow>
        </StyledContainer>
      </TouchableWithoutFeedback>
    </StyledKeyboardAvoidingView>
  );
};

export default Login;
