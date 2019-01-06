module.exports = {
	Attributes: {
		Base: require('./attributes/BaseAttribute').BaseAttribute,
		BelongsTo: require('./attributes/BelongsToAttribute').BelongsToAttribute,
		DateTime: require('./attributes/DateTimeAttribute').DateTimeAttribute,
		Id: require('./attributes/IdAttribute').IdAttribute,
		Image: require('./attributes/ImageAttribute').ImageAttribute,
		Select: require('./attributes/SelectAttribute').SelectAttribute,
		Switch: require('./attributes/SwitchAttribute').SwitchAttribute,
		Url: require('./attributes/UrlAttribute').UrlAttribute,
	},
	ResourceConfig: require('./resources/ResourceConfig').ResourceConfig,
	ResourceApi: require('./api/ResourceApi').ResourceApi,
	container: require('./services/container').container,
    OAuth: require('./services/oauth').OAuth,
    Guard: require('./middlewares/Guard').default,
    mixins: {
        utils: require('./mixins/utils').utils,
    },
	install: function (Vue, options) {
    	Vue.component("QResourceCreate", require('./components/Resource/Create').default)
    	Vue.component("QResourceEdit", require('./components/Resource/Edit').default)
    	Vue.component("QResourceIndex", require('./components/Resource/Index').default)
    	Vue.component("QResourceRemove", require('./components/Resource/Remove').default)
    	Vue.component("QResourceShow", require('./components/Resource/Show').default)

    	Vue.component("QPageIndex", require('./components/Page/Index').default)
    	Vue.component("QPageShow", require('./components/Page/Show').default)

    	Vue.component("QShowJson", require('./components/Show/Json').default)
    	Vue.component("QShowText", require('./components/Show/Text').default)

        Vue.component("QFormJson", require('./components/Form/FormJson').default)
        Vue.component("QFormHtml", require('./components/Form/FormHtml').default)

    	Vue.component("QBelongsTo", require('./components/Input/BelongsTo').default)
    	Vue.component("QHtml", require('./components/Input/Html').default)
    	Vue.component("QJson", require('./components/Input/Json').default)
    	Vue.component("QSecret", require('./components/Input/Secret').default)
    	Vue.component("QSelect", require('./components/Input/Select').default)
    	Vue.component("QSwitch", require('./components/Input/Switch').default)
    	Vue.component("QText", require('./components/Input/Text').default)
    	Vue.component("QTextarea", require('./components/Input/Textarea').default)
	}
};