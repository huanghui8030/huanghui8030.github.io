---
layout: page
title: Html
permalink: /html/
sort: 03
---

<div class="home">
    <h1 class="post-title">{{page.title}}（{{site.categories.html.size}}）</h1>
    <ul class="post-list">
        {% for post in site.categories.html %}
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