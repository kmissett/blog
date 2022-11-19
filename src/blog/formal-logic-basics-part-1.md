---
pageTitle: "Formal Logic Basics, Part 1"
date: 2021-06-27
tags: ["posts", "reasoning", "logic"]
excerpt: "My goals today are to define the pieces of an if-then statement, discuss their meanings and significance, and finally to convert them into an equivalent form that might give us some new insight into the situation."
---
Welcome back! If you read my previous post, I'm very glad that you returned. I need validation, or else I wouldn’t be blogging in the first place. If you’re reading me for the first time, of course, forget I said all that; I’m super confident and not at all needy.

My own baggage aside, I actually demonstrated above some of the techniques I want to cover in today’s post. We'll define the pieces of an if-then statement and discuss their significance. After that, we'll convert the statement into an equivalent form that gives new insight into it.

## The Pieces of an If-Then Statement

Starting with an example is often a good way to process something. If we only ever talk in general terms, it makes things hard to understand. Even worse, it makes things tougher to recall, or even to trust that you remember them accurately. Anyway, to our example:

> If you are in Pennsylvania, then you are in the US.

I picked this example because: a) it’s actually true; and b) I am currently in PA, so it’s an easy one for me to remember. We can write any if-then statement using symbols. We write an arrow (read “implies”) going from the “if” part to the “then”:

> PA <span aria-label="implies">→</span> US

We call the “if” part of the statement the sufficient piece; the “then” is the necessary piece. Let’s unpack why we use these terms, and what the pieces do for us. We need to be sure we understand why a thing is true before we can rely on remembering it. 

So what do these mean?

So, the word “sufficient” means “enough,” which is why we use it here. The sufficient piece is enough to guarantee that the other piece follows. To take our example, knowing we’re in PA guarantees that we’re in the US, without question.

Meanwhile, the necessary piece doesn’t guarantee anything, but it makes it possible. If we know we’re in the US, for instance, that doesn’t mean we’re definitely in PA; only that we could be. We could also be in New York, California, Arizona, Puerto Rico, or even New Jersey (I grew up there, which is why I live in PA now). So the necessary piece is true as a prerequisite before the sufficient piece could ever hold.

## The Contrapositive
### Meet the New Statement, Same as the Old Statement

All this leads to another big idea in formal logic, known as a contrapositive. Once people get their hands on a formal logic statement, they often try twisting it into new forms. Some of these are OK, and others aren’t. Let’s see how that goes.

We already sort of talked about this, but let’s formalize it. What if we reversed the arrow? I mean, is the following statement true?

> If you are in the US, then you are in PA. (US <span aria-label="implies">→</span> PA)

No; remember, NJ is still a thing. We call this the converse of the previous one, and in general is not true based on the original statement.

OK, how about this: Instead of reversing the statement, let’s negate it! Turn every “true” into a “false,” every “yes” into a “no.” (Note that we’ll indicate the negative of a statement with the “~” sign, and read it "not.")

> If you are not in PA, then you are not in the US. (<span aria-label="not">~</span>PA <span aria-label="implies">→</span> <span aria-label="not">~</span>US)

Nope; still not true. This form, by the way, is the inverse, and is still in general wrong.

Here comes the cool bit: What if we did both things? That is, what if we reversed and negated? Then we get a form called the contrapositive:

> If you are not in the US, then you are not in PA. (<span aria-label="not">~</span>US <span aria-label="implies">→</span> <span aria-label="not">~</span>PA)

This actually is true! Imagine that the necessary part fails. That part makes the sufficient piece possible. Thus if it's not true, the sufficient piece must be impossible! The contrapositive is always true when the original statement is. We call this being logically equivalent. In fact, the contrapositive isn't even new information — not really.

So why should we care? Well, it gives us a new way to think about our original statement. Also, we may need to contrapose a statement to combine it with another one (though we’ll hold off on that for the moment).

## Recap

1. “If” = sufficient = guarantees the then part
2. “Then” = necessary = makes the if part possible
3. To form a contrapositive, reverse and negate.

Next time, more examples, and lots more language. Until then, happy thinking!
