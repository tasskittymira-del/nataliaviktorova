import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./glow-button";

export interface GlowLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  glow?: boolean;
}

const GlowLink = React.forwardRef<HTMLAnchorElement, GlowLinkProps>(
  ({ className, glow = true, size, variant, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          buttonVariants({ variant, size }),
          "group relative",
          className,
        )}
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
      </a>
    );
  },
);

GlowLink.displayName = "GlowLink";

export { GlowLink };
