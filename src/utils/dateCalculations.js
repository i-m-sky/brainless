export function calculateDaysLeft() {
  const today = new Date();
  const deadline = new Date(2025, 11, 30); // December 30, 2025
  const daysLeft = Math.max(
    0,
    Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)),
  );
  return daysLeft;
}
