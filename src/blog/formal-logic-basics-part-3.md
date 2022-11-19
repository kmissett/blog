---
pageTitle: "Formal Logic Basics, Part 3: Combining Statements"
date: 2021-07-01
tags: ["posts", "reasoning", "logic"]
excerpt: "Everything we’ve done so far has been confined to single formal logic statements only. Let’s extend those tools to evaluate the implications of multiple statements at once."
---
Hello again! Last time, we learned to recognize when formal-logic language is in play, as well as how to process it. All that said, everything we’ve done so far has used only single statements. Today, we'll learn to consider multiple statements at once.

Most formal logic situations don’t start and end with one single “if A, then B” sentence. Usually, there are at least two statements to combine — that’s how we get anywhere in arguments. But, if that’s so, then how do we learn to make those connections in a consistent, trustworthy way?

We can combine formal-logic statements exactly when there are ideas repeated between them. Those matched terms allow us to glue the statements together.  We’re going to split this idea into four cases, defined by where those matched terms are in the statements. We’ll start with what I hope is the most straightforward, and is maybe the most useful.

## Case 1: Combining Head to Tail

* If you are in PA, then you are in the US (PA <span aria-label="implies">→</span> US)
* If you are in Philadelphia, then you are in PA (Philadelphia <span aria-label="implies">→</span> PA)

Now, I hope you see the combination here. Being in Philadelphia tells you you’re in PA. Likewise, being in PA is enough to tell you you’re in the US. Thus, being in Philly guarantees that you’re in the US:

> If you are in Philadelphia, then you are in the US. (Philadelphia <span aria-label="implies">→</span> US)

I’m calling this type of combination “head-to-tail” because that’s sort of what it does. The arrows we use as shorthand have heads and tails. When the idea on the head of one arrow matches the one on the tail of another, we can connect the other concepts. (This is a concept known as transitivity, which appears in a lot of contexts in math.)

Now, contraposing the statements negates and reverses everything. Thus, the chain still connects in the way we expected. This means the contrapositive of the combination is the combination of the contrapositives:

> If you are not in the US, then you are not in Philadelphia. (<span aria-label="not">~</span>US <span aria-label="implies">→</span> <span aria-label="not">~</span>Philadelphia)

…which, of course, you already know, but it's nice to see things work out the way they should.

Note that I’m only combining two statements here, but this could extend as far as you like. Philly implies PA implies US implies North America implies Northern Hemisphere implies Earth implies solar system implies Milky Way implies universe. We can concatenate all that down to “If you’re in Philadelphia, then you’re in the universe.”

## Case 2: Same Necessary Piece

Let’s stay with our PA-US example, but add a different piece instead:

* PA <span aria-label="implies">→</span> US
* NJ <span aria-label="implies">→</span> US

Now, while these do have a matched term, it’s not lining up head to tail. So this doesn’t mean that if you’re in PA, then you’re in NJ. Rather, it means that being in either of those two places means you’re already in the US. Put another way, it’s necessary to be in the country to have any hope of being in either of those two states.

We can still combine these, though! The way to do it is to use the word “or”:

> If you are in PA or NJ, then you are in the US (PA or NJ <span aria-label="implies">→</span> US)

So, when the “if” parts are different, but the “then” parts are the same, we join the statements with the word “or.”

Two quick notes:

1. You can be in both states, if you’re on the border between them.  So this sort of “or” is what we call inclusive. There is a notion of “exclusive or,” in which exactly one or the other is true, but both can’t be true simultaneously. We’ll see that down the road a bit.
2. The contrapositive of this is a little tricky, so I’m going to table it for now. We’ll come back to it below.

## Case 3: Same Sufficient Piece

Let’s switch back to our voting example for this one:

* Able to vote <span aria-label="implies">→</span> 18+
* Able to vote <span aria-label="implies">→</span> registered

Here, the sufficient piece is the same. Knowing a person is able to vote means both that they are 18 or older and that they have registered to vote. This tells us that both things are necessary to make it possible for a person to be able to vote. We can combine these using the word “and”:

> Able to vote <span aria-label="implies">→</span> 18+ and registered

I’m going to table the discussion of the contrapositive again, and collect it with the previous one in a little bit. Suffice to say for now that, when the “if” part is the same and the “then” parts are different, we join the two with an “and.”

## Case 4: Biconditionals

This one deserves its own post, but I’ll give the preview now. Sometimes we repeat both entities, but in the opposite order. That is, the original statement and its converse are true. In that case, each implies the other. We call this an “if and only if” statement, or more formally, a biconditional. Again, I’ll do a separate post for this, but as an example for now, here’s the most important theorem in the history of math:

* If a triangle is a right triangle, then its sides satisfy the formula a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. (right tri <span aria-label="implies">→</span> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>)
* If a triangle’s sides satisfy the formula a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>, then it is a right triangle (a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup> <span aria-label="implies">→</span> right tri)

So, if we find out either of those two things, the other is automatically true. We denote that with a double-sided arrow, to show that the implication goes both ways:

> right tri <span aria-label="if and only if">↔</span> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

Contraposing gives a biconditional too — which makes sense anyway, I hope. These two things are true at exactly the same time, so if one is false, then the other has to be:

> <span aria-label="not">~</span>right tri <span aria-label="if and only if">↔</span> a<sup>2</sup> + b<sup>2</sup> ≠ c<sup>2</sup>

So biconditionals are essentially definitions. More on this in the future, but for the sake of completeness, I wanted to include it here.

## Negating “And” and “Or”
### De Morgan’s Laws

Now, finally, let’s talk about the contrapositives of our previous cases 2 and 3. I’ll give you the punchline first, and then we’ll work it out together. When negating a statement containing the word “or,” we replace it with the word “and,” and vice versa. This comes from De Morgan’s Laws, which are fundamental to a branch of math called set theory. I won’t go into all that here, but it’s useful stuff.

### “And” Becomes “Or”

Now, to our purpose. Let’s start with our “and” statement:

> Able to vote <span aria-label="implies">→</span> 18+ and registered

Now, both being at least 18 and registered are necessary to be able to vote. So how many of those two things would have to be false to prevent you from voting? Turns out, only one. If you’re not registered, or if you’re not yet 18, then you aren’t able to vote. Thus, one necessary piece failing (or both) means the sufficient piece is not true:

> <span aria-label="not">~</span>registered or <span aria-label="not">~</span>18+ <span aria-label="implies">→</span> <span aria-label="not">~</span>able to vote

### “Or” Becomes “And”

Let’s go back to our “or” example:

> PA or NJ <span aria-label="implies">→</span> US

Now, when we contrapose this, it starts with “not in the US.” So where aren’t we? The way we’d say it in conversation is: “not in PA or NJ,” but we’re failing to distribute that negative there. (This, by the way, is the closest I want to get to a technical discussion of De Morgan’s Laws for now.)

The way to say all this a little less conversationally is that being outside the US tells us we're outside PA. It also tells us that we aren’t in NJ (and, of course, we're outside 48 other states and various protectorates). So, when the necessary part fails, every possible sufficient thing fails too.

> ~US <span aria-label="implies">→</span> <span aria-label="not">~</span>PA and <span aria-label="not">~</span>NJ

## Next time

So, this has gone on way too long, but it represents the end of our initial foray into formal logic. Next time, we’ll start to work toward the notion of assumptions that I brought up in the very first post. Happy thinking!
