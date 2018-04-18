import {modal} from './consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const linkType = domc.getType('link');
    const linkModel = linkType.model;
    const linkView = linkType.view;

    let traits = [];
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
            tagName: 'a',

            traits: traits,

            btnStyle: 'btn-primary',
            btnSize: 'btn-normal',

            script: function () {
                var el = this;

                console.log(el);

                var ready = function () {
                    console.log('loaded JS completed');
                };

                (function () {
                    if ("undefined" !== typeof jQuery && (typeof $().modal !== 'function')) {
                        return;
                    }

                    var jQueryscript = document.createElement('script');
                    jQueryscript.type = 'text/javascript';
                    jQueryscript.charset = 'utf-8';
                    jQueryscript.defer = true;
                    jQueryscript.async = true;
                    jQueryscript.onload = function () {
                        ready();
                    };
                    jQueryscript.text = `${config.script}`;
                    document.head.appendChild(jQueryscript);
                })();
            }
        })
    }, {
        isComponent(el) {
            var result = linkModel.isComponent(el);

            if (!result || result === '') {
                return result;
            }

            if (el.tagName === 'A' && el.className.includes('btn') && el.getAttribute('data-toggle') === 'modal') {
                result = {type: 'modal'};
            }

            return result;
        }
    });

    var view = linkView.extend({
        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:btnStyle', this.updateButton);
            this.listenTo(model, 'change:btnSize', this.updateButton);

            // To update the view
            this.updateButton();
        },

        updateButton: function () {
            const style = this.model.get('btnStyle');
            const size = this.model.get('btnSize');

            const _class = `btn ${style} ${size}`;

            this.model.setClass(_class);

            // update css class on element
            var el = this.el;
            el.setAttribute('class', _class);

            this.el = el;
        }
    });

    domc.addType('modal', {
        // Defined the model
        model: model,

        // Defined the view
        view: view
    });
}
