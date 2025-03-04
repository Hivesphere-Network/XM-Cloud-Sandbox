import React from 'react';
import {
  ComponentRendering,
  Field,
  GetStaticComponentProps,
  RichText as JssRichText,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">{text}</div>
    </div>
  );
};

// export const getStaticProps: GetStaticComponentProps = async (
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   _rendering: ComponentRendering,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   _layout: LayoutServiceData
// ) => {
//   return { props: {} };
// };
