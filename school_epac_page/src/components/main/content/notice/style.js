import styled from 'styled-components'
export const NoticeWrapper = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  width: 90%;

  .ant-card {
    margin-top: 15px;
    margin-bottom: 10px;
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

  .time-statu {
    position: absolute;
    right: 5px;
    color: #aaa;
  }

  .send-time {
    margin-right: 5px;
  }
`