const storage = window.localStorage;

export const appStorage = {

    setUser: user => storage.setItem('user',user),
    getUser: () => storage.getItem('user'),
    removeUser: () => storage.removeItem('user'),

    setUserId: id => storage.setItem('userId',id),
    getUserId: () => storage.getItem('userId'),
    removeUserId: () => storage.removeItem('userId'),

    setToken: token => storage.setItem('token',token),
    getToken: () => storage.getItem('token'),
    removeToken: () => storage.removeItem('token'),

}