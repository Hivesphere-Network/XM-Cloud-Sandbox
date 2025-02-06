import {
  Field,
  ImageField,
  NextImage,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface Fields {
  Image: ImageField & { metadata?: { [key: string]: unknown } };
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
}

type ImageProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ImageDefault = (props: ImageProps): JSX.Element => (
  <div className={`component image ${props.params.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Image</span>
    </div>
  </div>
);

export const Default = (props: ImageProps): JSX.Element => {
  useSitecoreContext();

  if (props.fields) {
    return (
      <div>
        <NextImage field={props.fields?.Image} imageParams={{ w: 360, h: 270 }} quality={100} />
      </div>
    );
  }

  return <ImageDefault {...props} />;
};
