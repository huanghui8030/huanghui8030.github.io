---
layout: page
title: CSS
permalink: /css/
sort: 04
---

<div class="home">
    <h1 class="post-title">{{page.title}}（{{site.categories.css.size}}）</h1>
    <ul class="post-list">
        {% for post in site.categories.css %}
            <li>
            <span class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</span>

            <h2>
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
            <p>{{ post.excerpt }}</p>
            </li>
        {% endfor %}
    </ul>
</div>

