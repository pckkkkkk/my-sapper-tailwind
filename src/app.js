import express from 'express'
import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';

export const createApp = ({ dev }) => {
    const app = express()

    app.use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )

    return app
}