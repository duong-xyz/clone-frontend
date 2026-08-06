import React, { useState } from 'react';

export default function TrendingCard({ movie, rank, isCompact = false }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <div className={`hh3d-preview-trending-card is-rank-${rank} ${isCompact ? 'is-compact' : ''}`}>
      <a href={movie.url} className="hh3d-preview-trending-card">
        <div className={`hh3d-preview-trending-card-poster-wrap ${isImgLoaded ? 'halim-trending-poster-loaded' : ''}`}>
          <img
            width={224}
            height={299}
            src={movie.thumb}
            className="hh3d-preview-trending-card-poster"
            alt={movie.title}
            decoding="async"
            sizes={movie.sizes}
            loading={movie.loading}
            fetchPriority={movie.fetchpriority}
            onLoad={() => setIsImgLoaded(true)}
          />
          <div className="hh3d-preview-poster-scrim" />
          <div className="hh3d-preview-trending-rank">{rank}</div>

          <div className="hh3d-preview-poster-top">
            <span className="hh3d-preview-poster-chip is-episode">
              <i className="fas fa-play" aria-hidden="true"></i>
              {movie.episode}
            </span>
          </div>

          {movie.isHot && (
            <div className="hh3d-preview-trending-card-stat is-hot">
              <i className="fas fa-fire" aria-hidden="true" />
              <span>{movie.score}</span>
            </div>
          )}
          <div className="hh3d-preview-trending-card-cta" />
        </div>
        <div className="hh3d-preview-trending-card-title-wrap">
          <h4 className="hh3d-preview-trending-card-title">{movie.title}</h4>
        </div>
      </a>
      <div className="hh3d-preview-trending-badge" />
    </div>
  );
}
