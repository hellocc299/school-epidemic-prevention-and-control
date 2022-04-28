import styled from 'styled-components'

export const StuSearchWrapper = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  background-color: #fff;

  .search-data {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    display: flex;
    flex: 1;
  }

  .ant-form {
    margin-left: 30px;
    width: 250px;
  }

  .anticon {
    color: #ccc
  }

  .reset {
    margin-left: 10px;
  }

  .upload {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
  }

  .insert {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 80px;
  }
`