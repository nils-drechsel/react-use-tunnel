"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTunnel = exports.tunnel = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = __importStar(require("react"));
const createTunnelContext_1 = require("./createTunnelContext");
const tunnel = (context) => (WrappedComponent) => {
    return function useTunneledComponent(props) {
        const contextProps = react_1.useContext(context);
        if (!contextProps)
            throw new Error("no context found, did you forget to set a provider?");
        return react_1.default.createElement(WrappedComponent, Object.assign({}, props, contextProps));
    };
};
exports.tunnel = tunnel;
const createTunnel = (WrappedComponent) => {
    const context = createTunnelContext_1.createTunnelContext();
    return [
        context,
        function useTunneledComponent(props) {
            const contextProps = react_1.useContext(context);
            if (!contextProps)
                throw new Error("no context found, did you forget to set a provider?");
            return react_1.default.createElement(WrappedComponent, Object.assign({}, props, contextProps));
        },
    ];
};
exports.createTunnel = createTunnel;
//# sourceMappingURL=tunnel.js.map