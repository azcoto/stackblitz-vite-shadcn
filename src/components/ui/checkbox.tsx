import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Star, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const checkboxVariant = cva(
  cn(
    "peer h-8 w-8 shrink-0 rounded-lg border border-neutral-400",
    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    "data-[state=checked]:border-0 data-[state=checked]:text-primary-foreground",
  ),
  
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary',
        close: 'data-[state=checked]:bg-sky-600',
        star: 'data-[state=checked]:bg-amber-400'
      }
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CheckboxProps extends
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  VariantProps<typeof checkboxVariant> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariant({ variant, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {variant === "default" && <Check className="h-5 w-5" /> }
      {variant === "close" && <X className="size-5" />}
      {variant === "star" && <Star className="size-5 stroke-black" />}
      
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
