import styled from 'styled-components'

export const LeaveHandleWrapper = styled.div`
  width: 95%;
  margin: 0px auto;
  margin-top: 32px;

  .ant-table-tbody > tr:ntn-child(5){
    white-space:nowrap;  
    overflow:hidden;   
    text-overflow:ellipsis; 
    word-break:keep-all; 
    padding: 0 7px; 
  }
`