import { rgbaToHex } from '../color';

export default (rgba: Array<string | number>) => {
  return !!rgbaToHex(rgba);
};
