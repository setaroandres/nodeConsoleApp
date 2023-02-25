import fs from 'fs';

///Set root file
const file = './db/data.json';

///Create method to save into DB file receiving the data
export const saveDB = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

export const readDB = () => {
    if(!fs.existsSync(file)){
        return null;
    }

    const info = fs.readFileSync(file, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    //console.log(data);

    return data;
}