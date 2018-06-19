---
layout: page
title: React
permalink: /react/
sort: 13
---

<div class="home">
    <h1 class="post-title">{{page.title}}（{{site.categories.other.size}}）</h1>
    <ul class="post-list">
        {% for post in site.categories.react %}
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