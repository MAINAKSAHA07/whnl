import React, { useState } from "react";

function InstagramGrid() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isReelPlaying, setIsReelPlaying] = useState(false);

  // Curated list of 12 posts for the grid
  const posts = [
    {
      id: 1,
      type: "quote",
      content: "What starts here changes the world.",
      caption: "Our guiding light. Deeply committed to the pursuits that matter.",
      bg: "linear-gradient(135deg, #ffddcc 0%, #ffccd5 100%)", // pastel peach to rose
      textColor: "#333",
      likes: "1,240",
      comments: "42"
    },
    {
      id: 2,
      type: "image",
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      caption: "Collaborating at the intersection of intellect and execution. #WHNLGroup",
      likes: "892",
      comments: "18"
    },
    {
      id: 3,
      type: "quote",
      content: "One group, many pursuits and an obsession for excellence.",
      caption: "Diverse operations, singular standard. Excellence is not negotiable.",
      bg: "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)", // pastel mint
      textColor: "#2a4d33",
      likes: "1,053",
      comments: "29"
    },
    {
      id: 4,
      type: "reel",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
      caption: "🎥 WHNL Group Promo Reel 2026. A glimpse into our vision, industries, and pursuits. Press Play to experience.",
      likes: "3,412",
      comments: "115"
    },
    {
      id: 5,
      type: "quote",
      content: "Rooted in clarity, action, impact, participation, consistency, tenacity with a dash of humour.",
      caption: "The foundation of everything we build. And yes, we don't take ourselves too seriously all the time.",
      bg: "linear-gradient(135deg, #cce5ff 0%, #b8daff 100%)", // pastel blue
      textColor: "#1d3a5f",
      likes: "940",
      comments: "31"
    },
    {
      id: 6,
      type: "image",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      caption: "Quiet mornings in our workspace. Designing structures with human scale in mind.",
      likes: "612",
      comments: "11"
    },
    {
      id: 7,
      type: "quote",
      content: "We probably say “why not” for everything that we do.",
      caption: "Because constraints are just rules someone else made up. We choose exploration.",
      bg: "linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)", // pastel gold
      textColor: "#533f03",
      likes: "1,114",
      comments: "54"
    },
    {
      id: 8,
      type: "image",
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
      caption: "Dynamic systems. Scalable technology. Real impact.",
      likes: "743",
      comments: "14"
    },
    {
      id: 9,
      type: "quote",
      content: "Unwavering participation, no limitations.",
      caption: "We show up. Fully. Every single day.",
      bg: "linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)", // pastel pink
      textColor: "#721c24",
      likes: "889",
      comments: "22"
    },
    {
      id: 10,
      type: "quote",
      content: "We believe in ourselves almost to the point of delusion.",
      caption: "Call it crazy, call it bold. Every world-changing pursuit started with absolute belief.",
      bg: "linear-gradient(135deg, #e8dbfc 0%, #d6bbfb 100%)", // pastel purple
      textColor: "#3d126b",
      likes: "1,529",
      comments: "98"
    },
    {
      id: 11,
      type: "image",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      caption: "Visualizing research & data pipelines. Precision at depth.",
      likes: "790",
      comments: "16"
    },
    {
      id: 12,
      type: "quote",
      content: "An intersection of vision, intellect and impact.",
      caption: "Where theories turn into applications, and investments turn into impact.",
      bg: "linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%)", // pastel cyan
      textColor: "#0c5460",
      likes: "1,032",
      comments: "41"
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    if (post.type === "reel") {
      setIsReelPlaying(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    setIsReelPlaying(false);
  };

  return (
    <div className="instagram-section">
      <div className="instagram-header">
        <div className="insta-profile-info">
          <div className="insta-avatar">
            <span className="avatar-text">W</span>
          </div>
          <div className="insta-meta">
            <div className="insta-username-row">
              <h2 className="insta-username">whnl.group</h2>
              <span className="verified-badge">✓</span>
              <button className="insta-follow-btn">Follow</button>
            </div>
            <div className="insta-stats">
              <span><strong>12</strong> posts</span>
              <span><strong>48.6K</strong> followers</span>
              <span><strong>142</strong> following</span>
            </div>
            <div className="insta-bio">
              <p className="bio-name">WHNL Group</p>
              <p className="bio-desc">One group, many pursuits. Rooted in clarity, action, and impact.</p>
              <a href="#explore" className="bio-link">zaina.international/whnl</a>
            </div>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="instagram-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`instagram-grid-item ${post.type}`}
            onClick={() => handlePostClick(post)}
          >
            {post.type === "quote" && (
              <div className="insta-quote-card" style={{ background: post.bg, color: post.textColor }}>
                <p className="quote-text">“{post.content}”</p>
                <span className="quote-branding">WHNL</span>
              </div>
            )}

            {post.type === "image" && (
              <div
                className="insta-image-card"
                style={{ backgroundImage: `url("${post.url}")` }}
              />
            )}

            {post.type === "reel" && (
              <div
                className="insta-image-card reel-card"
                style={{ backgroundImage: `url("${post.thumbnail}")` }}
              >
                <div className="reel-badge">
                  <svg viewBox="0 0 24 24" className="reel-svg-icon">
                    <path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-2,14.5v-9l6,4.5Z" />
                  </svg>
                  <span>REEL</span>
                </div>
                <div className="reel-overlay-play">
                  <div className="play-triangle" />
                </div>
              </div>
            )}

            {/* Hover overlay */}
            <div className="insta-hover-overlay">
              <div className="overlay-metrics">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Post Detail Modal / Reel Modal */}
      {selectedPost && (
        <div className="insta-modal-backdrop" onClick={handleCloseModal}>
          <div className="insta-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="insta-modal-close" onClick={handleCloseModal}>×</button>
            <div className="insta-modal-body">
              {/* Media Column */}
              <div className="insta-modal-media">
                {selectedPost.type === "quote" && (
                  <div className="insta-quote-card modal-view" style={{ background: selectedPost.bg, color: selectedPost.textColor }}>
                    <p className="quote-text-large">“{selectedPost.content}”</p>
                    <span className="quote-branding-large">WHNL GROUP</span>
                  </div>
                )}

                {selectedPost.type === "image" && (
                  <img src={selectedPost.url} alt="Instagram post" className="modal-img" />
                )}

                {selectedPost.type === "reel" && (
                  <div className="reel-player-container">
                    {isReelPlaying ? (
                      <div className="custom-reel-player">
                        {/* Simulation of a dynamic promo reel inside canvas/CSS animations */}
                        <div className="hyperspeed-reel-simulation">
                          <div className="reel-glow-backdrop" />
                          <div className="reel-text-flow">
                            <span className="reel-title-slide">WHNL GROUP</span>
                            <span className="reel-subtitle-slide">WHAT STARTS HERE CHANGES THE WORLD</span>
                            <span className="reel-tags-slide">#clarity #action #impact</span>
                            <div className="reel-visual-pulse" />
                          </div>
                        </div>
                        <div className="reel-controls">
                          <button className="reel-btn" onClick={() => setIsReelPlaying(false)}>Pause</button>
                          <span className="reel-duration">0:15</span>
                        </div>
                      </div>
                    ) : (
                      <div className="reel-poster" style={{ backgroundImage: `url("${selectedPost.thumbnail}")` }}>
                        <button className="play-reel-trigger-btn" onClick={() => setIsReelPlaying(true)}>
                          Play Promo Reel
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Comments/Meta Column */}
              <div className="insta-modal-sidebar">
                <div className="sidebar-header">
                  <div className="insta-avatar small">W</div>
                  <div>
                    <span className="sidebar-username">whnl.group</span>
                    <span className="verified-badge small">✓</span>
                  </div>
                </div>
                <div className="sidebar-caption-area">
                  <div className="caption-row">
                    <div className="insta-avatar small">W</div>
                    <p className="caption-text">
                      <strong>whnl.group</strong> {selectedPost.caption}
                    </p>
                  </div>
                  <div className="comment-divider" />
                  <div className="mock-comments">
                    <div className="comment-row">
                      <span className="comment-user">alex_design</span>
                      <span className="comment-content">Absolutely love this aesthetic! Sleek. ✨</span>
                    </div>
                    <div className="comment-row">
                      <span className="comment-user">impact_lab</span>
                      <span className="comment-content">This quote hits hard. Bold approach. 🙌</span>
                    </div>
                    <div className="comment-row">
                      <span className="comment-user">tech_pursuits</span>
                      <span className="comment-content">Is the Careers board open? Can't wait!</span>
                    </div>
                  </div>
                </div>
                <div className="sidebar-footer">
                  <div className="interactions-row">
                    <span className="heart-icon">❤️</span>
                    <span className="share-icon">📤</span>
                  </div>
                  <div className="likes-count">{selectedPost.likes} likes</div>
                  <div className="post-date">June 6, 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstagramGrid;
