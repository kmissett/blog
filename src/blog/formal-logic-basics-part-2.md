---
pageTitle: "Formal Logic Basics, Part 2"
date: 2021-06-29
tags: ["posts", "reasoning", "logic"]
excerpt: "Last time, we defined if-then statements and contrapositives. This time we'll look at more creative formal-logic statements, and discuss some that have both positive and negative terms."
---


Here we go again! Last time, we defined if-then statements and contrapositives. However, we only used one example, and we didn’t get creative at all with how we expressed the statement itself. This time we'll look at more formal-logic statements. By the end, we'll discuss some that have both positive and negative terms. Let’s begin!

## A New Example

Here’s our first example, which is a true statement here in the US:

> Only people at least 18 years of age can vote.

You might have to trust me for the moment that there is formal logic here. Granting that, though, let’s examine this. We have two ideas to consider: being at least 18, and being able to vote. Which one guarantees the other? I’ll try it both ways:

* Case I: 18+ <span aria-label="implies">→</span> vote
* Case II: vote <span aria-label="implies">→</span> 18+

Now, and I know I’m giving away the answer here, only the second one is correct. Being at least 18 doesn't guarantee that you can vote. You have to be a US citizen, and register, and fulfill several other requirements besides. If you are able to vote, then you must have already satisfied those prerequisites.

So what we did there is actually a huge deal. We tested to see if there is formal logic in the idea. Then we used our common sense to separate sufficiency from necessity. Our common sense only works when we understand the ideas, though, so for now we’ll try to stick to what’s familiar. But we also found out that the word “only” in our example signifies necessity. Thus, if you ever encounter a phrase like “Only A is B,” we know that it translates to “If B, then A.”

Meanwhile, if you flake, remove the given content and use any test phrase you like to figure out the "if" and the "then". For instance, use the one from last time: “PA<span aria-label="implies">→</span>US.” It's true that “only people already in the US can be in PA,” but not the other way around.

## Mixed Tildes

Before we wrap this up, I want to introduce two more patterns, each a bit more complex than the ones we’ve addressed so far. The rules are exactly the same, but the interpretation is a bit more involved. Each of the examples uses what I will call “mixed tildes,” in that it won’t be as simple as all “true” or all “false,” all “yes” or all “no.”

> If you are in the US, then you are not in Europe.

* US <span aria-label="implies">→</span> <span aria-label="not">~</span>Europe
* Europe <span aria-label="implies">→</span> <span aria-label="not">~</span>US

In this case, being in one of those two places prevents you from being in the other, so you can’t be in both at the same time. We call statements like this mutually exclusive, since both can't be true at the same time. Note further that you don’t have to be in either of these places, but being in one precludes being in the other.

Now consider our final example:

> If you are not in the Northern Hemisphere, then you are in the Southern Hemisphere.

* <span aria-label="not">~</span>Northern <span aria-label="implies">→</span> Southern
* <span aria-label="not">~</span>Southern <span aria-label="implies">→</span> Northern

In this case, not being in one of those two places means you must be in the other. Thus, there’s no way for you to be outside both hemispheres. (Of course, this assumes you’re on the Earth at all, but let’s grant that for now). Note here that you actually could be in both at the same time, if you’re right on the Equator. This pattern allows both things to be true, but not both to be false.

## Formal Logic Pattern Lists

The following translate to “If X, then Y”:

* All X are Y.
* Any X is Y.
* Every X is Y.
* The only X is Y.
* X is always Y.
* Y if X.
* X only if Y.
* X requires Y.
* X must be Y.
* If not Y, then not X.
* No X unless Y.
* No X until Y.
* No X without Y.

The following translate to “If X, then not Y”:

* If Y, then not X.
* No X is Y.
* No Y is X.
* Something cannot be both X and Y.
* X prevents Y.
* Y prevents X.
* X precludes Y.
* Y precludes X.
* X only if not Y.
* Y only if not X.

The following translate to “If not X, then Y”:

* If not Y, then X.
* X unless Y.
* Y unless X.
* Something must be at least one of X or Y.
* A lack of X ensures Y.
* A lack of Y ensures X.
* Not X only if Y.
* Not Y only if X.

That’s plenty for now. Until next time, happy thinking!
