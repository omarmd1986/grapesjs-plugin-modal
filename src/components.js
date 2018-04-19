export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const linkType = domc.getType('link');
    const linkModel = linkType.model;
    const linkView = linkType.view;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;

    let traits = defaultModel.prototype.defaults.traits.slice(0);
    traits.push({
        type: 'select',
        label: 'Type',
        name: 'btnStyle',
        changeProp: 1,
        options: [
            {value: 'btn-primary', name: 'Primary'},
            {value: 'btn-success', name: 'Success'},
            {value: 'btn-info', name: 'Info'},
            {value: 'btn-warning', name: 'Warning'},
            {value: 'btn-danger', name: 'Danger'},
            {value: 'btn-default', name: 'Default'}
        ]
    });
    traits.push({
        type: 'select',
        label: 'Size',
        name: 'btnSize',
        changeProp: 1,
        options: [
            {value: 'btn-normal', name: 'Normal'},
            {value: 'btn-lg', name: 'Large'},
            {value: 'btn-sm', name: 'Medium'},
            {value: 'btn-xs', name: 'Small'}
        ]
    });

    var model = linkModel.extend({
        defaults: Object.assign({}, linkModel.prototype.defaults, {
            // Can't drop other elements inside it
            droppable: false,

            type: 'modal',
            tagName: 'modal',

            traits: traits,

            btnStyle: 'btn-primary',
            btnSize: 'btn-lg',
            
            'bootstrapScript': config.modalBootstrap,
            'jqueryScript': config.modalJquery,
            
            script: function () {
                if ("undefined" !== typeof jQuery && (typeof $().modal !== 'function')) {
                    return;
                }
                
                var includeJs = function(src, cb){
                    var script = document.createElement('script');
                    script.src = src;
                    script.onload = cb;
                    document.head.appendChild(script);
                };
                
                var includeBootstrap = function(){
                    const src = '{[ bootstrapScript ]}';
                    includeJs(src);
                };
                
                const src = '{[ jqueryScript ]}';
                includeJs(src, includeBootstrap);
            }
        })
    }, {
        isComponent(el) {
            var result = '';
            
            if (el.tagName === 'MODAL') {
                result = {type: 'modal'};
            }

            return result;
        }
    });

    var view = linkView.extend({
        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:btnStyle change:btnSize change:attributes', this.updateModal);

            // To update the view
            this.updateModal();
        },

        updateModal: function () {
            var el = this.el;
            const id = el.getAttribute('id');
            
            if (!id) { return; }
            
            var model = this.model;
            
            // Append new components
            const style = this.model.get('btnStyle');
            const size = this.model.get('btnSize');

            const _class = `btn ${style} ${size}`;
            model.components(`<a class="${_class}" data-toggle="modal" data-target="${id}-modal">Launch modal</a>`);

            var create = function(html){
                var tpl = document.createElement('template');
                tpl.innerHTML = html.trim();
                return tpl.content.firstChild;
            };

            var createModal = function(){
                var _modal = create(config.modalHtml);
                _modal.setAttribute('id', `${id}-modal`);
                var container = document.createElement('div');
                container.appendChild(_modal);
                return container.innerHTML;
            };
                        
            var _modal = createModal();
            
            model.append(_modal);
        }
    });

    domc.addType('modal', {
        // Defined the model
        model: model,

        // Defined the view
        view: view
    });
}
