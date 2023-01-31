function editElement(ref, match, replacer) {
  const content = ref.textContent;
  const patern = new RegExp(match, "g");
  const result = content.replace(patern, replacer);
  ref.textContent = result;
}
