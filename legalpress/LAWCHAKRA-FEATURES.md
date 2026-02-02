# LawChakra Website Features Analysis

> **Website:** https://lawchakra.in/  
> **Crawled Date:** February 2, 2026  
> **Purpose:** Reference document for LegalPress theme modifications

---

## 📋 Table of Contents

1. [Landing Page Features](#landing-page-features)
2. [Single Post Page Features](#single-post-page-features)
3. [Common Elements](#common-elements)
4. [Categories Structure](#categories-structure)
5. [Design & UI Elements](#design--ui-elements)
6. [Implementation Priority](#implementation-priority)

---

## 🏠 Landing Page Features

### 1. Top Bar (Utility Bar)

- **Live Date & Time Display** - Shows current date and time (e.g., "Mon. Feb 2nd, 2026 2:06:21 PM")
- **Social Media Icons** - YouTube, LinkedIn, Twitter/X icons with links
- **Skip to Content** - Accessibility feature

### 2. Header Section

- **Logo** - "LawChakra" text logo with stylized design
- **Main Navigation** - Primary menu (appears to be minimal/hidden on homepage)
- **Sticky/Fixed Header** - Header stays visible on scroll

### 3. Top Stories Ticker/Carousel

- **Horizontal Scrolling Headlines** - Breaking news style ticker
- **Multiple Headlines** displayed in rotation:
  - Links to latest important stories
  - Auto-scrolling or manual navigation
- **"Top Stories" Label** - Section identifier

### 4. Category-Based News Sections

#### 4.1 Latest News Section 🗞️

- **Section Title** with emoji icon (🗞️)
- **Post Cards** with:
  - Featured image/thumbnail
  - Post title (H4)
  - Excerpt/summary text
  - Category badge
- **Grid Layout** - Multiple posts displayed

#### 4.2 Supreme Court Section

- **Section Title** - "Supreme Court"
- **Post Listings** with:
  - Thumbnail images
  - Post titles
  - Date stamps
- **6-8 posts** displayed per section

#### 4.3 High Court Section

- **Section Title** - "High Court"
- **Same card layout** as Supreme Court
- **Regional court coverage** (Delhi HC, Bombay HC, Allahabad HC, etc.)

#### 4.4 Other Courts Section

- **Section Title** - "Other Courts"
- **District/Sessions Courts** coverage
- **Tribunals** coverage

#### 4.5 Legal Updates Section

- **Section Title** - "Legal Update"
- **Legislative news**
- **Policy updates**
- **Tax/Budget related news**

### 5. Opinion Section

- **Section Title** - "Opinion ›"
- **Link to category page**
- **Editorial/Analysis articles** with:
  - Featured images
  - Titles
  - "Explained" type content

### 6. Monthly Recap Section

- **Section Title** - "Monthly Recap ›"
- **Horizontal Slider/Carousel**
- **Large thumbnail cards** (1024x576 WebP images)
- **Monthly summary posts** (e.g., "SUPREME COURT MONTHLY RECAP: December 2025")
- **Navigation arrows** for carousel

### 7. Footer Section

- **Legal Pages Links:**
  - Refunds and Cancellation Policy
  - About Us
  - Contact Us
  - Disclaimer
  - Terms and Conditions
  - Privacy Policy
- **Copyright Notice** - "Copyright © All rights reserved by Law Chakra"
- **Theme Credit** - Link to theme provider
- **Social Media Icons** - YouTube, LinkedIn, Twitter/X

---

## 📄 Single Post Page Features

### 1. Header Elements (Same as Landing)

- Top bar with date/time
- Sign In button
- Social media icons
- Logo

### 2. Breadcrumb Navigation

- **Format:** Home > Category > Post Title
- **Clickable links** to each level
- **Breadcrumb icon** separators
- Example: `Home › Supreme Court › Post Title`

### 3. Post Header

- **Category Badges** - Multiple categories shown (e.g., "Supreme Court", "Headlines")
- **Post Title (H1)** - Large, prominent headline
- **Author Info:**
  - Author avatar (Gravatar)
  - Author name with link to author archive
  - "By [Author Name]" format
- **Publication Date** - Full date and time (e.g., "2 February 2026, 12:00 PM")
- **Reading Time** - Estimated read time (e.g., "3 minutes, 21 seconds Read")

### 4. Subscription CTA

- **"Thank you for reading this post, don't forget to subscribe!"** message
- Encourages newsletter/notification signup

### 5. Article Summary/Lead

- **Highlighted excerpt** in H4 styling
- **Key points summary** before main content
- Different styling from body text

### 6. Article Content

- **Well-formatted paragraphs**
- **Blockquotes** for court observations/quotes
- **"ALSO READ" Links** - Inline related article links
- **Styled quotes** with attribution
- **Case Title** - Clearly displayed case information
- **"Read Live Coverage"** - Link to related coverage
- **Search links** - "Click Here to Read More Reports On [Topic]"

### 7. YouTube CTA Section

- **"FOLLOW US FOR MORE LEGAL UPDATES ON YOUTUBE"** - Video embed or link
- Embedded YouTube video player

### 8. Share Buttons

- **Section Title** - "Share this:"
- **Social Platforms:**
  - Share on X (Twitter) - Opens in new window
  - Share on Facebook - Opens in new window
- **Minimal, clean design**

### 9. Like Button

- **Section Title** - "Like this:"
- **Loading animation** for like functionality
- **Like counter** display

### 10. Related Posts Section

- **Section Title** - "Related"
- **3 Related Articles** with:
  - Thumbnail images
  - Post titles (H4)
  - Publication dates
- **Based on same category/tags**

### 11. Author Bio Box

- **Large Author Avatar** (190x190 Gravatar)
- **Author Name** as heading
- **Author Bio** - Detailed description
- Example: "I'm Hardik Khandelwal, a B.Com LL.B. candidate..."

### 12. Similar Posts Section

- **Section Title** - "Similar Posts"
- **Post Cards** with:
  - Thumbnail image
  - Post title
  - Author avatar (small, 56x56)
  - Author name with link
  - Publication date

### 13. Sidebar (Right Column)

#### 13.1 Related News Widget

- **Section Title** - "Related News ›"
- **Link to category**
- **Post listings** with thumbnails and titles
- **Duplicate titles** for emphasis (design pattern)

#### 13.2 Trending News Widget

- **Section Title** - "Trending News ›"
- **"No trending posts in the last 2 days"** - Empty state message
- **Time-based trending** algorithm

### 14. Post Footer

- Same as site footer (legal links, social icons, copyright)

---

## 🔄 Common Elements

### Navigation

- **Skip to content** link for accessibility
- **Sticky header** behavior
- **Mobile-responsive** design

### Typography

- **Serif fonts** for headings
- **Clean, readable** body text
- **Proper heading hierarchy** (H1, H2, H3, H4)

### Images

- **WebP format** for optimization
- **Lazy loading** implemented
- **Responsive images** with srcset
- **CDN delivery** (i0.wp.com)

### Interactive Elements

- **Hover effects** on links and cards
- **New window/tab** for external links
- **Loading states** for dynamic content

---

## 📁 Categories Structure

| Category      | URL Slug          | Description                   |
| ------------- | ----------------- | ----------------------------- |
| Supreme Court | `/supreme-court/` | Supreme Court of India cases  |
| High Court    | `/high-court/`    | Various High Court cases      |
| Other Courts  | `/other-courts/`  | District, Sessions, Tribunals |
| Legal Updates | `/legal-updates/` | Legislative & policy news     |
| Latest News   | `/latest-news/`   | Breaking/recent news          |
| Headlines     | `/headlines/`     | Featured headlines            |
| Monthly Recap | `/monthly-recap/` | Monthly summaries             |
| Opinion/Blog  | `/blog/`          | Editorial content             |

---

## 🎨 Design & UI Elements

### Color Scheme

- **Primary:** Dark/Navy blue tones
- **Accent:** Gold/Yellow highlights
- **Background:** Light/White
- **Text:** Dark gray/Black

### Card Components

- **Shadow effects** on hover
- **Border radius** for rounded corners
- **Image aspect ratios** maintained
- **Consistent padding/spacing**

### Buttons & CTAs

- **Sign In button** - Prominent placement
- **Category badges** - Colored labels
- **Share buttons** - Icon + text

### Spacing & Layout

- **Container max-width** for content
- **Grid layouts** for post listings
- **Sidebar layout** on single posts
- **Full-width sections** on homepage

---

## 🎯 Implementation Priority

### High Priority (Must Have)

1. ✅ Top Bar with Date/Time + Social Icons
2. ✅ Top Stories Ticker/Carousel
3. ✅ Breadcrumb Navigation (Single Posts)
4. ✅ Category-based Sections on Homepage (6 configurable sections)
5. ✅ Author Bio Box on Single Posts

### Medium Priority (Should Have)

1. ⬜ Monthly Recap Slider/Carousel
2. ⬜ Like Button Functionality
3. ✅ Related News Sidebar Widget
4. ✅ Trending News Widget
5. ✅ Reading Time Display

### Low Priority (Nice to Have)

1. ⬜ Sign In/Authentication System
2. ⬜ YouTube Video Embed Section
3. ✅ Live Date/Time Update
4. ⬜ Newsletter Subscription Popup

---

## 📝 Notes for Development

### WordPress Implementation

- Use **Custom Post Types** or Categories for court types
- Implement **Widget Areas** for sidebar content
- Create **Customizer Options** for enabling/disabling features
- Use **AJAX** for like functionality
- Implement **Transients** for trending posts caching

### Performance Considerations

- **Lazy load** images below the fold
- **Minimize HTTP requests** for social icons (use SVG sprites)
- **Cache** category queries
- **Optimize** carousel/slider JavaScript

### SEO Considerations

- **Schema.org markup** for articles
- **Open Graph tags** for social sharing
- **Breadcrumb schema** for navigation
- **Author schema** for bio boxes

---

_Document created for LegalPress theme development reference._
