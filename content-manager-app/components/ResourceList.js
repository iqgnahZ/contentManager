import { useState } from 'react';
import Link from 'next/link';
import ResourceLable from './ResourceLable';
import moment from 'moment';

const ResourceList = ({ resources, collapsible = false, initialVisibleCount = 4 }) => {
  const [visibleResourcesCount, setVisibleResourcesCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleResourcesCount(initialVisibleCount);
    } else {
      setVisibleResourcesCount(resources.length);
    }
    setIsExpanded(!isExpanded);
  };

  const renderResource = () =>
    resources.slice(0, visibleResourcesCount).map(resource => (
      <div key={resource.id} className="column is-5 is-offset-1">
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey">
            {moment(resource.createdAt).format('LLL')}
            <ResourceLable status={resource.status} />
          </h2>
          <h1 className="title has-text-black is-3">{resource.title}</h1>
          <p className="has-text-dark">{resource.description}</p>
          <Link href={`/resources/${resource.id}`} legacyBehavior>
            <a className="button is-light">More</a>
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {renderResource()}
            </div>
            {collapsible && (
              <div className="has-text-centered">
                <button onClick={handleToggle} className="button is-ghost">
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
