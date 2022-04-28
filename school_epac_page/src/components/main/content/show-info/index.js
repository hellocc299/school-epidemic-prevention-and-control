import React, { memo } from 'react'
import { ShowInfoWrapper } from './style'
import UpdateAvatar from './update-avatar'
import UpdateInfo from './update-info'

const ShowInfo = memo(() => {
  return (
    <ShowInfoWrapper>
      <UpdateAvatar />
      <UpdateInfo />
    </ShowInfoWrapper>
  )
})

export default ShowInfo