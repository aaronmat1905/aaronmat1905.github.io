---
layout: default
title: Home
---

<style>
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    background-color: #ffffff;
    color: #24292f;
    line-height: 1.5;
    margin: 0;
    padding: 0;
}

/* Override Jekyll's default container */
.container-lg {
    max-width: 500px;
    margin: 0 auto;
    padding: 40px 20px;
}

.main-content {
    max-width: 500px;
    margin: 0 auto;
    padding: 40px 20px;
}

/* Profile section */
.profile-section {
    text-align: center;
    margin-bottom: 48px;
    padding: 32px 0;
    border-bottom: 1px solid #d1d9e0;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 24px;
    display: block;
    border: 2px solid #d1d9e0;
    transition: all 0.2s ease;
}

.avatar:hover {
    border-color: #24292f;
    transform: scale(1.02);
}

.profile-name {
    font-size: 32px;
    font-weight: 600;
    color: #24292f;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
}

.profile-bio {
    font-size: 18px;
    color: #656d76;
    font-weight: 400;
    margin: 0;
}

/* Links container */
.links-section {
    margin-bottom: 48px;
}

.link-item {
    display: block;
    text-decoration: none;
    color: #24292f;
    background-color: #ffffff;
    border: 1px solid #d1d9e0;
    padding: 16px 20px;
    margin-bottom: 12px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    transition: all 0.15s ease;
    position: relative;
}

.link-item:hover {
    background-color: #f6f8fa;
    border-color: #24292f;
    text-decoration: none;
    color: #24292f;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.link-item:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.link-item:focus {
    outline: 2px solid #0969da;
    outline-offset: 2px;
}

/* Special styling for primary link */
.link-primary {
    background-color: #24292f;
    color: #ffffff;
    border-color: #24292f;
}

.link-primary:hover {
    background-color: #32383f;
    color: #ffffff;
    border-color: #32383f;
}

/* Contact section */
.contact-section {
    text-align: center;
    padding-top: 32px;
    border-top: 1px solid #d1d9e0;
}

.contact-title {
    font-size: 18px;
    font-weight: 600;
    color: #24292f;
    margin-bottom: 16px;
}

.email-link {
    color: #0969da;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 6px;
    transition: all 0.15s ease;
    display: inline-block;
}

.email-link:hover {
    background-color: #f6f8fa;
    text-decoration: underline;
}

/* Responsive design */
@media (max-width: 544px) {
    .container-lg,
    .main-content {
        padding: 24px 16px;
    }
    
    .profile-name {
        font-size: 28px;
    }
    
    .profile-bio {
        font-size: 16px;
    }
    
    .link-item {
        padding: 14px 16px;
        font-size: 15px;
    }
}

/* Hide Jekyll theme elements we don't want */
.page-header {
    display: none;
}

h1:first-child {
    display: none;
}

/* Ensure proper spacing */
.main-content > h1:first-child,
.main-content > h1:first-child + p {
    display: none;
}
</style>

<div class="profile-section">
    <img src="./profilepic.jpeg" alt="Aaron Thomas Mathew" class="avatar">
    <h1 class="profile-name">Aaron Thomas Mathew</h1>
    <p class="profile-bio">Building cool things. Sharing my journey.</p>
</div>

<div class="links-section">
    <a href="https://www.lectify.in" class="link-item link-primary" target="_blank" rel="noopener">
        Lectify.in
    </a>
    
    <a href="https://linkedin.com/in/aarontm19" class="link-item" target="_blank" rel="noopener">
        LinkedIn
    </a>
    
    <a href="https://github.com/aaronmat1905" class="link-item" target="_blank" rel="noopener">
        GitHub
    </a>
    
    <a href="https://x.com/AaronTM1905" class="link-item" target="_blank" rel="noopener">
        Twitter
    </a>
    
    <a href="https://arisewithhim.wordpress.com/" class="link-item" target="_blank" rel="noopener">
        Arise With Him: Online Spiritual Blog
    </a>
</div>

<div class="contact-section">
    <h3 class="contact-title">Contact</h3>
    <a href="mailto:aaronmat.work@gmail.com" class="email-link">
        aaronmat.work@gmail.com
    </a>
</div>