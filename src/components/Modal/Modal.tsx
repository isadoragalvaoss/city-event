import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal as ModalUI } from "@ui-kitten/components";
import { useTranslation } from "react-i18next";
import { colors } from "../../consts/colors";
import { InfoProps, ModalProps } from "../../models/components";
import Button from "../Button";
import {
  StyledContainer,
  StyledImage,
  StyledText,
  StyledTextBold,
  StyledTextContainer,
} from "./Modal.styles";

const Modal: React.FC<ModalProps> = ({ visible, item, setVisible }) => {
  const { t } = useTranslation();

  const info: InfoProps[] = [
    { name: item.date, icon: "calendar" },
    { name: item.location, icon: "map-marker-outline" },
    { name: item.schedule, icon: "clock-outline" },
    { name: item.price, icon: "cash" },
    { name: item.organizer, icon: "account-group-outline" },
    { name: item.description, icon: "text" },
  ];
  return (
    <ModalUI
      visible={visible}
      backdropStyle={{ backgroundColor: colors.dark.blackOpacity }}
      onBackdropPress={setVisible}
    >
      <StyledContainer disabled={true}>
        <StyledImage source={item.image} />
        <StyledTextBold>{item.title}</StyledTextBold>

        {info.map((item) => (
          <StyledTextContainer key={item.icon} align={item.icon === "text"}>
            <MaterialCommunityIcons
              name={item.icon}
              color={colors.primary.gray}
              size={20}
            />
            <StyledText>{item.name}</StyledText>
          </StyledTextContainer>
        ))}

        <Button fullWidth text={t("Cart.add")} />
      </StyledContainer>
    </ModalUI>
  );
};

export default Modal;
