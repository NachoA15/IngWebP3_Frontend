
const moveToMainPage = () => {
    window.location.href = '/'
}

const moveToPaginaEvento = (idEvento) => {
    window.location.href = '/evento/' + idEvento
}

const routerService = {moveToMainPage, moveToPaginaEvento}

export default routerService