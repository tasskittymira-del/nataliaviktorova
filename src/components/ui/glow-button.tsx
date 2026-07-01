import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative group inline-flex items-center justify-center gap-2 mx-auto text-center rounded-full border transition-colors duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-accent-soft hover:bg-accent/10 border-accent-soft text-accent-strong",
        solid:
          "bg-fg hover:opacity-90 text-bg border-transparent hover:border-accent/50",
        ghost:
          "border-transparent bg-transparent hover:border-border hover:bg-bg-alt text-fg-muted hover:text-fg",
      },
      size: {
        default: "px-7 py-3 text-sm font-medium",
        sm: "px-4 py-2 text-xs font-medium",
        lg: "px-10 py-4 text-base font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  glow?: boolean;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, glow = true, size, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none absolute inset-x-0 inset-y-0 mx-auto hidden h-px w-3/4 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100",
            glow && "block",
          )}
        />
        {children}
        <span
          className={cn(
            "pointer-events-none absolute inset-x-0 -bottom-px mx-auto hidden h-px w-3/4 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-40",
            glow && "block",
          )}
        />
        <span
          className={cn(
            "pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100",
            glow && "block",
          )}
          style={{ boxShadow: "0 0 24px var(--accent-glow)" }}
        />
      </button>
    );
  },
);

GlowButton.displayName = "GlowButton";

export { GlowButton, buttonVariants };
