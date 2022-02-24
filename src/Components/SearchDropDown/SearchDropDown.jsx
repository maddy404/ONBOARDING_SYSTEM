import React, { useState, useRef } from "react";
import { useBtnContext } from "../../contexts";
export const SearchDropDown = ({ Logistics }) => {
  const [isShowAddList, setShowAddList] = useState(false);
  const [addList, setAddList] = useState([]);
  const [inputStr, setInputStr] = useState();
  const { setIsBtnDisabled } = useBtnContext();

  const [selectedLogistic, setSelectedLogistic] = useState("");
  const logisticsRef = useRef;
  //Fix this function
  const searchHandler = (searchString) => {
    if (searchString) {
      const searchStringInLower = searchString.toLowerCase();
      const filterData = Logistics.filter((item) => {
        return item.toLowerCase().includes(searchStringInLower);
      });
      console.log(filterData);
      if (filterData.length > 0) {
        const sort = filterData.sort();
        const split = sort[0];
        setSelectedLogistic(split);
        setShowAddList(true);
      } else {
        setSelectedLogistic(null);
        setShowAddList(false);
      }
    } else {
      setSelectedLogistic(null);
      setShowAddList(false);
    }
  };

  const addListHandler = () => {
    setAddList((prev) => {
      return [...prev, selectedLogistic];
    });

    if (addList) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
    setInputStr("");
  };

  const addListToInput = () => {
    setInputStr(selectedLogistic);
    setShowAddList(false);
  };

  const removeTargetItem = (itemToRemove) => {
    if (itemToRemove === "lengthOne") {
      setAddList([]);
      setIsBtnDisabled(true);
    } else {
      const remainingItems = addList.filter((item) => item !== itemToRemove);
      setAddList(remainingItems);
    }
  };
  return (
    <div className="add">
      <div className="add__search">
        <span className="add__warning">This provider has been added</span>
        <input
          type="text"
          placeholder="Search for consumer"
          className="add__input"
          value={inputStr}
          onChange={(e) => {
            searchHandler(e.target.value);
          }}
        />

        <button className="add__circle circle" onClick={addListHandler}>
          <svg className="add__icon">
            <use xlinkHref="assets/svg/sprite.svg#plus-2"></use>
          </svg>
        </button>
        <ul
          className={`add__list`}
          style={{
            display: `${isShowAddList ? "block" : "none"}`,
            maxHeight: "195px",
            padding: "10px",
          }}
          onClick={addListToInput}
        >
          {selectedLogistic}
        </ul>
      </div>
      <ul id="target__list">
        {addList?.length > 1 &&
          addList?.map((item, index) => {
            return (
              <li
                className="target__item"
                key={index}
                onClick={() => removeTargetItem(item)}
              >
                {item}
                <button className="target__btn circle">
                  <svg className="target__icon">
                    <use xlinkHref="assets/svg/sprite.svg#close"></use>
                  </svg>
                </button>
              </li>
            );
          })}

        {addList.length === 1 && (
          <li
            className="target__item"
            onClick={() => removeTargetItem("lengthOne")}
          >
            {addList}
            <button className="target__btn circle">
              <svg className="target__icon">
                <use xlinkHref="assets/svg/sprite.svg#close"></use>
              </svg>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
