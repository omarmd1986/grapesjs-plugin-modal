import {util as Util} from '../util';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

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

    var model = defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
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
                var forms = Array.from(this.getElementsByTagName('form'));
                // Form container
                var formContainer = forms.shift();
                for (var i = 0; i < forms.length; i++) {
                    forms[i].addEventListener('submit', e => e.preventDefault());
                }
                var submits = Array.from(this.getElementsByTagName('button'));
                // Form container
                submits = submits.filter(s => s.getAttribute('type') === 'submit');
                var submit = submits.pop();
                if (submit && formContainer) {
                    var _hiddenSubmit = document.createElement('button');
                    _hiddenSubmit.setAttribute('type', 'submit');
                    _hiddenSubmit.style.display = 'none';
                    formContainer.prepend(_hiddenSubmit);
                    
                    submit.addEventListener('click', function(e){
                        e.preventDefault();
                        _hiddenSubmit.click();
                    });
                }

                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.onload = function () {
                        (function (d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) {
                                return;
                            }
                            js = d.createElement(s);
                            js.id = id;
                            js.onload = function () {
                                console.debug('Both plugin loaded');
                            };
                            js.src = '{[ bootstrapScript ]}';
                            fjs.parentNode.insertBefore(js, fjs);
                        }(d, 'script', 'grapesjs-modal-bootstrap'));
                    };
                    js.src = '{[ jqueryScript ]}';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'grapesjs-modal-jquery'));
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

    var view = defaultView.extend({

        events: {
            dblclick: 'dblclick',
            click: 'click'
        },

        timer: null,

        dblclick: function () {
            window.clearTimeout(this.timer);
        },

        click: function (event) {
            var self = this;

            var el = self.el;
            const id = el.getAttribute('id');

            if (!id) {
                return;
            }
            const modalId = `${id}-modal`;
            const triggerId = `${id}-trigger`;

            if (event.target.id === id || event.target.id === triggerId) {
                event.preventDefault();
                event.stopPropagation();

                editor.select(self.model);

                window.clearTimeout(self.timer);

                self.timer = setTimeout(function () {
                    editor.runCommand('open-modal', {id: modalId});
                }, 300);
            }
        },

        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:btnStyle change:btnSize change:attributes', this.updateModal);

            this.updateModal();
        },

        updateModal: function () {
            const id = this.model.getId();
            console.log(`Modal plugin => ${id}`);
            if (!id) {
                return;
            }

            var model = this.model;
            var currentModal = null;
            var currentTrigger = null;
            try {
                currentTrigger = model.get('components').at(0);
            } catch (e) {
                currentTrigger = null;
            }
            try {
                currentModal = model.get('components').at(1);
            } catch (e) {
                currentModal = null;
            }

            const style = this.model.get('btnStyle');
            const size = this.model.get('btnSize');

            const modalId = `${id}-modal`;
            const triggerId = `${id}-trigger`;

            // Append new components
            if (currentTrigger) {
                var _attr = currentTrigger.get('attributes');
                _attr.id = triggerId;
                _attr['data-toggle'] = `modal`;
                _attr['data-targer'] = `#${modalId}`;
                currentTrigger.set('attributes', _attr);

                currentTrigger.addClass(`btn`);
                currentTrigger.addClass(style);
                currentTrigger.addClass(size);

                model.components(currentTrigger);
            } else {
                const _class = `btn ${style} ${size}`;
                model.components(`<a id="${triggerId}" class="${_class}" data-toggle="modal" data-target="#${modalId}">Launch modal</a>`);
            }

            if (currentModal) {
                model.append(currentModal);
            } else {
                var _modal = Util.createElement(config.modalHtml);

                if (_modal) {
                    _modal.setAttribute('id', `${modalId}`);
                    _modal = Util.toString(_modal);
                    model.append(_modal);
                }
            }
        }
    });

    domc.addType('modal', {
        // Defined the model
        model: model,

        // Defined the view
        view: view
    });
}
