import React from 'react';
import PropTypes from 'prop-types';
import LogoImage from '../../assets/icon.png';
import config from '../../config';

const Logo = props => {
  const { className, format, ...rest } = props;

  return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
