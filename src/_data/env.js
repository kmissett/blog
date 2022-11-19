require('dotenv').config()

module.exports = {
    formEndpoint: process.env.FORM_ENDPOINT,
    devMode: process.env.MODE
}