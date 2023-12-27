import SectionButtom from "./SectionButtom";

const sections = [
  {
    "title": "Items"
  },
  {
    "title": "Offers"
  },
  {
    "title": "Analytics"
  },
  {
    "title": "Activity"
  },
]

const Sections = () => {
  return (
    <div className="flex gap-3">
      {sections.map(({ title }, index) => (
        <SectionButtom key={index} title={title} />
      ))}
    </div>
  );
}

export default Sections;
