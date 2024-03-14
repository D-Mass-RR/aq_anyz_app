import type { ReactNode } from 'react';
import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const button = tv({
  slots: {
    container: 'flex flex-row items-center justify-center rounded-lg my-2 px-4',
    label: 'text-base font-bold',
    indicator: 'text-white h-6',
  },

  variants: {
    variant: {
      default: {
        label: 'text-white',
        container: 'bg-transparent rounded-xl',
      },
    },
    size: {
      default: {
        container: 'min-h-16 py-5',
        label: 'text-base',
      },
      lg: {
        container: 'h-12 px-8',
        label: 'text-xl',
      },
      sm: {
        container: 'h-14 px-1 w-1/2',
        label: 'text-base font-light',
      },
    },
    disabled: {
      true: {
        container: 'bg-neutral-300',
        label: 'text-neutral-600',
        indicator: 'text-neutral-400',
      },
    },
    fullWidth: {
      true: {
        container: '',
      },
      false: {
        container: 'self-center',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
    fullWidth: true,
    size: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;
interface Props
  extends ButtonVariants,
    Omit<TouchableOpacityProps, 'disabled'> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  icon?: ReactNode;
}

export const Button = React.forwardRef<TouchableOpacity, Props>(
  (
    {
      label: text,
      loading = false,
      variant = 'default',
      disabled = false,
      size = 'default',
      className = '',
      textClassName = 'text-2xl',
      icon,
      ...props
    },
    ref
  ) => {
    const styles = React.useMemo(
      () => button({ variant, disabled, size }),
      [variant, disabled, size]
    );
    return (
      <TouchableOpacity
        disabled={disabled || loading}
        className={styles.container({ className })}
        {...props}
        ref={ref}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            {loading ? (
              <ActivityIndicator size="small" className={styles.indicator()} />
            ) : (
              <>
                {icon && <View className="absolute left-7">{icon}</View>}
                <Text className={styles.label({ className: textClassName })}>
                  {text}
                </Text>
              </>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  }
);
