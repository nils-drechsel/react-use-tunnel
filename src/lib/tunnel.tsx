/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Context, ClassAttributes, ComponentClass, ComponentType, useContext } from "react";
import { createTunnelContext } from "./createTunnelContext";

// from redux
export type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P]
            ? DecorationTargetProps[P]
            : InjectedProps[P]
        : DecorationTargetProps[P];
};

// from redux
export type GetProps<C> = C extends ComponentType<infer P>
    ? C extends ComponentClass<P>
        ? ClassAttributes<InstanceType<C>> & P
        : P
    : never;

export const tunnel =
    <MappedProps,>(context: Context<MappedProps>) =>
    <C extends ComponentType<Matching<MappedProps, GetProps<C>>>>(
        WrappedComponent: C
    ): ComponentType<JSX.LibraryManagedAttributes<C, Omit<GetProps<C>, keyof MappedProps>>> => {
        return function useTunneledComponent(props: any) {
            const contextProps = useContext(context);
            if (!contextProps) throw new Error("no context found, did you forget to set a provider?");

            return <WrappedComponent {...props} {...contextProps} />;
        };
    };

export const createTunnel = <C extends ComponentType<Matching<GetProps<C>, GetProps<C>>>>(
    WrappedComponent: C
): [Context<GetProps<C>>, ComponentType<JSX.LibraryManagedAttributes<C, Omit<GetProps<C>, keyof GetProps<C>>>>] => {
    const context = createTunnelContext<GetProps<C>>();

    return [
        context,
        function useTunneledComponent(props: any) {
            const contextProps = useContext(context);
            if (!contextProps) throw new Error("no context found, did you forget to set a provider?");

            return <WrappedComponent {...props} {...contextProps} />;
        },
    ];
};
