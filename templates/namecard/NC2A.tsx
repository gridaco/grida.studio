import React from "react";
import styled from "@emotion/styled";
import { NameCardData } from "./data";
/**
 * `<Nc2A>` ('NC2A')
 *
 *
 * ---
 * @example
 * ```tsx
 * import React from "react";
 *
 * export default function () {
 *   return (
 *     <>
 *       👇 instanciate widget like below. 👇
 *       <Nc2A/>
 *     </>
 *   )
 * }
 * ```
 * ---
 * @params {any} props - this widget does not requires props. you can pass custom dynamic props to the widget as you want (on typescript, it will raise type check issues).
 * ---
 * @preview
 * ![](grida://assets-reservation/images/1:2549)
 * ---
 * @remarks
 * @see {@link https://grida.co/docs} for more information.
 * ---
 * Code generated by grida.co | engine 0.0.1 (Apache-2.0) | Generated code under CC0 (public domain) *This code is free to use, modify, and redistribute. (aknowledgment is not required)*
 *
 *
 * ![Made with Grida](https://bridged-service-static.s3.us-west-1.amazonaws.com/branding/logo/32.png)
 * <!-- Info: Please do not remove this comment unless intended. removing this section will break grida integrations. -->
 * <!-- grida.meta.widget_declaration | engine : 0.0.1 | source : figma://undefined/1:2549 -->
 */
export function NC2A({ data }: { data: NameCardData }) {
  return (
    <RootWrapperNc2A>
      <Logo>ACME</Logo>
      <Group>
        <M>M</M>
        <A>a</A>
        <D>d</D>
        <E>e</E>
        <NaN_0001> </NaN_0001>
        <W>w</W>
        <I>i</I>
        <T>t</T>
        <H>h</H>
        <NaN_0002> </NaN_0002>
        <L>L</L>
        <O>o</O>
        <V>v</V>
        <E_0001>e</E_0001>
        <NaN_0003> </NaN_0003>
        <I_0001>i</I_0001>
        <N>n</N>
        <NaN_0004> </NaN_0004>
        <S>S</S>
        <A_0001>a</A_0001>
        <N_0001>n</N_0001>
        <F>F</F>
        <R>r</R>
        <A_0002>a</A_0002>
        <N_0002>n</N_0002>
        <S_0001>s</S_0001>
        <I_0002>i</I_0002>
        <S_0002>s</S_0002>
        <C>c</C>
        <O_0001>o</O_0001>
        <NaN_0005>,</NaN_0005>
        <NaN_0006> </NaN_0006>
        <C_0001>C</C_0001>
        <A_0003>a</A_0003>
        <L_0001>l</L_0001>
        <I_0003>i</I_0003>
        <F_0001>f</F_0001>
        <O_0002>o</O_0002>
        <R_0001>r</R_0001>
        <N_0003>n</N_0003>
        <I_0004>i</I_0004>
        <A_0004>a</A_0004>
      </Group>
      <Line10 />
      <Line11 />
      <Line12 />
      <DataName>{data.name}</DataName>
      <DataTelephone>{data.tel}</DataTelephone>
      <DataEmail>{data.email}</DataEmail>
      <DataAdress>{data.address}</DataAdress>
      <DataWebsite>{data.website}</DataWebsite>
      <DataTitle>{data.title}</DataTitle>
      <PurveyorsOf>Purveyors of</PurveyorsOf>
      <FineFreeware>fine freeware</FineFreeware>
    </RootWrapperNc2A>
  );
}

const RootWrapperNc2A = styled.div`
  width: 900px;
  height: 500px;
  background-color: white;
`;

const Logo = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 140px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  text-align: left;
  position: absolute;
  left: 459px;
  top: 373px;
`;

const Group = styled.div`
  width: 125px;
  height: 126px;
  position: absolute;
  left: 66px;
  top: 66px;
`;

const M = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 10px;
  min-height: 13px;
  position: absolute;
  left: 73px;
  top: 125px;
  height: 13px;
`;

const A = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 59px;
  top: 125px;
  transform: rotate(-173deg);
  transform-origin: top left;
  height: 13px;
`;

const D = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 8px;
  min-height: 13px;
  position: absolute;
  left: 48px;
  top: 124px;
  transform: rotate(-163deg);
  transform-origin: top left;
  height: 13px;
`;

const E = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 37px;
  top: 120px;
  transform: rotate(-153deg);
  transform-origin: top left;
  height: 13px;
`;

const NaN_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 29px;
  top: 115px;
  transform: rotate(-146deg);
  transform-origin: top left;
  height: 13px;
`;

const W = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 11px;
  min-height: 13px;
  position: absolute;
  left: 23px;
  top: 112px;
  transform: rotate(-136deg);
  transform-origin: top left;
  height: 13px;
`;

const I = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 13px;
  top: 101px;
  transform: rotate(-127deg);
  transform-origin: top left;
  height: 13px;
`;

const T = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 10px;
  top: 96px;
  transform: rotate(-119deg);
  transform-origin: top left;
  height: 13px;
`;

const H = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 8px;
  min-height: 13px;
  position: absolute;
  left: 5px;
  top: 87px;
  transform: rotate(-109deg);
  transform-origin: top left;
  height: 13px;
`;

const NaN_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 1px;
  top: 76px;
  transform: rotate(-101deg);
  transform-origin: top left;
  height: 13px;
`;

const L = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 6px;
  min-height: 13px;
  position: absolute;
  left: 0px;
  top: 70px;
  transform: rotate(-93deg);
  transform-origin: top left;
  height: 13px;
`;

const O = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 0px;
  top: 60px;
  transform: rotate(-83deg);
  transform-origin: top left;
  height: 13px;
`;

const V = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 2px;
  top: 48px;
  transform: rotate(-73deg);
  transform-origin: top left;
  height: 13px;
`;

const E_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 5px;
  top: 37px;
  transform: rotate(-63deg);
  transform-origin: top left;
  height: 13px;
`;

const NaN_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 10px;
  top: 29px;
  transform: rotate(-56deg);
  transform-origin: top left;
  height: 13px;
`;

const I_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 14px;
  top: 24px;
  transform: rotate(-50deg);
  transform-origin: top left;
  height: 13px;
`;

const N = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 18px;
  top: 19px;
  transform: rotate(-42deg);
  transform-origin: top left;
  height: 13px;
`;

const NaN_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 27px;
  top: 11px;
  transform: rotate(-33deg);
  transform-origin: top left;
  height: 13px;
`;

const S = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 32px;
  top: 8px;
  transform: rotate(-26deg);
  transform-origin: top left;
  height: 13px;
`;

const A_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 42px;
  top: 4px;
  transform: rotate(-16deg);
  transform-origin: top left;
  height: 13px;
`;

const N_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 53px;
  top: 1px;
  transform: rotate(-5deg);
  transform-origin: top left;
  height: 13px;
`;

const F = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 65px;
  top: 0px;
  height: 13px;
`;

const R = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 75px;
  top: 1px;
  height: 13px;
`;

const A_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 85px;
  top: 4px;
  height: 13px;
`;

const N_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 95px;
  top: 9px;
  height: 13px;
`;

const S_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 105px;
  top: 16px;
  height: 13px;
`;

const I_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 112px;
  top: 24px;
  height: 13px;
`;

const S_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 116px;
  top: 29px;
  height: 13px;
`;

const C = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 8px;
  min-height: 13px;
  position: absolute;
  left: 121px;
  top: 38px;
  height: 13px;
`;

const O_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 124px;
  top: 50px;
  height: 13px;
`;

const NaN_0005 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 125px;
  top: 62px;
  height: 13px;
`;

const NaN_0006 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 125px;
  top: 68px;
  height: 13px;
`;

const C_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 8px;
  min-height: 13px;
  position: absolute;
  left: 124px;
  top: 74px;
  height: 13px;
`;

const A_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 121px;
  top: 86px;
  height: 13px;
`;

const L_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 6px;
  min-height: 13px;
  position: absolute;
  left: 116px;
  top: 95px;
  height: 13px;
`;

const I_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 111px;
  top: 103px;
  height: 13px;
`;

const F_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 107px;
  top: 108px;
  height: 13px;
`;

const O_0002 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 99px;
  top: 114px;
  height: 13px;
`;

const R_0001 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 88px;
  top: 120px;
  height: 13px;
`;

const N_0003 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 9px;
  min-height: 13px;
  position: absolute;
  left: 78px;
  top: 124px;
  height: 13px;
`;

const I_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 3px;
  min-height: 13px;
  position: absolute;
  left: 66px;
  top: 125px;
  height: 13px;
`;

const A_0004 = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 11px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  text-transform: uppercase;
  width: 7px;
  min-height: 13px;
  position: absolute;
  left: 60px;
  top: 125px;
  transform: rotate(-174deg);
  transform-origin: top left;
  height: 13px;
`;

const Line10 = styled.div`
  width: 792px;
  height: 0px;
  border-top: solid 1px black;
  position: absolute;
  left: 80px;
  top: 44px;
`;

const Line11 = styled.div`
  width: 792px;
  height: 0px;
  border-top: solid 1px black;
  position: absolute;
  left: 80px;
  top: 349px;
`;

const Line12 = styled.div`
  width: 117px;
  height: 0px;
  border-top: solid 1px black;
  position: absolute;
  left: calc((calc((50% + -125px)) - 58px));
  top: 367px;
`;

const DataName = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 257px;
  top: 91px;
`;

const DataTelephone = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 605px;
  top: 88px;
`;

const DataEmail = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 605px;
  top: 130px;
`;

const DataAdress = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  width: 250px;
  position: absolute;
  left: 605px;
  top: 172px;
`;

const DataWebsite = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 605px;
  top: 257px;
`;

const DataTitle = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 257px;
  top: 132px;
`;

const PurveyorsOf = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 78px;
  top: 425px;
`;

const FineFreeware = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 21px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 108px;
  top: 450px;
`;
