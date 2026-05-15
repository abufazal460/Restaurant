class ErrorHandler extends Error {
    constructor(messages , statusCode) {
        super(messages)
        this.statusCode = statusCode
    }
}

export const errorMiddleware = (err , req, res , next) => {
    err.messages = err.messages || "Internal Swrver Erros!";
    err.statusCode = err.statusCode || 500

    return res.status(err.statusCode).JSON({
        success: false,
        messages: err.messages
    })
} 

export default ErrorHandler;