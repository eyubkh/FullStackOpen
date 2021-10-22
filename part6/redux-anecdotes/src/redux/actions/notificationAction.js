export const createNotification = (payload) => ({
  type: '@notification/create',
  payload
})

export const voteNotification = (payload) => ({
  type: '@notification/vote',
  payload
})
