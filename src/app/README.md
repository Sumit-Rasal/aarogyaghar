# ArogyaGhar - Angular Application Structure

This document describes the organization of the Angular application following best practices.

## Project Structure

```
src/app/
├── core/                    # Core application files (if needed)
│   ├── app.component.*
│   ├── app.config.*
│   └── app.routes.*
├── features/                # Feature modules (page components)
│   ├── home/
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   └── home.component.css
│   ├── about/
│   ├── services/
│   └── contact/
├── shared/                  # Shared code across features
│   ├── components/         # Reusable components
│   │   └── layout/
│   ├── models/             # TypeScript interfaces/models
│   │   └── contact.model.ts
│   ├── constants/          # Application constants
│   │   └── app.constants.ts
│   └── index.ts            # Barrel exports
└── styles/                 # Global styles (in src/styles.css)
```

## Best Practices Applied

### 1. Feature-Based Structure
- Each page/feature has its own folder with all related files
- Components are self-contained with their template and styles
- Easy to locate and maintain feature-specific code

### 2. Shared Code Organization
- **Components**: Reusable UI components (e.g., Layout)
- **Models**: TypeScript interfaces and types for type safety
- **Constants**: Application-wide constants and configuration
- **Barrel Exports**: `index.ts` files for cleaner imports

### 3. Type Safety
- All data structures are typed using interfaces
- Form models use TypeScript types
- Constants are properly typed

### 4. Separation of Concerns
- Business logic separated from presentation
- Constants extracted from components
- Models defined separately from components

### 5. Standalone Components
- All components are standalone (Angular 14+)
- No NgModules required
- Better tree-shaking and performance

## Import Guidelines

### From Features
```typescript
import { HomeComponent } from './features/home/home.component';
```

### From Shared
```typescript
import { LayoutComponent, ContactRequest, SERVICES } from './shared';
```

## Adding New Features

1. Create a new folder in `features/`
2. Create component files: `*.component.ts`, `*.component.html`, `*.component.css`
3. Add route in `app.routes.ts`
4. If reusable, move to `shared/components/`

## Adding New Models

1. Create interface in `shared/models/`
2. Export from `shared/models/index.ts` (if creating index)
3. Import where needed

## Constants Management

All application constants are in `shared/constants/app.constants.ts`:
- Services data
- Contact information
- Stats
- Assistance types

Update constants here, use in components.
