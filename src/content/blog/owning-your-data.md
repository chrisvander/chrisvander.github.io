---
title: Owning Your Data
date: 2026-01-01
description: How decoupling identity, data, and apps opens up new possibilities for the architecture of the Internet.
slug: owning-your-data
tags: [bluesky, atproto]
---

Bluesky has decoupled identity, data, and apps to decentralize social media. It might be architectural shift the Internet’s been missing.

Email has endured as the Internet’s default communication layer despite countless attempts to replace it. Its dominance is explained for one reason: it runs on a standard, widely adopted protocol. Every company, big and small, has to adhere to the contract that the email protocol defines. It levels the playing field.

In the decentralized social media race, there are two primary contenders: Bluesky and Mastodon. I’ve been very excited by developments in both. I don’t think it’s a winner-take-all game. However,  Mastodon feels very traditional, where data and identity are tied to the server. It makes Mastodon feel like a set of separate islands instead of one large network with pluggable backends. Mastodon, the app, cannot exist without Mastodon, the data store, which cannot exist without Mastodon, the identity provider. The user concern of “what server am I on?” is ever-present when using Mastodon.

In contrast, Bluesky defines a protocol called [AT Protocol](https://atproto.com/). It uses [Personal Data Servers](https://github.com/bluesky-social/pds) (or PDSs) to store user data across the network. Like its name describes, it stores user’s personal data. Anyone can run a PDS and store data for many users without needing to be concerned with running a “Bluesky instance”. Bluesky, the app, is simply a view over the set of all active personal data servers.

Mastodon’s backend runs on the instance that your data is on, using an identity tied to that instance. In contrast, Bluesky’s backend exists separately, using data from the server that your data is on, through an identity that can be moved and tied to any other server.

I believe this could become the dominant way to build applications, whether we’re talking social apps or enterprise-grade apps. This paradigm allows anyone to build a “Bluesky alternative” - they, too, can build an app view that references a user’s personal data server, retrieving and storing data, on behalf of the user, in a data store the user controls. 

Individuals and enterprises alike want the same thing: a stable, portable identity, and a durable data store that they control. Both individuals and businesses must be able to own their data. Apps, like Facebook, Instagram, Twitter, Reddit, should all retrieve and store data using your data server and using your consistent Internet identity. 

Today, enterprises integrate a mess of SaaS apps together, where one isolated data store talks to another isolated data store with zero centralization. Once users expect to own their data, enterprises will demand the same architecture. And with a PDS-style architecture, integrations wouldn’t need to exist as they do today - all the data is in the PDS, ready to be used by whatever app needs it. IT departments could finally have a clear view into what data is being retrieved, displayed, and written by every app in the organization.

More than ownership on the personal & enterprise side, I believe that protocols like this finally give nerds like myself a way to improve any service I’d like. Is [Leaflet](https://leaflet.pub)[^1] not doing a good job for you? Build your own blogging tool, on top of the same lexicons. Voilà! All the user’s existing data will be there, ready to be used.

I love the term [Internet handle](https://internethandle.org/) to describe this. A domain name has long defined a company’s place on the Internet. Eventually, I expect it will define everyone’s place on the Internet.

Personal Data Servers give users control of their data and their identity. They turn apps into replaceable views over that data. I expect it’s how the next generation of personal and enterprise apps will be built.

---

If you want to read more, I recommend [@pfrazee.com](https://bsky.app/profile/pfrazee.com)’s article on [Atmospheric computing](https://www.pfrazee.com/blog/atmospheric-computing).

And follow me on Bluesky: [@chrisvanderloo.com](https://bsky.app/profile/chrisvanderloo.com).

[^1]: Leaflet is, in fact, doing a great job. Check it out if you like blogging.
