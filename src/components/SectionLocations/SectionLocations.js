import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import subjectImage from './images/anni.jpg';

import mathImage from './images/math.jpg';
import bioImage from './images/bio1.jpg';
import geoImage from './images/geo.jpg';
import sweImage from './images/subject1.jpg';
import fiImage from './images/subject2.jpg';
import historyImage from './images/subject2.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>{nameText}</div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink('Matematiikka', mathImage, '?pub_subjects=mathematics')}
        {locationLink('Biologia', bioImage, '?pub_subjects=biology')}
        {locationLink('Maantietio', geoImage, '?pub_subjects=geography')}
      </div>

      <div className={css.locations}>
        {locationLink('Ruotsi', sweImage, '?pub_subjects=swedish')}
        {locationLink('Äidinkieli', fiImage, '?pub_subjects=finnish')}
        {locationLink('Historia', historyImage, '?pub_subjects=history')}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
