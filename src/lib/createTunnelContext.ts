import { Context, createContext } from "react";

export const createTunnelContext = <Props>(context?: Props): Context<Props> => {
    if (context) return createContext<Props>(context);
    else return createContext<Props>(null as unknown as Props);
};
