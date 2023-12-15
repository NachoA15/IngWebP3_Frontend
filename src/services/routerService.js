
const moveToMainPage = () => {
    window.location.href = '/'
}

const moveToMaps = () => {
    window.location.href = '/map'
}

const routerService = {moveToMainPage, moveToMaps}

export default routerService