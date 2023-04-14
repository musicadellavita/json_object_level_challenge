const jsn = require('../input/data.json')
const { getItemMap } = require('./helper')

const findLevel = (itemMap, item) => {
	return !item.parentId ? 0 : findLevel(itemMap, itemMap.get(item.parentId)) + 1
}

const main = (id) => {
	const itemMap = getItemMap(jsn)
	const level = findLevel(itemMap, itemMap.get(id))
	console.log(`The Object '${id}' is at level ${level}`)
}

main('id_01:item_01')
main('id_01:item_01:item_01')
main('id_02:item_03:item_02:item_01')
main('id_03')

/* 

Expected outputs:

The Object 'id_01:item_01' is at level 1
The Object 'id_01:item_01:item_01' is at level 2        
The Object 'id_02:item_03:item_02:item_01' is at level 3
The Object 'id_03' is at level 0

*/