import type { NextPage } from 'next';
import type { ErrorProps } from 'next/error';

import { NextSeo } from 'next-seo';
import { Error as ErrorSection } from 'src/components/Section';

const Error: NextPage<ErrorProps> = (props) => {
  return (
    <>
      <NextSeo
        title={`Error: ${props.statusCode}!`}
        description={'An unexpected error occurred.'}
      />
      <ErrorSection error={props.title} />
    </>
  );
};

export default Error;

Error.getInitialProps = ({ res, err }): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode ?? 500,
    title: err?.message ?? 'Unexpected error',
    // title: err?.message ?? (err?.stackTrace?.toString() || 'Unexpected error'),
  };
};
