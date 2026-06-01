# Pickleton Suite

A comprehensive mobile and backend suite for the Pickleton platform.

## Project Structure
- `PickletonMobileApp`: The core mobile application (Expo/React Native).
- `PickletonMobile`: Legacy or alternative mobile components.
- `database`: Database schemas and stored procedures.

## Branch Strategy
- `master`: Production branch (Stable, Restricted).
- `develop`: Primary development branch (Notifications enabled).
- `test`: QA and testing branch.

## Setup
1. Clone the repository.
2. Install dependencies in each project folder.
3. Reference the documentation in each subfolder for specific setup instructions.

1. Player Profiles & Onboarding
A robust profile system tailored for the specific metrics and demographics of Pickleball players.

## Core Features Implemented
Dynamic Demographics: Automatically calculates and displays the player's age, gender, and home club/location.
Skill & Playstyle Tracking: Tracks critical player metrics including Playing Level (Beginner to Professional), Power Hand, Backhand preference, and specific skill strengths.
DUPR® Integration: Dedicated UI to showcase a player's official DUPR (Dynamic Universal Pickleball Rating) status if a valid link is provided.
Media Galleries: Support for uploading high-quality Profile avatars, Cover photos, and Action Shots directly from the device.
2. Coach Profiles & Records
Specialized profiles designed to help Pickleball coaches market their services and manage their credentials.

Coaching Credentials: Displays the coach's official Certifications (e.g., PPA), Training Level offerings, and the year they started coaching.
Specialization Tags: Highlights specific coaching skills (e.g., Fast Volleys, Third Shot Drop, Speed Drills).
Availability & Locations: Shows whether the coach offers Individual or Group sessions, along with their primary training facility or club.
3. Community Feed & Social Engagement
A dynamic timeline where players can share updates, ask questions, and interact with the local Pickleball community.

Rich Media Posts: Users can create posts with text and image attachments. Includes an automated image-handling system that ensures media loads reliably across different network environments.
Interactive Feed: Users can Like and Comment on posts, questions, and answers in real-time.
Q&A System: Dedicated post types for asking questions and receiving threaded answers from the community.
Feed Filters: Smart feed logic that prevents hidden/blocked content from showing, and prioritizes pinned posts.
4. Networking & Connections
A built-in friend and follower system to help players organize matches and stay connected.

Connection Requests: Send, Accept, and Decline connection requests seamlessly.
Real-time Status Updates: Profile buttons dynamically update from "Connect" to "Pending" to "Connected ✓" based on the relationship status.
Follower Network: A dedicated popup list to view all current connections, with one-tap navigation directly to their player profiles.
Smart Notifications: Users receive immediate alerts in their Notifications tab when someone requests to connect with them or accepts an invitation.
5. UI/UX & Navigation
A polished, modern interface designed closely against Figma specifications.

Bottom Navigation Bar: A sleek, custom-designed navigation bar featuring custom iconography (including a bespoke Pickleball Paddle & Ball icon) for quick access to the Feed, Profile, and Post Creation.
Responsive Layouts: Carefully styled components that look great on various screen sizes, featuring rich typography, brand-aligned color palettes, and intuitive card designs.
