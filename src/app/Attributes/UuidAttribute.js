import { BaseAttribute } from './BaseAttribute'

export class UuidAttribute extends BaseAttribute {
  simple = true
  
  constructor () {
    super('uuid', {});
    this.extractor = function (resource) {
      return _.get(resource, 'uuid');
    };
    this.priority = 0;
  }

  getClassName() {
    return 'UuidAttribute'
  }
}
