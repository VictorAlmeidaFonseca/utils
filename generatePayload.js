module.exports = async (payload, fieldsToHide) => {
   
    const keys = Object.keys( {...payload });

    let result = {};

    for (let i = 0; i < Object.keys(payload).length; i++) {
       await parserObject(result, keys[i].split('.'), payload[keys[i]]);
    }

    async function parserObject(newPayload, key, value) {
        if (key.length === 1) {
            return (
                fieldsToHide.includes(key[0]) 
                 ? newPayload[key[0]] = await linkapi.function.execute('crypto-encrypt', value)
                 : newPayload[key[0]] = value
            )
       
        } else {
            newPayload[key[0]] = newPayload[key[0]] || {};
                return parserObject(newPayload[key[0]], key.slice(1), value);
        }
    }
    return result;
}
