"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var VscCircleFilled_1 = require("@react-icons/all-files/vsc/VscCircleFilled");
var Dot = function (_a) {
    var contentId = _a.contentId, isSelected = _a.isSelected, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: !isSelected ? 'text-darkest' : '', onClick: function () { return onClick(contentId); } }, { children: (0, jsx_runtime_1.jsx)(VscCircleFilled_1.VscCircleFilled, {}, void 0) }), void 0));
};
exports.default = Dot;
