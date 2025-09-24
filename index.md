---
layout: default
title: Aaron Thomas Mathew
---

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
    margin: 0;
}

.container {
    max-width: 480px;
    margin: 40px auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    padding: 40px 30px;
    text-align: center;
    animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.profile-section {
    margin-bottom: 40px;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 20px;
    display: block;
    border: 4px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.avatar:hover {
    transform: scale(1.05) rotate(2deg);
}

.name {
    font-size: 2rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.bio {
    font-size: 1.1rem;
    color: #718096;
    font-weight: 400;
    margin-bottom: 30px;
    font-style: italic;
}

.links-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
}

.link-item {
    display: block;
    text-decoration: none;
    padding: 18px 24px;
    border-radius: 16px;
    font-weight: 600;
    font-size: 1.05rem;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    color: white;
}

.link-item:hover {
    transform: translateY(-3px) scale(1.02);
    text-decoration: none;
    color: white;
}

.link-item:active {
    transform: translateY(-1px) scale(1.01);
}

.lectify {
    background: linear-gradient(135deg, #48bb78, #38a169);
    box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
}

.lectify:hover {
    box-shadow: 0 12px 35px rgba(72, 187, 120, 0.4);
}

.linkedin {
    background: linear-gradient(135deg, #0077b5, #005582);
    box-shadow: 0 8px 25px rgba(0, 119, 181, 0.3);
}

.linkedin:hover {
    box-shadow: 0 12px 35px rgba(0, 119, 181, 0.4);
}

.github {
    background: linear-gradient(135deg, #333, #24292e);
    box-shadow: 0 8px 25px rgba(51, 51, 51, 0.3);
}

.github:hover {
    box-shadow: 0 12px 35px rgba(51, 51, 51, 0.4);
}

.twitter {
    background: linear-gradient(135deg, #1da1f2, #0d8bd9);
    box-shadow: 0 8px 25px rgba(29, 161, 242, 0.3);
}

.twitter:hover {
    box-shadow: 0 12px 35px rgba(29, 161, 242, 0.4);
}

.blog {
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.blog:hover {
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.contact-section {
    padding-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.contact-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 12px;
}

.email-link {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(102, 126, 234, 0.1);
}

.email-link:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-1px);
    text-decoration: none;
}

@media (max-width: 480px) {
    .container {
        margin: 10px auto;
        padding: 30px 20px;
    }
    
    .name {
        font-size: 1.75rem;
    }
    
    .bio {
        font-size: 1rem;
    }
    
    .link-item {
        padding: 16px 20px;
        font-size: 1rem;
    }
}

/* Hide default Jekyll styling */
.page-header, .main-content h1, .site-footer {
    display: none;
}

body .main-content {
    max-width: none;
    padding: 0;
    margin: 0;
}
</style>

<div class="container">
    <div class="profile-section">
        <img src="./profilepic.jpeg" alt="Aaron Thomas Mathew" class="avatar">
        <h1 class="name">Aaron Thomas Mathew</h1>
        <p class="bio">Building cool things. Sharing my journey.</p>
    </div>

    <div class="links-container">
        <a href="https://www.lectify.in" class="link-item lectify" target="_blank" rel="noopener">
            🚀 Lectify.in
        </a>
        
        <a href="https://linkedin.com/in/aarontm19" class="link-item linkedin" target="_blank" rel="noopener">
            💼 LinkedIn
        </a>
        
        <a href="https://github.com/aaronmat1905" class="link-item github" target="_blank" rel="noopener">
            💻 GitHub
        </a>
        
        <a href="https://x.com/AaronTM1905" class="link-item twitter" target="_blank" rel="noopener">
            🐦 Twitter
        </a>
        
        <a href="https://arisewithhim.wordpress.com/" class="link-item blog" target="_blank" rel="noopener">
            ✨ Arise With Him: Spiritual Blog
        </a>
    </div>

    <div class="contact-section">
        <div class="contact-title">
            📬 Get in touch
        </div>
        <a href="mailto:aaronmat.work@gmail.com" class="email-link">
            aaronmat.work@gmail.com
        </a>
    </div>
</div>