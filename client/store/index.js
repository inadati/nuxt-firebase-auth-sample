import { fireAuth } from '~/plugins/firebase'
const cookieparser = process.server ? require('cookieparser') : undefined


export const strict = false

export const state = () => ({
  auth: null
})

export const mutations = {
  mutateAuth(state, auth){
    state.auth = auth
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }){
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // 有効なクッキーが見つからない場合
        fireAuth.signOut()
      }
    }
    commit('mutateAuth', auth)
  }
}

export const getters = {}

