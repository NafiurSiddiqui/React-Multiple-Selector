import { useState } from 'react';

const List = ({ items }) => {
	const [selectedItem, setSelectedItem] = useState([]);

	const clickHandler = (e) => {
		const target = e.target;
		const targetName = e.target.innerHTML;

		if (target.getAttribute('data-checked') === 'false') {
			//set button highlighter
			target.setAttribute('data-checked', true);
			target.classList.add('selected');
			//set heading
			setSelectedItem((item) => [...item, targetName]);
		} else {
			target.setAttribute('data-checked', false);
			target.classList.remove('selected');
			setSelectedItem((item) => item.filter((item) => item !== targetName));
		}
	};

	console.log(selectedItem);

	return (
		<>
			{selectedItem.length > 0 ? (
				selectedItem.map((itemName) => {
					return (
						<span key={itemName} className="List__item-name">
							{itemName}
						</span>
					);
				})
			) : (
				<h2>Such an Empty Fruit Basket :/</h2>
			)}
			<ul className="List">
				{items.map((item) => {
					return (
						<li
							key={item.name}
							className={`List__item List__item--${item.color}
						`}
							onClick={clickHandler}
							data-checked="false"
						>
							{item.name}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default List;
