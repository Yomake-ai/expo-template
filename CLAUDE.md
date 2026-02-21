# Expo Mobile App Template

## Overview
This is an Expo + React Native mobile app with TypeScript, NativeWind (Tailwind CSS), and expo-router for file-based navigation. It runs on iOS, Android, and Web.

## Commands
```bash
npm run dev          # Start Expo web preview on port 3000
npx expo start       # Start Expo dev server (all platforms)
npx expo start --ios # iOS simulator
npx expo start --android # Android emulator
```

## Architecture
```
app/
  _layout.tsx          # Root layout (Stack navigator)
  modal.tsx            # Modal screen
  (tabs)/
    _layout.tsx        # Tab navigator
    index.tsx          # Home tab
    explore.tsx        # Explore tab
    profile.tsx        # Profile tab
components/
  ui/                  # Reusable UI components
constants/
  Colors.ts            # Theme colors
assets/
  images/              # Static images
```

## Critical Rules

### Use React Native Components (NOT HTML)
| WRONG (HTML)          | CORRECT (React Native)          |
|-----------------------|---------------------------------|
| `<div>`               | `<View>`                        |
| `<p>`, `<span>`, `<h1>` | `<Text>`                     |
| `<img>`               | `<Image>` from expo-image       |
| `<button>`            | `<Pressable>`                   |
| `<input>`             | `<TextInput>`                   |
| `<ul>` + `<li>`       | `<FlatList>`                    |
| `<a>`                 | `<Link>` from expo-router       |
| `<scroll>`            | `<ScrollView>`                  |

### Styling with NativeWind
Use `className` prop with Tailwind classes:
```tsx
<View className="flex-1 bg-background p-4">
  <Text className="text-2xl font-bold text-foreground">Hello</Text>
  <Pressable className="bg-primary rounded-xl py-3 px-6 active:opacity-80">
    <Text className="text-white font-semibold text-center">Button</Text>
  </Pressable>
</View>
```

Key differences from web Tailwind:
- No `hover:` (use `active:` for press)
- No `grid` layout (use `flex` only)
- No `cursor-pointer`
- Use `gap-*` for spacing between flex children

### Navigation
```tsx
import { Link, useRouter } from "expo-router";

// Declarative
<Link href="/modal">Go to Modal</Link>

// Programmatic
const router = useRouter();
router.push("/modal");
router.back();
```

### Forbidden APIs
Never use: `document`, `window`, `localStorage`, `sessionStorage`, `innerHTML`, `getElementById`, CSS files, or any browser-only API.

### Mobile Design
- Minimum 44x44pt touch targets
- Use `SafeAreaView` for notch/home indicator
- Use `FlatList` for long lists (not `map` in `ScrollView`)
- Always show loading states for async operations
- Use `KeyboardAvoidingView` for forms
