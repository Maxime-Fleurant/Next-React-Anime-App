import { FunctionComponent } from 'react';
import { Maybe, ExternalLink } from '../../../../common/graphqlType';
import { externalLinkButton, linkContainer } from '../style';

// TYPE
type TExternalLinkList = FunctionComponent<{ externalLinks: Maybe<ExternalLink>[] }>;

// REACT
export const ExternalLinkList: TExternalLinkList = ({ externalLinks }) => {
  const rowExternalLinksListJsx = externalLinks.map((externalLink) => {
    if (externalLink) {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          css={externalLinkButton}
          href={externalLink.url}
          key={externalLink.site}
        >
          {externalLink.site}
        </a>
      );
    }

    return null;
  });

  const filteredExternalLinkListJsx = rowExternalLinksListJsx.filter(
    (elem): elem is JSX.Element => elem !== null
  );

  return (
    <>
      <div css={linkContainer}>{filteredExternalLinkListJsx}</div>
    </>
  );
};
