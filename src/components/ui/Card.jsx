import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  hoverable = false, 
  shadow = 'md', 
  padding = 'md', 
  variant = 'default',
  rounded = 'lg',
  animated = true
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 transition-all duration-300';

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const paddingClasses = {
    none: '',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  const variantClasses = {
    default: '',
    outlined: 'border border-gray-200 dark:border-gray-700',
    elevated: `${shadowClasses[shadow]} hover:shadow-xl`,
    glass: 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20',
  };

  const hoverClasses = hoverable 
    ? 'hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-gray-800/90' 
    : '';

  const animationClasses = animated 
    ? 'transform-gpu will-change-transform' 
    : '';

  const combinedClasses = [
    baseClasses,
    paddingClasses[padding],
    roundedClasses[rounded],
    variantClasses[variant],
    hoverClasses,
    animationClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={combinedClasses}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  padding: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full']),
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated', 'glass']),
  animated: PropTypes.bool,
};

export default Card;