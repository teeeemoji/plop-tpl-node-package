module.exports = function (plop) {
    const now = new Date()
    // used in template as {{> YYYY }}
    plop.setPartial('YYYY', String(now.getFullYear()))
    plop.setPartial('MM', String(('0' + (now.getMonth() + 1)).slice(-2)))
    plop.setPartial('DD', String(('0' + now.getDate()).slice(-2)))
    plop.setPartial('DATE', String(now.toLocaleDateString()))
}
