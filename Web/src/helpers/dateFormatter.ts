export const formatDate = (
  fullDate: Date,
  type: "slashFormat" | "fullFormat"
) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return type === "slashFormat"
    ? new Date(fullDate).toLocaleDateString("en-US")
    : new Date(fullDate).toLocaleDateString("en-US", options as any);
};
