import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Variant = "primary" | "outline";
type Size    = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?:    Size;
  className?: string;
  children:  React.ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  as?: "button";
  href?: never;
}

interface ButtonAsAnchor extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  as:   "a";
  href: string;
  target?: string;
  rel?:    string;
}

interface ButtonAsLink extends BaseProps {
  as:   "link";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

// ─── Style maps ───────────────────────────────────────────────────────────────

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-wine)] text-white border-2 border-transparent " +
    "hover:bg-[color-mix(in_srgb,var(--color-wine)_85%,black)] hover:-translate-y-px " +
    "focus-visible:outline-[var(--color-wine)]",

  outline:
    "bg-transparent text-[var(--color-saddle)] border-2 border-[var(--color-saddle)] " +
    "hover:bg-[var(--color-saddle)] hover:text-white hover:-translate-y-px " +
    "focus-visible:outline-[var(--color-saddle)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4   py-2   text-xs",
  md: "px-6   py-2.5 text-sm",
  lg: "px-8   py-3   text-base",
};

// ─── Shared class builder ─────────────────────────────────────────────────────

function buildClassName(variant: Variant, size: Size, extra = ""): string {
  return [
    // Base
    "inline-flex items-center justify-center gap-2",
    "font-semibold tracking-wide",
    "rounded-[var(--radius-btn)]",
    "transition-all duration-200 ease-out",
    "cursor-pointer select-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",
    "active:translate-y-0",
    // Variant & size
    variantStyles[variant],
    sizeStyles[size],
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Button — riutilizzabile come <button>, <a> o Next.js <Link>.
 *
 * @example
 * // Bottone primario
 * <Button variant="primary">Prenota ora</Button>
 *
 * // Link outline
 * <Button as="link" href="/esperienze" variant="outline">Scopri di più</Button>
 *
 * // Anchor esterna
 * <Button as="a" href="https://wa.me/..." variant="primary" target="_blank">WhatsApp</Button>
 */
export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = buildClassName(variant, size, className);

  if (props.as === "link") {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _cls, children: _ch, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }

  // Default: <button>
  const { as: _as, variant: _v, size: _s, className: _cls, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
