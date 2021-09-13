"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAROUSEL_CONTENT_FIELDS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_responsive_carousel_1 = require("react-responsive-carousel");
require("react-responsive-carousel/lib/styles/carousel.min.css");
var Arrow_1 = __importDefault(require("./Arrow"));
var Dot_1 = __importDefault(require("./Dot"));
exports.CAROUSEL_CONTENT_FIELDS = (0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CarouselContentFields on DatoCmsArticle {\n    featuredImage {\n      gatsbyImageData(aspectRatio: 1.77)\n      alt\n    }\n    originalId\n  }\n"], ["\n  fragment CarouselContentFields on DatoCmsArticle {\n    featuredImage {\n      gatsbyImageData(aspectRatio: 1.77)\n      alt\n    }\n    originalId\n  }\n"])));
var Carousel = function (_a) {
    var contents = _a.contents;
    var _b = (0, react_1.useState)(0), selectedItem = _b[0], setSelectedItem = _b[1];
    var handleArrowClick = function (type) {
        var index = selectedItem + (type === 'prev' ? -1 : 1);
        setSelectedItem(index);
    };
    var handleDotClick = function (contentId) {
        setSelectedItem(contentId);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex mb-2" }, { children: [(0, jsx_runtime_1.jsx)(Arrow_1.default, { type: "prev", onClick: handleArrowClick }, void 0), (0, jsx_runtime_1.jsx)(react_responsive_carousel_1.Carousel, __assign({ autoPlay: true, interval: 5000, infiniteLoop: true, showArrows: false, showStatus: false, showIndicators: false, showThumbs: false, selectedItem: selectedItem, onChange: function (index) { return setSelectedItem(index); } }, { children: contents.map(function (_a) {
                            var featuredImage = _a.featuredImage, originalId = _a.originalId;
                            return ((0, jsx_runtime_1.jsx)(gatsby_1.Link, __assign({ to: "/news/" + originalId }, { children: (0, jsx_runtime_1.jsx)(gatsby_plugin_image_1.GatsbyImage, { image: featuredImage.gatsbyImageData, alt: featuredImage.alt }, void 0) }), originalId));
                        }) }), void 0), (0, jsx_runtime_1.jsx)(Arrow_1.default, { type: "next", onClick: handleArrowClick }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("ul", __assign({ className: "flex justify-center" }, { children: contents.map(function (_, index) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(Dot_1.default, { contentId: index, isSelected: index === selectedItem, onClick: handleDotClick }, void 0) }, index)); }) }), void 0)] }, void 0));
};
exports.default = Carousel;
var templateObject_1;
