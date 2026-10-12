import Icon from "./icon";
import CheckboxIcon from "../assets/icons/check.svg?react";
import { tv, type VariantProps } from "tailwind-variants";

export const inputCheckboxWrapperVariants = tv({
  base: `
        inline-flex intems-center justify-center relative group
    `,
});

export const inputCheckboxVariants = tv({
  base: `
        appearance-none peer flex items-center justify-center
        cursor-pointer transition overflow-hidden
    `,
  variants: {
    variant: {
      default: `
                border-2 border-solid
                border-border-primary hover:border-border-active
                checked:border-accent-brand checked:bg-accent-brand
                group-hover:checked:border-accent-brand-light 
                group-hover:checked:bg-accent-brand-light
            `,
    },
    size: {
      sm: "w-3 h-3",
      md: "w-5 h-5",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
  },
});

export const inputCheckboxIconVariants = tv({
  base: `
        absolute top-1/2 -translate-y-1/2
        hidden peer-checked:block fill-white
        cursor-pointer
        stroke-2 stroke-white
    `,
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-3 h-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputCheckboxProps
  extends
    VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCheckbox({
  variant,
  size,
  className,
  disabled,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...props}
      />
      <Icon
        svg={CheckboxIcon}
        className={inputCheckboxIconVariants({ size })}
      />
    </label>
  );
}
