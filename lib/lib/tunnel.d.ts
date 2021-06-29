import React, { Context, ClassAttributes, ComponentClass, ComponentType } from "react";
export declare type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps ? InjectedProps[P] extends DecorationTargetProps[P] ? DecorationTargetProps[P] : InjectedProps[P] : DecorationTargetProps[P];
};
export declare type GetProps<C> = C extends ComponentType<infer P> ? C extends ComponentClass<P> ? ClassAttributes<InstanceType<C>> & P : P : never;
export declare const tunnel: <MappedProps>(context: React.Context<MappedProps>) => <C extends React.ComponentType<Matching<MappedProps, GetProps<C>>>>(WrappedComponent: C) => React.ComponentType<JSX.LibraryManagedAttributes<C, Omit<GetProps<C>, keyof MappedProps>>>;
export declare const createTunnel: <C extends React.ComponentType<Matching<GetProps<C>, GetProps<C>>>>(WrappedComponent: C) => [React.Context<GetProps<C>>, React.ComponentType<JSX.LibraryManagedAttributes<C, Omit<GetProps<C>, keyof GetProps<C>>>>];
