import express, { Request, Response, NextFunction } from 'express'

// middleware
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    // time, method & url
    const time = new Date().toISOString();
    const { method, originalUrl } = req

    // logging
    console.log(`Time: ${time}, Method: ${method}, URL: ${originalUrl}`)

    // calling next
    next()
}

export default requestLogger