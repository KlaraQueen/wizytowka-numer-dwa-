import * as S from "./styled";
import { GiWrench, GiGears, GiCarWheel, GiCarBattery, GiOilDrum } from "react-icons/gi";
import { siteData } from "../../../siteData";

const iconMap = {
  wrench: GiWrench,
  gears: GiGears,
  carWheel: GiCarWheel,
  carBattery: GiCarBattery,
  oilDrum: GiOilDrum,
};

const Services = () => {
  const { label, title, items } = siteData.services;

  return (
    <S.Section id="uslugi">
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
      <S.Grid>
        {items.map((service, index) => {
          const Icon = iconMap[service.icon] || GiWrench;
          return (
            <S.Card key={index}>
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
              <S.CardTitle>{service.title}</S.CardTitle>
              <S.CardDesc>{service.description}</S.CardDesc>
            </S.Card>
          );
        })}
      </S.Grid>
    </S.Section>
  );
};

export default Services;
