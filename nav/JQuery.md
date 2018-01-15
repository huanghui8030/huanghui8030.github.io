---
layout: page
title: JQuery
permalink: /jquery/
sort: 01
---
<div class="home">
    <h1 class="post-title">{{page.title}}（{{site.categories.jquery.size}}）</h1>
    <ul class="post-list">
        {% for post in site.categories.jquery %}
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
