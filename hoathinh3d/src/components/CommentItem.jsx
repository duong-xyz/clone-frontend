import React from 'react';

export default function CommentItem({ comment }) {
  if (!comment) return null;

  return (
    <div
      id={`wpd-comm-${comment.id}_0`}
      className={`comment byuser even thread-even wpd-comment ${comment.levelClass || 'wpd_comment_level-1'} ${comment.vipWrapClass || ''}`}
    >
      <div className={`wpd-comment-wrap wpd-blog-${comment.blogStyle || 'user'}`}>
        
        {/* === COT BEN TRAI === */}
        <div className="wpd-comment-left">
          {/* Avatar & Khung Vip */}
          <div className={`wpd-avatar wcai-short-info wcai-not-clicked ${comment.avatarFrameClass || ''} avatar-padding`}>
            <img
              src={comment.avatar}
              className="gravatar avatar avatar-64 um-avatar um-avatar-uploaded"
              width="64"
              height="64"
              alt={comment.author}
              data-default="https://hoathinh3d.st/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
              onError={(e) => {
                if (!e.currentTarget.getAttribute('data-load-error')) {
                  e.currentTarget.setAttribute('data-load-error', '1');
                  e.currentTarget.setAttribute(
                    'src',
                    e.currentTarget.getAttribute('data-default') || ''
                  );
                }
              }}
              loading="lazy"
            />
          </div>

          {/* Pháp Tướng */}
          {comment.phapTuong && (
            <>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @media (max-width: 767px) { .${comment.phapTuong.cmtClass} { margin: 0px 0px 0px 5px; transform: scale(1.2); } }
                    @media (min-width: 768px) { .${comment.phapTuong.cmtClass} { margin: -10px 0px 0px 5px; transform: scale(1.2); } }
                  `,
                }}
              />
              <span
                className={`phap-tuong-image phap-tuong-animate ${comment.phapTuong.rankClass} ${comment.phapTuong.cmtClass}`}
                data-name={comment.phapTuong.name}
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  '--phap-tuong-img': `url(${comment.phapTuong.src})`,
                }}
              >
                <img
                  className="phap-tuong-img"
                  src={comment.phapTuong.src}
                  alt={comment.phapTuong.name}
                  style={{ width: comment.phapTuong.width || '70px' }}
                />
              </span>
            </>
          )}

          {/* Cảnh Giới */}
          {comment.realm && (
            <div
              className="wpd-comment-label"
              wpd-tooltip={comment.realm}
              wpd-tooltip-position="right"
            >
              <span>{comment.realm}</span>
            </div>
          )}

          {/* Danh Hiệu (Desktop) */}
          {comment.appellation && (
            <>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @media (max-width: 767px) { .${comment.appellation.cmtClass} { margin: 0 3px; transform: scale(1.6); } }
                    @media (min-width: 768px) { .${comment.appellation.cmtClass} { margin: -8px 5px; transform: scale(1.6); } }
                  `,
                }}
              />
              <span
                className={`danh-hieu-image danh-hieu-animate ${comment.appellation.cmtClass}`}
                style={{
                  pointerEvents: 'none',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              >
                <img
                  className="danh-hieu-img"
                  src={comment.appellation.src}
                  style={{ width: comment.appellation.width || '100px' }}
                  alt=""
                />
              </span>
            </>
          )}

          {/* Nhẫn */}
          {comment.ring && (
            <div
              className="wpd-ring-image"
              id={`ring-user-${comment.userId}`}
              style={{ cursor: 'pointer', '--ring-cmt-w': comment.ring.ringW || '50px' }}
              onClick={() => window.showRingInfo && window.showRingInfo(comment.userId)}
            >
              <img src={comment.ring.src} alt={comment.ring.name} />
            </div>
          )}

          {/* Hồng Nhan */}
          {comment.hongNhan && (
            <div
              className="wpd-ring-image wpd-hn-ring-image"
              id={`hn-ring-user-${comment.userId}`}
              style={{ cursor: 'pointer', '--ring-cmt-w': comment.hongNhan.ringW || '50px' }}
              onClick={() => window.showHongNhanInfo && window.showHongNhanInfo(comment.userId)}
            >
              <img
                src={comment.hongNhan.src}
                alt={comment.hongNhan.name}
                title={comment.hongNhan.name}
              />
            </div>
          )}
        </div>

        {/* === COT BEN PHAIL === */}
        <div id={`comment-${comment.id}`} className="wpd-comment-right">
          <div className="wpd-comment-header">
            {/* Responsive Danh hiệu Mobile */}
            {comment.appellation && (
              <>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      @media (max-width: 767px) { .danh-hieu-image { display: none !important; } .danh-hieu-mobile { display: inline-block !important; } } 
                      @media (min-width: 768px) { .danh-hieu-image { display: inline-block; } .danh-hieu-mobile { display: none !important; } }
                      @media (max-width: 767px) { .${comment.appellation.mobileClass} { margin: 0 3px !important; transform: scale(1.6); vertical-align: middle; } }
                    `,
                  }}
                />
                <span
                  className={`danh-hieu-mobile danh-hieu-animate ${comment.appellation.mobileClass}`}
                  style={{ display: 'none', pointerEvents: 'none' }}
                >
                  <img
                    className="danh-hieu-img"
                    src={comment.appellation.src}
                    style={{ width: comment.appellation.width || '100px' }}
                    alt=""
                  />
                </span>
              </>
            )}

            {/* Author Info */}
            <div className="wpd-comment-author wcai-uname-info wcai-not-clicked">
              {comment.clanBadge && (
                <span
                  className="custom-badge-tooltip"
                  tabIndex={0}
                  role="button"
                  aria-label={comment.clanName}
                >
                  <img
                    src={comment.clanBadge}
                    alt=""
                    style={{ width: '40px' }}
                  />
                  <span className="custom-badge-tooltiptext hh3d-badge-preview">
                    <img
                      src={comment.clanBadge}
                      alt=""
                      style={{
                        maxWidth: '100%',
                        width: 'auto',
                        height: 'auto',
                        maxHeight: 'min(200px, 42vh)',
                      }}
                    />
                    <span className="custom-badge-name">{comment.clanName}</span>
                  </span>
                </span>
              )}{' '}
              {comment.author}
              
              {/* Tích xanh xịn */}
              {comment.isVerified && (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#0866ff', marginLeft: '5px' }}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                </svg>
              )}

              {/* Tông môn */}
              {comment.sect && (
                <>
                  <style
                    id={`tm-custom-color-${comment.sect.customColorId}`}
                    dangerouslySetInnerHTML={{
                      __html: `
                        @keyframes tmCustom${comment.sect.customColorId} {
                          0%   { background-position: 0% center; }
                          50%  { background-position: 100% center; }
                          100% { background-position: 200% center; }
                        }
                        .bang-hoi-mau-custom.tm-gc-${comment.sect.customColorId} { display: inline-block; font-family: 'UVN Hai Ba Trung'; font-size: 14px!important; font-weight: 700; filter: drop-shadow(0 0 1px #ff0000); background: linear-gradient(90deg, #ff0000, #00ff00, #0500fe, #00ff00, #ff0000); background-size: 650% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: tmCustom${comment.sect.customColorId} 3.5s ease-in-out infinite; }
                      `,
                    }}
                  />
                  <span data-tooltip={comment.sect.flagTooltip}>
                    <img
                      src={comment.sect.flagImg}
                      alt={comment.sect.flagTooltip}
                      style={{
                        width: '35px',
                        height: 'auto',
                        margin: '0px 0px 5px -5px',
                      }}
                    />
                  </span>{' '}
                  <span className={`bang-hoi-mau-custom tm-gc-${comment.sect.customColorId}`}>
                    <a
                      href={`/tong-mon/${comment.sect.id}`}
                      className="tong-link"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {comment.sect.name}
                    </a>{' '}
                    <span data-tooltip={comment.sect.role} />
                  </span>
                </>
              )}
            </div>

            {/* Badges Lồng Nhau (Vòng lặp map) */}
            {comment.badges && comment.badges.length > 0 && (
              <div className="wpdiscuz-mycred-wrap">
                <div className="row mycred-users-badges wpdiscuz-mycred-badges-wrap">
                  <div className="col-xs-12">
                    {comment.badges.map((b) => (
                      <div className="the-badge" key={b.id}>
                        <div
                          className="custom-badge-tooltip"
                          tabIndex={0}
                          role="button"
                          aria-label={b.label}
                        >
                          <span
                            className="hh3d-composed-badge"
                            style={{
                              display: 'inline-block',
                              position: 'relative',
                              verticalAlign: 'middle',
                              lineHeight: 0,
                              width: '70px',
                              height: '70px',
                            }}
                          >
                            <span
                              className="hh3d-composed-main"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'block',
                                zIndex: 100,
                              }}
                            >
                              <img
                                className="hh3d-composed-stack-img"
                                src={b.mainImg}
                                alt=""
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  maxWidth: 'none',
                                  maxHeight: 'none',
                                  objectFit: 'contain',
                                  transform: 'rotate(0deg)',
                                }}
                              />
                            </span>
                            {b.layers?.map((layer, idx) => (
                              <span
                                key={idx}
                                className="hh3d-composed-layer"
                                style={{
                                  position: 'absolute',
                                  width: layer.width,
                                  height: layer.height,
                                  left: layer.left,
                                  top: layer.top,
                                  transform: layer.transform,
                                  zIndex: layer.zIndex,
                                }}
                              >
                                <img
                                  className="hh3d-composed-stack-img"
                                  src={layer.src}
                                  alt=""
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: 'none',
                                    maxHeight: 'none',
                                    objectFit: 'contain',
                                  }}
                                />
                              </span>
                            ))}
                          </span>
                          
                          {/* Tooltip Preview */}
                          <span className="custom-badge-tooltiptext hh3d-badge-preview">
                            <span
                              className="hh3d-composed-badge"
                              style={{
                                display: 'inline-block',
                                position: 'relative',
                                verticalAlign: 'middle',
                                lineHeight: 0,
                                width: '220px',
                                height: '220px',
                              }}
                            >
                              <span
                                className="hh3d-composed-main"
                                style={{
                                  position: 'absolute',
                                  inset: 0,
                                  display: 'block',
                                  zIndex: 100,
                                }}
                              >
                                <img
                                  className="hh3d-composed-stack-img"
                                  src={b.mainImg}
                                  alt=""
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: 'none',
                                    maxHeight: 'none',
                                    objectFit: 'contain',
                                    transform: 'rotate(0deg)',
                                  }}
                                />
                              </span>
                              {b.layers?.map((layer, idx) => (
                                <span
                                  key={idx}
                                  className="hh3d-composed-layer"
                                  style={{
                                    position: 'absolute',
                                    width: layer.previewWidth,
                                    height: layer.previewHeight,
                                    left: layer.previewLeft,
                                    top: layer.previewTop,
                                    transform: layer.transform,
                                    zIndex: layer.zIndex,
                                  }}
                                >
                                  <img
                                    className="hh3d-composed-stack-img"
                                    src={layer.src}
                                    alt=""
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      maxWidth: 'none',
                                      maxHeight: 'none',
                                      objectFit: 'contain',
                                    }}
                                  />
                                </span>
                              ))}
                            </span>
                            <div className="custom-badge-name">{b.label}</div>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="wpd-comment-date" title={comment.fullDate}>
            <i className="far fa-clock" aria-hidden="true" />
            {comment.date}
          </div>

          <div className="wpd-space" />
          <div className="wpd-comment-link wpd-hidden">
            <span wpd-tooltip="Comment author information" wpd-tooltip-size="medium">
              <i id={`wcai-comment_${comment.id}`} className="fas fa-info wpf-cta wcai-info wcai-not-clicked" />
            </span>
            <span wpd-tooltip="Liên kết bình luận" wpd-tooltip-position="left">
              <i className="fas fa-link" aria-hidden="true" data-wpd-clipboard={`https://hoathinh3d.st/quang-am-chi-ngoai#comment-${comment.id}`} />
            </span>
          </div>
        </div>

        {/* Text Nội dung */}
        <div className="wpd-comment-text">
          <p>{comment.text}</p>
        </div>

        {/* Footer */}
        <div className="wpd-comment-footer">
          <div className="wpd-vote">
            <div className="wpd-vote-up wpd_not_clicked">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
              </svg>
            </div>
            <div className="wpd-vote-result wv-like-hidden">{comment.votes || 0}</div>
            <div className="wpd-vote-down wpd_not_clicked wpd-dislike-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
              </svg>
            </div>
          </div>
          <div className="wpd-reply-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span>Phản hồi</span>
          </div>
          <div className="wpd-space" />
        </div>
      </div>

      {/* Render Đệ Quy Các Bình Luận Con (Replies) */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="wpd-reply">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}