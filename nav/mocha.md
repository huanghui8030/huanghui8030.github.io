---
layout: page
title: Mocha
permalink: /mocha/
---
<div class="home">
    Mocha（{{site.categories.mocha.size}}）
    <ul class="post-list">
        {% for post in site.categories.mocha %}
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
