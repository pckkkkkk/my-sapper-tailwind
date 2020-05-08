import { createApp } from './app'

const { PORT = 3000, HOST = '127.0.0.1', NODE_ENV } = process.env

const dev = NODE_ENV === 'development'

const init = () => {
    const app = createApp({ dev })

    app.listen(PORT, HOST, (err) => {
        if (err) {
            console.log('Error: ', err)
        }
    })
}

init()
