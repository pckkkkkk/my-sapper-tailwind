import polka from 'polka'
import sirv from 'sirv'
import compression from 'compression'
import * as sapper from '@sapper/server'

export const createApp = ({ dev }) => {
    const app = polka()

    app.use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware(),
    )

    return app
}
