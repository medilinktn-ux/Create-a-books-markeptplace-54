import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ 
  children, 
  className = '', 
  maxWidth = 'max-w-7xl', 
  padding = 'px-4 sm:px-6 lg:px-8',
  gap = 'gap-6',
  cols = 'grid-cols-1 md:grid-cols-12',
  as: Component = 'div'
}) => {
  return (
    <Component className={`min-h-screen bg-gray-50 ${className}`}>
      <div className={`mx-auto ${maxWidth} ${padding} py-8`}>
        <div className={`grid ${cols} ${gap}`}>
          {children}
        </div>
      </div>
    </Component>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  gap: PropTypes.string,
  cols: PropTypes.string,
  as: PropTypes.elementType,
};

export default Layout;