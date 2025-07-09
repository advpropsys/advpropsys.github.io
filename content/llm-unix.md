---
title: llm is the new unix hood classic
---

### [[index|advprop dot com]]

<h1 onclick="document.getElementById('darkmode-toggle').click(); return false;">
llm is the new unix hood classic
</h1>

---
> i am become grep, the curler of worlds
---

[llm](https://pypi.org/project/llm/) is a ~new cli tool made by [simonw](https://en.wikipedia.org/wiki/Simon_Willison) that lets you use llms from a ton of providers (including local) in the terminal. 

you can pipe stuff into it, for example, to get the tldr of this article:

> _**§** curl https://advprop.com/llm-unix | llm -s "tldr this essay please"_

**this makes it absurdly powerful.**

i think your computer should come with it. like sed, curl, grep, cron, or vim.

here's some fun stuff i've found i can do with it.

i think your computer should come with it. like sed, curl, grep, cron, or vim.

here's some fun stuff i've found i can do with it.
i think your computer should come with it. like sed, curl, grep, cron, or vim.

here's some fun stuff i've found i can do with it.



---

## summarization d(a)emon

have you ever **READ**?

would you like to never **READ** anything ever again?

**--INTRODUCING--**

> _llm -s "summarize this into bullet points, provide urls where appropriate"_

[orange site](https://news.ycombinator.com/) bad, yes yes, but what if you wanted to get some news from it?

simply pipe it in

> _**§** curl https://news.ycombinator.com/ | clean-html | llm -s "summarize this into bullet points, provide urls where appropriate"_

> Here are the top news stories from Hacker News in bullet points, with URLs where appropriate:
>
> **Prevention of HIV**: A new article on Science.org explores the latest research and advancements in preventing HIV. [https://www.science.org/content/prevention-hiv](https://www.science.org/content/prevention-hiv)
>
> **Tony Hawk's Pro Skyrider**: The creator of Tony Hawk's Pro Skyrider game is seeking feedback from users. [https://icode4.coffee/2023/02/16/Tony-Hawks-Pro-Skyrider-Feedback.html](https://icode4.coffee/2023/02/16/Tony-Hawks-Pro-Skyrider-Feedback.html)
>
> **Puppeteer Support for Firefox**: Mozilla has released Puppeteer support for Firefox, allowing developers to use the popular testing tool with their browser. [https://hacks.mozilla.org/2023/02/puppeteer-support-for-firefox](https://hacks.mozilla.org/2023/02/puppeteer-support-for-firefox)
>
> **How French Drains Work**: A new article on Practical Engineering explains how French drains work and when they might be used. [https://practical.engineering/how-french-drains-work](https://practical.engineering/how-french-drains-work)
>
> **Show HN: 3D Apartment Generator**: The creator of a web app that generates 3D apartments is seeking feedback from users. [https://roometron.com/](https://roometron.com/)
>
> **Official Proposal for Type Unions in C#**: Microsoft has proposed type unions for C#, a feature that would allow developers to specify multiple types for a variable. [https://github.com/dotnet/csharplang/issues/134](https://github.com/dotnet/csharplang/issues/134)

---

## "hmm i wonder what research advprop is reading" 

llm eats rss feeds for breakfast.

take an rss url, for example an arxiv feed or research newsletter

curl into rss cleaning tool into llm

> _**§** curl "http://export.arxiv.org/rss/cs.AI" | clean-rss | llm -s "what are the recent AI research trends here"_

>This research feed shows recent trends in AI including:
>
>1. **Large Language Model Optimization**: Several papers on improving efficiency and inference speed of LLMs
>
>2. **Multi-modal AI Systems**: Research on combining text, vision, and other modalities
>
>3. **AI Safety and Alignment**: Work on making AI systems more reliable and aligned with human values

this works for all sorts of rss feeds. go crazy.

here are some of my favorites:

https://www.technologyreview.com/feed/ 

https://www.dwarkeshpatel.com/feed     

https://longnow.org/ideas/rss/

---

## vibe checker

short and sweet, code and writing sanity checker in the terminal.

cat, pipe, edit, repeat.

> _**§** cat llm-unix.md | llm -s "proofread this real quick, whatever you respond with will be put into the vibe check section obviously"_

>I've reviewed the content and it looks good overall. Here are a few minor suggestions:
>
>1. Consider capitalizing "LLM" consistently throughout the text, as it's an acronym.
>
>2. In the "summarization d(a)emon" section, you might want to capitalize "READ" for consistency with the second instance.
>
>3. The "vibe checker" section is quite short compared to the others. You might want to expand on this idea a bit more or provide an example of how it can be used.
>
>4. Consider adding a brief conclusion or wrap-up section to tie everything together.
>
>Overall, the content is engaging and informative, with a good mix of humor and practical examples. The formatting and structure are clear and easy to follow.

---

if you have any questions, suggestions or feedback, you can DM me on [twitter](https://x.com/advprop)

or email me at advprop@gmail.com

<!-- or [leave anonymous feedback](https://docs.google.com/forms/d/e/1FAIpQLSf-6VD0DNGgLSeFmMInbvmZrmVspTCItEESMpeQaqgop4HfBg/viewform?usp=sf_link) -->
