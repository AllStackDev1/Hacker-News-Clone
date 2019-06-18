import React from 'react';
import PropTypes from 'prop-types';

import { showElapsedTime, getDomain } from 'Lib/helper';

const TopStory = ({ stories }) => {
  return (
    <>
      <div className="top-stories-wapper">
        {stories &&
          stories.map((story, index) => (
            <div className="list-item" key={index}>
              <div className="item-count">
                <span>{index + 1}.</span>
              </div>
              <div className="votearrow" title="upvote" />
              <div className="main-content">
                <div className="title">
                  <a href={story.url}>{story.title}</a>{' '}
                  <span className="comhead">
                    <a href={story.url}>({getDomain(story.url)})</a>
                  </span>
                </div>
                <div className="subtext">
                  <span>{story.score}</span> points by{' '}
                  <a href={`/?id=n${story.by.id}`}>{story.by.id}</a>{' '}
                  <a href={story.url}>{showElapsedTime(story.timeISO)} ago</a> |{' '}
                  <a href="/#">hide</a> |{' '}
                  <a href={story.url}>
                    {story.descendants} comment
                    {`${story.descendants > 1 ? 's' : ''}`}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <p className="more">More</p>
    </>
  );
};

TopStory.propTypes = {
  stories: PropTypes.array.isRequired
};

export default TopStory;
