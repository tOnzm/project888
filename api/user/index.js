import BaseApi from '../api';

export default class userApi extends BaseApi {
  static async getAll () {
    return await this.api.get ('/users', {}).then (({data}) => data);
  }
}
