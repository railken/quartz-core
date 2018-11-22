export class ResourceConfig {
  constructor (params) {

    this.create = true;
    this.update = true;
    this.remove = true;
    this.show = true;

    this.getParamsShow = function (resource) {
      return { id: resource.id };
    };

    this.getRouteShow = function (resource) {
      return { name: this.route + '.show', params: this.getParamsShow(resource) };
    };

    this.getId = function(vue) {
      return this.getKeyByRoute(vue.$route.params);
    };

    this.getRouteIndex = function(resource) {
      return {name: this.config.route + '.index'};
    }

    this.getKeyByRoute = function (params) {
      return params.id;
    };

    this.getFinalQuery = function (query) {
      return query;
    };

    this.getIdentification = function () {
      return this.manager.getFullUrl();
    };

    this.onShowEdit = function () {

    };

    this.onCreateSuccess = function (vue, response) {
        vue.$router.push(this.getRouteShow(response.body.data));
    }

    this.onCreateSuccess = function (vue, response) {
        vue.$router.push(this.getRouteIndex(response.body.data));
    }

    this.onUpdateSuccess = function (vue, response) {
        vue.syncing = false
        vue.errors = [];
        vue.editing = false;
        vue.handleResponse(response);
    }

    for (var i in params) {
      this[i] = params[i];
    }
  }
};
