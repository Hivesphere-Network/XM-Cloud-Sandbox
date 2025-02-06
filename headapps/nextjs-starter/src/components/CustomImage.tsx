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

export const Default = (props: ImageProps): JSX.Element => {
  useSitecoreContext();

  return (
    <div>
      <NextImage field={props.fields?.Image} imageParams={{ w: 360, h: 270 }} quality={100} />
    </div>
  );
};
