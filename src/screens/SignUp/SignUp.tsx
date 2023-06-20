import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
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
  StyledImage,
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
            <StyledText fontSize={30} fontWeight="bold">
              {t("SignUp.title")}
            </StyledText>
            <StyledText color={colors.primary.gray} fontSize={16}>
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
                  placeholder={t("SignUp.email.title")}
                  icon="email"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <StyledText>{t("SignUp.email.rules")}</StyledText>}

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

            <Button
              onPress={handleSubmit(onSubmit)}
              text={t("SignUp.button")}
              fullWidth
            />
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
            <StyledText>{t("SignUp.account")}</StyledText>
            <StyledTouchable onPress={() => navigation.navigate("Login")}>
              <StyledText color={colors.primary.blue}>
                {t("SignUp.login")}
              </StyledText>
            </StyledTouchable>
          </StyledRow>
        </StyledContainer>
      </TouchableWithoutFeedback>
    </StyledKeyboardAvoidingView>
  );
};

export default SignUp;
