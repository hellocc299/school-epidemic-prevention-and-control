import styled from 'styled-components'

export const DataShowWrapper = styled.div`  
  .data-show {
    display: flex;
    justify-content: space-around;
    height: 20%;
  }

  .ant-card {
    width: 240px;
    height: 120px;
    border-radius: 15px;
    display: flex;
  }

  h1, p {
    color: #fff;
  }

  .card-content {
    display: flex;
    flex: 1;
  }

  .anticon {
    font-size: 50px;
    color: #bbb;
    margin-left: 42px;
  }
`