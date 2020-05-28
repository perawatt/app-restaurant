import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

const currentIcons = Object.keys(allIcons).map(i => {
    const key = i.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
    if (typeof allIcons[i] === 'string') {
        return {
            [key]: allIcons[i],
        }
    }
    return {
        ['ios-' + key]: allIcons[i].ios,
        ['md-' + key]: allIcons[i].md,
    };
});
const iconsObject = Object.assign({}, ...currentIcons);
addIcons(iconsObject);