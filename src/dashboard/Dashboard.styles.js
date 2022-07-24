import styled, { css } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const StyledRoot    = styled (Tabs.Root)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const StyledList    = styled (Tabs.List)`
  border: 1px solid green;
  text-align: left;
`;
export const StyledTrigger = styled (Tabs.Trigger)`
  background-color: lightgoldenrodyellow;
  outline: none;
  width: 10em;
  padding: 10px;
  margin: 5px;
  border-top-left-radius: 10px;
  margin-bottom: -1px;
  border: 1px solid green;
  cursor: pointer;

  &:hover {
    background-color: wheat;
  }

  ${ ( { isselected } ) =>
          isselected &&
          css`
            background-color: wheat;
            border-bottom-color: wheat;
            cursor: auto;
          ` };

`;