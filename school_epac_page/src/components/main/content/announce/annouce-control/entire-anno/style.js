import styled from "styled-components";
export const EntireAnnoWrapper = styled.div`
  width: 90%;
  margin: 0px auto;
  margin-top: 32px;

  .not-read {
    color: #aaa;
  }

  .delete {
    margin-left: 5px;
  }

  .anticon {
    margin-right: 5px;
  }

  .anno-content {
    position: relative;
  }

  .content {
    width: 100%;
    word-wrap:break-word;
    word-break:break-all; 
    padding: 0 7px;
  }

  .time {
    position: absolute;
    right: 0px;
    color: #aaa;
  }
  
`