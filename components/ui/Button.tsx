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
//
// Strategia animazione:
//   • .btn-animated        — position:relative + overflow:hidden + isolation
//   • .btn-fill-primary    — ::before con bg saddle che scorre da sinistra (su wine)
//   • .btn-fill-outline    — ::before con bg saddle che riempie il bordo trasparente
//
// Il testo rimane visibile grazie a isolation:isolate + z-index:-1 sul ::before.
// La transizione è disabilitata via CSS @media (prefers-reduced-motion: reduce).

const variantStyles: Record<Variant, string> = {
  primary:
    // Sfondo wine di partenza; il fill saddle entra da sinistra al hover
    "bg-[var(--color-wine)] text-white border-2 border-transparent " +
    "btn-animated btn-fill-primary " +
    // Leggero sollevamento + ombra elegante al hover
    "hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-4px_var(--color-wine)] " +
    "focus-visible:outline-[var(--color-wine)]",

  outline:
    // Sfondo trasparente di partenza; fill saddle entra e il testo diventa bianco
    "bg-transparent text-[var(--color-saddle)] border-2 border-[var(--color-saddle)] " +
    "btn-animated btn-fill-outline " +
    "hover:text-white hover:-translate-y-0.5 " +
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
    // Transizione per translate + shadow; il fill ::before è gestito dal CSS
    "transition-[transform,box-shadow,color] duration-300 ease-out",
    "cursor-pointer select-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",
    "active:translate-y-0 active:shadow-none",
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
