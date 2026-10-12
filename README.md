# OmniStore AI

OmniStore AI is an enterprise-ready hybrid commerce and operations platform built for multi-store teams, operations leaders, and growth-focused brands.

## What this project includes
- React + Vite + Tailwind frontend
- FastAPI backend foundation
- SQLAlchemy database layer
- JWT-based auth and user roles
- Team-based multi-tenant structure
- Dashboard, orders, inventory, and settings experience
- CI/CD workflow for deployment verification
- App-store compliance and security scaffolding

## Getting started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Production build
```bash
cd frontend
npm run build
npx cap sync
```

## Environment variables
Create environment files from the examples:
- `backend/.env.example`
- `frontend/.env.example`

## Production checklist
Before app-store submission and public launch, complete:
- Replace placeholder org/app IDs and support addresses
- Add legal privacy policy and terms URLs
- Configure real environment secrets and database URLs
- Set up production deployment hosting and monitoring
- Validate sign-in, orders, inventory, and analytics flows on real devices
- Complete Android/iOS release testing and app signing

## Current maturity
This repository is structured as a market-ready enterprise product foundation and is suitable for continued development into a full production SaaS product.
