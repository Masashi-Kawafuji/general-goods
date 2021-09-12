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
var VscChevronLeft_1 = require("@react-icons/all-files/vsc/VscChevronLeft");
var VscChevronRight_1 = require("@react-icons/all-files/vsc/VscChevronRight");
var Arrow = function (_a) {
    var type = _a.type, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: "hidden sm:block mx-6", onClick: function () { return onClick(type); } }, { children: type === 'prev' ? ((0, jsx_runtime_1.jsx)(VscChevronLeft_1.VscChevronLeft, { size: "1.5rem" }, void 0)) : ((0, jsx_runtime_1.jsx)(VscChevronRight_1.VscChevronRight, { size: "1.5rem" }, void 0)) }), void 0));
};
exports.default = Arrow;
