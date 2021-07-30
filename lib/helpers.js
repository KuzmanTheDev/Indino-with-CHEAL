export const capitalize = (s) => {
  try {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  } catch (err) {
    console.log(err);
  }
};
