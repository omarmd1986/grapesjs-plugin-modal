export const
        modal = `<div class="modal fade" data-type="grapesjs-modal" role="dialog" aria-labelledby="important-msg-label" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <form action="" method="POST">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">X</button>
                                    <h4 class="modal-title">Message Title!</h4>
                                </div>
                                <div class="modal-body">
                                    <p>Message text</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal"><div>Cancel</div></button>
                                    <button type="submit" class="btn btn-primary"><div>Submit</div></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>`,
        jquery = `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js`,
        bootstrap = `https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js`,
        style = `
            modal{
                position:relative;
                display:inline-block;
                height: 50px;
                width: auto;
            }
div.modal[data-type="grapesjs-modal"] .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
div.modal[data-type="grapesjs-modal"] .sr-only-focusable:active,
div.modal[data-type="grapesjs-modal"] .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
div.modal[data-type="grapesjs-modal"] [role="button"] {
  cursor: pointer;
}

modal > .btn {
  width: 100%;
  height: -webkit-fill-available;
}

modal .btn,
div.modal[data-type="grapesjs-modal"] .btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
modal .btn:focus,
div.modal[data-type="grapesjs-modal"] .btn:focus,
modal .btn:active:focus,
div.modal[data-type="grapesjs-modal"] .btn:active:focus,
modal .btn.active:focus,
div.modal[data-type="grapesjs-modal"] .btn.active:focus,
modal .btn.focus,
div.modal[data-type="grapesjs-modal"] .btn.focus,
modal .btn:active.focus,
div.modal[data-type="grapesjs-modal"] .btn:active.focus,
modal .btn.active.focus,
div.modal[data-type="grapesjs-modal"] .btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
modal .btn:hover,
div.modal[data-type="grapesjs-modal"] .btn:hover,
modal .btn:focus,
div.modal[data-type="grapesjs-modal"] .btn:focus,
modal .btn.focus,
div.modal[data-type="grapesjs-modal"] .btn.focus {
  color: #333333;
  text-decoration: none;
}
modal .btn:active,
div.modal[data-type="grapesjs-modal"] .btn:active,
modal .btn.active,
div.modal[data-type="grapesjs-modal"] .btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
modal .btn.disabled,
div.modal[data-type="grapesjs-modal"] .btn.disabled,
modal .btn[disabled],
div.modal[data-type="grapesjs-modal"] .btn[disabled],
modal fieldset[disabled] .btn,
div.modal[data-type="grapesjs-modal"] fieldset[disabled] .btn {
  cursor: not-allowed;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}
modal a.btn.disabled,
div.modal[data-type="grapesjs-modal"] a.btn.disabled,
div.modal[data-type="grapesjs-modal"] fieldset[disabled] a.btn {
  pointer-events: none;
}
modal .btn-default,
div.modal[data-type="grapesjs-modal"] .btn-default {
  color: #333333;
  background-color: #ffffff;
  border-color: #cccccc;
}
modal .btn-default:focus,
div.modal[data-type="grapesjs-modal"] .btn-default:focus,
modal .btn-default.focus,
div.modal[data-type="grapesjs-modal"] .btn-default.focus {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
modal .btn-default:hover,
div.modal[data-type="grapesjs-modal"] .btn-default:hover {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
modal .btn-default:active,
div.modal[data-type="grapesjs-modal"] .btn-default:active,
modal .btn-default.active,
div.modal[data-type="grapesjs-modal"] .btn-default.active,
modal .open > .dropdown-toggle.btn-default,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-default {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
modal .btn-default:active:hover,
div.modal[data-type="grapesjs-modal"] .btn-default:active:hover,
modal .btn-default.active:hover,
div.modal[data-type="grapesjs-modal"] .btn-default.active:hover,
modal .open > .dropdown-toggle.btn-default:hover,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-default:hover,
modal .btn-default:active:focus,
div.modal[data-type="grapesjs-modal"] .btn-default:active:focus,
modal .btn-default.active:focus,
div.modal[data-type="grapesjs-modal"] .btn-default.active:focus,
modal .open > .dropdown-toggle.btn-default:focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-default:focus,
modal .btn-default:active.focus,
div.modal[data-type="grapesjs-modal"] .btn-default:active.focus,
modal .btn-default.active.focus,
div.modal[data-type="grapesjs-modal"] .btn-default.active.focus,
modal .open > .dropdown-toggle.btn-default.focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-default.focus {
  color: #333333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
modal .btn-default:active,
div.modal[data-type="grapesjs-modal"] .btn-default:active,
modal .btn-default.active,
div.modal[data-type="grapesjs-modal"] .btn-default.active,
modal .open > .dropdown-toggle.btn-default,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-default {
  background-image: none;
}

modal .btn-primary,
div.modal[data-type="grapesjs-modal"] .btn-primary {
  color: #ffffff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
modal .btn-primary:focus,
div.modal[data-type="grapesjs-modal"] .btn-primary:focus,
modal .btn-primary.focus,
div.modal[data-type="grapesjs-modal"] .btn-primary.focus {
  color: #ffffff;
  background-color: #286090;
  border-color: #122b40;
}
modal .btn-primary:hover,
div.modal[data-type="grapesjs-modal"] .btn-primary:hover {
  color: #ffffff;
  background-color: #286090;
  border-color: #204d74;
}
modal .btn-primary:active,
div.modal[data-type="grapesjs-modal"] .btn-primary:active,
modal .btn-primary.active,
div.modal[data-type="grapesjs-modal"] .btn-primary.active,
modal .open > .dropdown-toggle.btn-primary,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-primary {
  color: #ffffff;
  background-color: #286090;
  border-color: #204d74;
}
modal .btn-primary:active:hover,
div.modal[data-type="grapesjs-modal"] .btn-primary:active:hover,
modal .btn-primary.active:hover,
div.modal[data-type="grapesjs-modal"] .btn-primary.active:hover,
modal .open > .dropdown-toggle.btn-primary:hover,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-primary:hover,
modal .btn-primary:active:focus,
div.modal[data-type="grapesjs-modal"] .btn-primary:active:focus,
modal .btn-primary.active:focus,
div.modal[data-type="grapesjs-modal"] .btn-primary.active:focus,
modal .open > .dropdown-toggle.btn-primary:focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-primary:focus,
modal .btn-primary:active.focus,
div.modal[data-type="grapesjs-modal"] .btn-primary:active.focus,
modal .btn-primary.active.focus,
div.modal[data-type="grapesjs-modal"] .btn-primary.active.focus,
modal .open > .dropdown-toggle.btn-primary.focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-primary.focus {
  color: #ffffff;
  background-color: #204d74;
  border-color: #122b40;
}
modal .btn-primary:active,
div.modal[data-type="grapesjs-modal"] .btn-primary:active,
modal .btn-primary.active,
div.modal[data-type="grapesjs-modal"] .btn-primary.active,
modal .open > .dropdown-toggle.btn-primary,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-primary {
  background-image: none;
}
modal .btn-success,
div.modal[data-type="grapesjs-modal"] .btn-success {
  color: #ffffff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
modal .btn-success:focus,
div.modal[data-type="grapesjs-modal"] .btn-success:focus,
modal .btn-success.focus,
div.modal[data-type="grapesjs-modal"] .btn-success.focus {
  color: #ffffff;
  background-color: #449d44;
  border-color: #255625;
}
modal .btn-success:hover,
div.modal[data-type="grapesjs-modal"] .btn-success:hover {
  color: #ffffff;
  background-color: #449d44;
  border-color: #398439;
}
modal .btn-success:active,
div.modal[data-type="grapesjs-modal"] .btn-success:active,
modal .btn-success.active,
div.modal[data-type="grapesjs-modal"] .btn-success.active,
modal .open > .dropdown-toggle.btn-success,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-success {
  color: #ffffff;
  background-color: #449d44;
  border-color: #398439;
}
modal .btn-success:active:hover,
div.modal[data-type="grapesjs-modal"] .btn-success:active:hover,
modal .btn-success.active:hover,
div.modal[data-type="grapesjs-modal"] .btn-success.active:hover,
modal .open > .dropdown-toggle.btn-success:hover,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-success:hover,
modal .btn-success:active:focus,
div.modal[data-type="grapesjs-modal"] .btn-success:active:focus,
modal .btn-success.active:focus,
div.modal[data-type="grapesjs-modal"] .btn-success.active:focus,
modal .open > .dropdown-toggle.btn-success:focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-success:focus,
modal .btn-success:active.focus,
div.modal[data-type="grapesjs-modal"] .btn-success:active.focus,
modal .btn-success.active.focus,
div.modal[data-type="grapesjs-modal"] .btn-success.active.focus,
modal .open > .dropdown-toggle.btn-success.focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-success.focus {
  color: #ffffff;
  background-color: #398439;
  border-color: #255625;
}
modal .btn-success:active,
div.modal[data-type="grapesjs-modal"] .btn-success:active,
modal .btn-success.active,
div.modal[data-type="grapesjs-modal"] .btn-success.active,
modal .open > .dropdown-toggle.btn-success,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-success {
  background-image: none;
}
modal .btn-info,
div.modal[data-type="grapesjs-modal"] .btn-info {
  color: #ffffff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
modal .btn-info:focus,
div.modal[data-type="grapesjs-modal"] .btn-info:focus,
modal .btn-info.focus,
div.modal[data-type="grapesjs-modal"] .btn-info.focus {
  color: #ffffff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
modal .btn-info:hover,
div.modal[data-type="grapesjs-modal"] .btn-info:hover {
  color: #ffffff;
  background-color: #31b0d5;
  border-color: #269abc;
}
modal .btn-info:active,
div.modal[data-type="grapesjs-modal"] .btn-info:active,
modal .btn-info.active,
div.modal[data-type="grapesjs-modal"] .btn-info.active,
modal .open > .dropdown-toggle.btn-info,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-info {
  color: #ffffff;
  background-color: #31b0d5;
  border-color: #269abc;
}
modal .btn-info:active:hover,
div.modal[data-type="grapesjs-modal"] .btn-info:active:hover,
modal .btn-info.active:hover,
div.modal[data-type="grapesjs-modal"] .btn-info.active:hover,
modal .open > .dropdown-toggle.btn-info:hover,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-info:hover,
modal .btn-info:active:focus,
div.modal[data-type="grapesjs-modal"] .btn-info:active:focus,
modal .btn-info.active:focus,
div.modal[data-type="grapesjs-modal"] .btn-info.active:focus,
modal .open > .dropdown-toggle.btn-info:focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-info:focus,
modal .btn-info:active.focus,
div.modal[data-type="grapesjs-modal"] .btn-info:active.focus,
modal .btn-info.active.focus,
div.modal[data-type="grapesjs-modal"] .btn-info.active.focus,
modal .open > .dropdown-toggle.btn-info.focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-info.focus {
  color: #ffffff;
  background-color: #269abc;
  border-color: #1b6d85;
}
modal .btn-info:active,
div.modal[data-type="grapesjs-modal"] .btn-info:active,
modal .btn-info.active,
div.modal[data-type="grapesjs-modal"] .btn-info.active,
modal .open > .dropdown-toggle.btn-info,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-info {
  background-image: none;
}
modal .btn-warning,
div.modal[data-type="grapesjs-modal"] .btn-warning {
  color: #ffffff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
modal .btn-warning:focus,
div.modal[data-type="grapesjs-modal"] .btn-warning:focus,
modal .btn-warning.focus,
div.modal[data-type="grapesjs-modal"] .btn-warning.focus {
  color: #ffffff;
  background-color: #ec971f;
  border-color: #985f0d;
}
modal .btn-warning:hover,
div.modal[data-type="grapesjs-modal"] .btn-warning:hover {
  color: #ffffff;
  background-color: #ec971f;
  border-color: #d58512;
}
modal .btn-warning:active,
div.modal[data-type="grapesjs-modal"] .btn-warning:active,
modal .btn-warning.active,
div.modal[data-type="grapesjs-modal"] .btn-warning.active,
modal .open > .dropdown-toggle.btn-warning,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-warning {
  color: #ffffff;
  background-color: #ec971f;
  border-color: #d58512;
}
modal .btn-warning:active:hover,
div.modal[data-type="grapesjs-modal"] .btn-warning:active:hover,
modal .btn-warning.active:hover,
div.modal[data-type="grapesjs-modal"] .btn-warning.active:hover,
modal .open > .dropdown-toggle.btn-warning:hover,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-warning:hover,
modal .btn-warning:active:focus,
div.modal[data-type="grapesjs-modal"] .btn-warning:active:focus,
modal .btn-warning.active:focus,
div.modal[data-type="grapesjs-modal"] .btn-warning.active:focus,
modal .open > .dropdown-toggle.btn-warning:focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-warning:focus,
modal .btn-warning:active.focus,
div.modal[data-type="grapesjs-modal"] .btn-warning:active.focus,
modal .btn-warning.active.focus,
div.modal[data-type="grapesjs-modal"] .btn-warning.active.focus,
modal .open > .dropdown-toggle.btn-warning.focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-warning.focus {
  color: #ffffff;
  background-color: #d58512;
  border-color: #985f0d;
}
modal .btn-warning:active,
div.modal[data-type="grapesjs-modal"] .btn-warning:active,
modal .btn-warning.active,
div.modal[data-type="grapesjs-modal"] .btn-warning.active,
modal .open > .dropdown-toggle.btn-warning,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-warning {
  background-image: none;
}
modal .btn-danger,
div.modal[data-type="grapesjs-modal"] .btn-danger {
  color: #ffffff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
modal .btn-danger:focus,
div.modal[data-type="grapesjs-modal"] .btn-danger:focus,
modal .btn-danger.focus,
div.modal[data-type="grapesjs-modal"] .btn-danger.focus {
  color: #ffffff;
  background-color: #c9302c;
  border-color: #761c19;
}
modal .btn-danger:hover,
div.modal[data-type="grapesjs-modal"] .btn-danger:hover {
  color: #ffffff;
  background-color: #c9302c;
  border-color: #ac2925;
}
modal .btn-danger:active,
div.modal[data-type="grapesjs-modal"] .btn-danger:active,
modal .btn-danger.active,
div.modal[data-type="grapesjs-modal"] .btn-danger.active,
modal .open > .dropdown-toggle.btn-danger,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-danger {
  color: #ffffff;
  background-color: #c9302c;
  border-color: #ac2925;
}
modal .btn-danger:active:hover,
div.modal[data-type="grapesjs-modal"] .btn-danger:active:hover,
modal .btn-danger.active:hover,
div.modal[data-type="grapesjs-modal"] .btn-danger.active:hover,
modal .open > .dropdown-toggle.btn-danger:hover,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-danger:hover,
modal .btn-danger:active:focus,
div.modal[data-type="grapesjs-modal"] .btn-danger:active:focus,
modal .btn-danger.active:focus,
div.modal[data-type="grapesjs-modal"] .btn-danger.active:focus,
modal .open > .dropdown-toggle.btn-danger:focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-danger:focus,
modal .btn-danger:active.focus,
div.modal[data-type="grapesjs-modal"] .btn-danger:active.focus,
modal .btn-danger.active.focus,
div.modal[data-type="grapesjs-modal"] .btn-danger.active.focus,
modal .open > .dropdown-toggle.btn-danger.focus,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-danger.focus {
  color: #ffffff;
  background-color: #ac2925;
  border-color: #761c19;
}
modal .btn-danger:active,
div.modal[data-type="grapesjs-modal"] .btn-danger:active,
modal .btn-danger.active,
div.modal[data-type="grapesjs-modal"] .btn-danger.active,
modal .open > .dropdown-toggle.btn-danger,
div.modal[data-type="grapesjs-modal"] .open > .dropdown-toggle.btn-danger {
  background-image: none;
}
modal .btn-lg,
div.modal[data-type="grapesjs-modal"] .btn-lg {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
modal .btn-sm,
div.modal[data-type="grapesjs-modal"] .btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
modal .btn-xs,
div.modal[data-type="grapesjs-modal"] .btn-xs {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

div.modal[data-type="grapesjs-modal"] input[type="submit"].btn-block,
div.modal[data-type="grapesjs-modal"] input[type="reset"].btn-block,
div.modal[data-type="grapesjs-modal"] input[type="button"].btn-block {
  width: 100%;
}
div.modal[data-type="grapesjs-modal"] .close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
div.modal[data-type="grapesjs-modal"] .close:hover,
div.modal[data-type="grapesjs-modal"] .close:focus {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
div.modal[data-type="grapesjs-modal"] button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
div.modal[data-type="grapesjs-modal"] .modal-open {
  overflow: hidden;
}
div.modal[data-type="grapesjs-modal"] {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  background-color:rgba(0,0,0,.7)
}
div.modal[data-type="grapesjs-modal"].fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}
div.modal[data-type="grapesjs-modal"].in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
div.modal[data-type="grapesjs-modal"] .modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
div.modal[data-type="grapesjs-modal"] .modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
div.modal[data-type="grapesjs-modal"] .modal-content {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #999999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000000;
}
.modal-backdrop.fade {
  opacity: 0;
  filter: alpha(opacity=0);
}
.modal-backdrop.in {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
div.modal[data-type="grapesjs-modal"] .modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
div.modal[data-type="grapesjs-modal"] .modal-header .close {
  margin-top: -2px;
}
div.modal[data-type="grapesjs-modal"] .modal-title {
  margin: 0;
  line-height: 1.42857143;
}
div.modal[data-type="grapesjs-modal"] .modal-body {
  position: relative;
  padding: 15px;
}
div.modal[data-type="grapesjs-modal"] .modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
div.modal[data-type="grapesjs-modal"] .modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}
div.modal[data-type="grapesjs-modal"] .modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
div.modal[data-type="grapesjs-modal"] .modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
div.modal[data-type="grapesjs-modal"] .modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  div.modal[data-type="grapesjs-modal"] .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  div.modal[data-type="grapesjs-modal"] .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  div.modal[data-type="grapesjs-modal"] .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  div.modal[data-type="grapesjs-modal"] .modal-lg {
    width: 900px;
  }
}
.clearfix:before,
.clearfix:after,
div.modal[data-type="grapesjs-modal"] .modal-header:before,
div.modal[data-type="grapesjs-modal"] .modal-header:after,
div.modal[data-type="grapesjs-modal"] .modal-footer:before,
div.modal[data-type="grapesjs-modal"] .modal-footer:after {
  content: " ";
  display: table;
}
.clearfix:after,
div.modal[data-type="grapesjs-modal"] .modal-header:after,
div.modal[data-type="grapesjs-modal"] .modal-footer:after {
  clear: both;
}
div.modal[data-type="grapesjs-modal"].center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
div.modal[data-type="grapesjs-modal"].pull-right {
  float: right !important;
}
div.modal[data-type="grapesjs-modal"].pull-left {
  float: left !important;
}
div.modal[data-type="grapesjs-modal"].hide {
  display: none !important;
}
div.modal[data-type="grapesjs-modal"].show {
  display: block !important;
}
div.modal[data-type="grapesjs-modal"].invisible {
  visibility: hidden;
}
div.modal[data-type="grapesjs-modal"].text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
div.modal[data-type="grapesjs-modal"] .hidden {
  display: none !important;
}
div.modal[data-type="grapesjs-modal"] .affix {
  position: fixed;
}
            `;