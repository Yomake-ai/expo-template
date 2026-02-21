# Expo Mobile App Template

## Overview
This is an Expo + React Native mobile app with TypeScript, StyleSheet, and expo-router for file-based navigation. It runs on iOS, Android, and Web.

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

### Styling with StyleSheet
Use `StyleSheet.create()` for all styling:
```tsx
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#0f172a" },
  button: { backgroundColor: "#6366f1", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 },
  buttonText: { color: "#ffffff", fontWeight: "600", textAlign: "center" },
});
```

Theme colors:
- Primary: `#6366f1` (indigo)
- Background: `#ffffff`
- Foreground: `#0f172a`
- Muted: `#f1f5f9`
- Muted foreground: `#64748b`
- Border: `#e2e8f0`

Key rules:
- No `hover:` states (use press handlers for interaction feedback)
- No CSS grid (use flexbox only)
- Use `gap` for spacing between flex children

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
