import styled from 'styled-components'

export const AnnounceControlWrapper = styled.div`
  width: 90%;
  margin: 0px auto;
  margin-top: 32px;

  .ant-card {
    margin-top: 32px;
    margin-bottom: 10px;
  }

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
    white-space:nowrap;  
    overflow:hidden;   
    text-overflow:ellipsis; 
    word-break:keep-all; 
    padding: 0 7px;
  }

  .time {
    position: absolute;
    right: 0px;
    color: #aaa;
  }
`