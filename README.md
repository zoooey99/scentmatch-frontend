# Scentmatch

## Project info

**URL**: https://scentmatch-dreamscape-frontend.lovable.app/

## Project Idea

Use recent advances in language modeling to create an **interactive database for all scents** (both perfumes and colognes), enabling users to:

- Discover likeable scents based on their fragrance note profile.
- Find scents they love without months or years of trial and error.
- Personalize fragrance discovery the same way Netflix personalizes shows.

## Target Audience

- Anyone looking to explore new fragrances.
- Users who want tailored scent recommendations based on their preferences, without wasting time or money.

## The Problem

- The fragrance market is oversaturated, making it hard to choose a scent.
- Perfumes and colognes are expensive investments, often requiring trial and error.
- Finding the perfect scent through traditional methods is time-consuming and costly.

## Key Features

- User profile embedding via BERT models
- Real-time recommendations (≤ 200ms)
- Scalable to 1000 queries/second
- Secure user data (256-bit encryption, GDPR/CCPA compliant)
- Subscription-based scent delivery
- Feedback-driven model refinement

## System Architecture

- **Frontend:** Next.js, React Native
- **Backend:** FastAPI
- **ML Framework:** PyTorch + Hugging Face Transformers
- **Databases:** PostgreSQL + pgvector
- **Infrastructure:** Kubernetes, Celery + Redis, Stripe SDK, Amazon API integration
- **Monitoring:** Prometheus + Grafana

**Architecture Style:** Multi-tier Microservices  
**Design Patterns Used:** Repository, Strategy, Observer, Factory, Adapter, Circuit Breaker

## Workflows

- **User Registration:** Collect preferences → Embed with BERT → Save profile
- **Recommendation:** Retrieve embedding → Find nearest fragrances → Apply business rules → Recommend
- **Feedback Collection:** Collect ratings → Update user embedding
- **Subscription Cycle:** Monthly recommendations + feedback loop

## Team Members

| Name           | Role                    |
|----------------|--------------------------|
| Zoey Lee       | Front End Engineer        |
| Cole Foster    | Machine Learning Engineer |
| Anthony Givans | Machine Learning Engineer |

## Why ScentMatch?

- $7.7B+ fragrance market opportunity
- Pain point: finding the right scent takes months and $$$
- Our solution: fast, accurate, enjoyable scent discovery