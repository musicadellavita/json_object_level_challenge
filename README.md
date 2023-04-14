# Challenge

## Description
The challenge is to determine how many "level" a given object in a JSON file is.  You should create a method that takes as input the object ID you want to find the the object level for.

For example, look at the following JSON file:
```json
{
  "items": [
    {
      "id": "1",
      "parentId": null,
      "items": [
        {
          "id": "2",
          "parentId": "1",
          "items": []
        }
      ]
    }
  ]
}
```

If you want to find how many levels deep the Object with **"id": "1"** your method should be called like this:
```javascript
findObjectLevel('1')
// which should return
// 0
```
Another example would be to find the Object with **"id": "2"**
```javascript
findObjectLevel('2')
// returns 1
```

Use the JSON file in `input/data.json` to test your code

I have also provided a helper function which creates a flat map of the input JSON file.  You can use it like this:
```javascript
const itemMap = getItemMap(json_file)
```

To see my solution look at `src/solution.js` and you can run it as follows:
```sh
npm run main
```
