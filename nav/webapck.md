---
layout: page
title: Webpack
permalink: /webpack/
sort: 05
---

<div class="home">
    <h1 class="post-title">{{page.title}}（{{site.categories.webpack.size}}）</h1>
    <ul class="post-list">
        {% for post in site.categories.webpack %}
            <li>
            <span class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</span>

            <h2>
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
            <div class="post-excerpt">{{ post.excerpt }}</div>
            </li>
        {% endfor %}
    </ul>
</div>