export const formatDate = (
  fullDate: Date,
  type: "dashFormat" | "fullFormat"
) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return type === "dashFormat"
    ? new Date(fullDate).toISOString().slice(0, 10)
    : new Date(fullDate).toLocaleDateString("en-US", options as any);
};
