import styled from 'styled-components'

export const HealthyCardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 32px;

  .show_info {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
  }

  .teac_card, .statu, .tips {
    height: 100%;
    width: 30%;
    border-radius: 20px;
  }

  .teac_card {
    background-color: #4CA0B3;
  }

  h3 {
    color: #fff
  }

  p { 
    margin-top: 5px;
    color: #fff
  }

  .tips {
    background-color: #F6C344;
  }

  .set-card {
    margin-top: 32px;
    /* height: auto; */
  }
`