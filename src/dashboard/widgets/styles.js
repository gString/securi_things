import styled from "styled-components";

const BAR_WIDTH  = 200;
const BAR_HEIGHT = 30;
const radius     = BAR_HEIGHT / 2;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  padding: 0 10px;
`;

export const ProgressBar = styled.div`
  height: ${ BAR_HEIGHT }px;
  width: ${ props => BAR_WIDTH * props.size }px;
  background-color: #282c34;
  border-radius: ${ radius }px;
`;

export const Indicator = styled.div`
  height: ${ BAR_HEIGHT }px;
  width: ${ props => BAR_WIDTH * props.size / 100 * props.value }px;
  background-color: brown;
  border-radius: ${ radius }px;
`;

export const PieWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
`;

// common
export const Title = styled.h5`
  margin: 20px;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Text = styled.span`
  display: block;
  font-size: 13px;
  line-height: 20px;
  font-weight: ${ props => props.bold ? "bold" : "normal" };
  margin-top: ${ props => props.bold ? "3px" : "0" };
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  opacity: .5;
  text-align: left;
  overflow: hidden;

  &:hover {
    opacity: 1;
  }
`;

export const Desc = styled.p`
  position: absolute;
  top: 30px;
  right: 25px;
  bottom: 0;
  width: 55%;
  font-size: 13px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;