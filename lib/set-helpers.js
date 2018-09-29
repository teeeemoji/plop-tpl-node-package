module.exports = function (plop) {
    plop.setHelper('upperCase', function (text) {
        return text.toUpperCase()
    })
}
