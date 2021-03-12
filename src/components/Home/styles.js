import styled from "styled-components";

const Wrapper = styled.div`
  padding: ${(props) => (props.secondary ? "2em 9em" : "11em 9em")};
  background: radial-gradient(#e3e73b, #fff 65%);
  text-align: left;

  @media (max-width: 720px) {
    padding: ${(props) => (props.primary ? "12em 2em" : "4em 2em")};
  }
`;

export default Wrapper;
