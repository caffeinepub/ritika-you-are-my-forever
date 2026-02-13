# Specification

## Summary
**Goal:** Ensure the “Our Beautiful Memories 📸” section shows the intended 6 uploaded photos to all visitors when the app link is shared.

**Planned changes:**
- Add the 6 user-uploaded images (wp1-1.jpeg, wp2-1.jpeg, wp3-1.jpeg, wp4-1.jpeg, wp5.jpeg, wp6.jpeg) to the frontend as static assets and set them as the default images for the 6 heart-shaped memory frames.
- Update the Memories slot resolution logic so each slot uses the new static default image unless a user has a locally-saved uploaded image for that slot.
- Ensure the Clear/Remove action resets a slot back to its corresponding new static default image (not the old generated placeholder).

**User-visible outcome:** Anyone opening the shared link on a new device/browser will see all 6 Memories photos by default; users can still locally upload replacements per slot, and clearing a slot restores the shared default photo.
