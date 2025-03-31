import { useEffect, useState } from "react";
import "./App.css";
import InputCheckBox from "./components/inputCheckbox";

function App() {
  const [selectAllPages, setSelectAllPages] = useState({
    id: "all-pages",
    title: "All Pages",
    checked: false,
  });
  const [pageItems, setPageItems] = useState([
    { id: "page-1", title: "Page 1", checked: false },
    { id: "page-2", title: "Page 2", checked: false },
    { id: "page-3", title: "Page 3", checked: false },
    { id: "page-4", title: "Page 4", checked: false },
  ]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    if (id === "all-pages") {
      setSelectAllPages((prev) => ({ ...prev, checked }));
      setPageItems(pageItems.map((page) => ({ ...page, checked })));
    } else {
      const updatePageItem = pageItems.map((page) =>
        page.id === id ? { ...page, checked } : page
      );
      setPageItems(updatePageItem);
    }
  };

  // If any single page is unselected, remove selection of All Pages
  useEffect(() => {
    if (selectAllPages.checked) {
      const allChecked = pageItems.every((page) => page.checked);
      setSelectAllPages((prev) => ({ ...prev, checked: allChecked }));
    }
  }, [pageItems, selectAllPages.checked]);

  return (
    <main>
      <section>
        <InputCheckBox
          title={selectAllPages.title}
          attribute={selectAllPages.id}
          onChange={handleCheckboxChange}
          checked={selectAllPages.checked}
        />
      </section>
      <div className="line" role="seperator"></div>
      <section>
        {pageItems.map(({ id, title, checked }) => (
          <InputCheckBox
            key={id}
            title={title}
            attribute={id}
            checked={checked}
            onChange={handleCheckboxChange}
          />
        ))}
      </section>
      <div className="line" role="separator"></div>
      <section>
        <button type="button">Done</button>
      </section>
    </main>
  );
}

export default App;
