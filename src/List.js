import { memo, useCallback, useState } from 'react';

const ListItem = memo(({ items, onClick }) => {
	return (
		<ul className="List">
			{items.map((item) => {
				return (
					<li
						key={item.name}
						className={`List__item List__item--${item.color}
						`}
						onClick={onClick}
						data-checked="false"
					>
						{console.log('List')}
						{item.name}
					</li>
				);
			})}
		</ul>
	);
});

const List = ({ items }) => {
	console.log('rendered');
	const [selectedItem, setSelectedItem] = useState([]);

	const clickHandler = useCallback((e) => {
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
	}, []);

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

			<ListItem items={items} onClick={clickHandler} />
		</>
	);
};

export default List;
