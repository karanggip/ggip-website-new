---
title: Building the data infrastructure layer for global IP
date: 2026-04-22
author: Guarded Growth Team
category: Product Updates
excerpt: Our launch story. Why we started with infrastructure instead of an application — and why every engine we ship makes the foundation more valuable.
coverColor: indigo
coverImage: /assets/blog/infrastructure-layer.svg
readTime: 5
published: true
---

When we started Guarded Growth, the obvious thing to do was build a docketing app and go to market. That's what every IP software company before us had done. Pick a workflow, build a tool, sell it.

We didn't do that. We spent the first six months building the layer underneath.

Here's why — and what that means for the firms we work with.

## The shape of the problem

The IP management industry doesn't have a technology problem. It has an infrastructure problem.

Every IP office in the world — USPTO, EUIPO, WIPO, JPO, KIPO, and hundreds more — generates structured data. Filings. Status changes. Deadlines. Registrations. Renewals. This data is the raw material of every IP workflow. Docketing, renewals, opposition tracking, portfolio analytics, valuations, due diligence — all of it depends on getting that office data into your system, accurately, in real time.

But that data is scattered across siloed national systems. Each office has its own formats, protocols, update cadences, languages, authentication schemes. No one had built a unified, cloud-native data infrastructure that ingests, cleans, standardizes, and connects this data in real time across jurisdictions.

So that's what we built first.

## What the foundation is

The Guarded Growth data infrastructure layer covers 100+ IP offices today, growing by approximately two per month. For each office, we maintain a direct connector — built on whatever interface the office actually exposes (API, bulletin feed, webhook, or in some cases a custom integration with the office itself). The connector pulls status changes, document updates, and deadline-relevant events in close to real time.

Behind the connectors sits a normalization layer. The "Pending" status code at the USPTO doesn't mean the same thing as the "En cours" status code at INPI, but our schema maps both into a single canonical concept. Date formats, currencies, classifications — all standardised. The result is a single structured database of global IP activity, queryable by any workflow built on top of it.

This took longer than building a docketing app would have. It also creates a kind of advantage that's hard to copy.

## What gets built on top

DocketEngine was the first engine. It reads from the infrastructure layer to deliver automated IP docketing across every jurisdiction we cover. RenewalEngine came next, reading from the same layer to handle renewals.

Every engine that ships after this — InventionEngine, OppositionEngine, LicensingEngine, and others on the roadmap — runs on the same foundation. Which means three things:

1. **Data consistency.** Every engine sees the same portfolio data. No duplication. No sync gaps.
2. **Speed of new product development.** We don't have to rebuild office connectors for each engine. The foundation is shared.
3. **Compounding value.** Every new jurisdiction we add makes every engine more capable. Every engine we ship makes the foundation more valuable.

## What this means for you

If you're picking IP software today, the layer underneath matters more than the surface. A polished docketing app built on a fragile data foundation will fail you the first time the foundation cracks. A modest application built on infrastructure that's genuinely solid will get better every year — without you having to switch.

We're at the start of a long build. But the architecture is in place, and the engines are shipping on it. If you want to see what infrastructure-first IP software looks like, we'd love to give you a walkthrough.
