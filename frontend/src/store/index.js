import create from 'zustand'

export const useStore = create(set => ({
    user:{
        token: null,
        userId: null,
        role: null,
        username: null,
        location: null,
        email: null,
        bio: null
    },
    setToken: (val) => set({ user: {token: val} }),
    setUsernameInStore: (val) => set({ user: {username: val} }),
    apiUrl: 'https://asia-east2-videointerview-c5b52.cloudfunctions.net/api',
    // apiUrl: 'http://localhost:5000/videointerview-c5b52/asia-east2/api'
}))
