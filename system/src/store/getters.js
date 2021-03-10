const getters = {
  username: state => state.user.user.username,
  token: state => state.user.token,
  rights: state => state.user.rights
}

export default getters
