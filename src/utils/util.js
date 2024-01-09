import { Utils } from 'alchemy-sdk';

const truncString = (str) => str.slice(0, 10) + '...';
const formatValue = (value) => Number(Utils.formatEther(value)).toFixed(4);

export { truncString, formatValue };
