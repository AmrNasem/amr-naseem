import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function H1({
  children,
  className,
  as: Component = "h1",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H2({
  children,
  className,
  as: Component = "h2",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H3({
  children,
  className,
  as: Component = "h3",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H4({
  children,
  className,
  as: Component = "h4",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function P({
  children,
  className,
  as: Component = "p",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn("leading-7 not-first:mt-6", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Lead({
  children,
  className,
  as: Component = "p",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Large({
  children,
  className,
  as: Component = "div",
  ...props
}: TypographyProps) {
  return (
    <Component className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </Component>
  );
}

export function Small({
  children,
  className,
  as: Component = "small",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Muted({
  children,
  className,
  as: Component = "p",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
