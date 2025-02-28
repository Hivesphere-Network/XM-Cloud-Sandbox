/* eslint-disable @typescript-eslint/no-unused-vars */
// Test Component for testing getStaticProps

import React from 'react';
import {
  Field,
  Text,
  GetStaticComponentProps,
  ComponentRendering,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';

type StaticTestComponentProps = {
  fields: { Content: Field<string> };
};

type FieldValue = {
  value: string;
  fields?: {
    type?: {
      value?: string;
    };
  };
};

export const Default = ({ fields }: StaticTestComponentProps): JSX.Element => {
  return (
    <section>
      <div>
        <h3>Test Component for getStaticProps</h3>
        <Text field={fields?.Content} />
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticComponentProps = async (
  _rendering: ComponentRendering,
  _layout: LayoutServiceData
) => {
  const getDescendantTags =
    _rendering && _rendering.fields && (_rendering.fields['getStaticProps'] as FieldValue);
  if (getDescendantTags?.value) {
    console.log('getStaticProps True');
    console.log(getDescendantTags?.value);
    return null;
  } else {
    console.log('getStaticProps False');
    console.log(getDescendantTags?.value);
    return null;
  }
};
