


export const isLoggedIn = () => {
    return localStorage.getItem("Token")


}
// exports.logout = () => { localStorage.clear(); window.location.reload() }
// exports.getUserId = () => localStorage.getItem('id')
// exports.getToken = () => localStorage.getItem('Token')