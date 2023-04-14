const getItemMap = (jsn, m) => {
  if (!m) {
    var m = new Map()
  }
  jsn.items.forEach(i => {
    m.set(i.id, i)
    if(i.items.length > 0) {
      getItemMap(i, m)
    }
  })
  return m 
}

module.exports = { getItemMap }