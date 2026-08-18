import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<div className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-150 transition-all duration-200 group">
			<div className="sm:w-32 text-xs font-medium text-zinc-400 pt-1">
				{date}
			</div>

			<Link to={link} className="flex-1 block">
				<h2 className="text-lg font-bold text-zinc-800 group-hover:text-teal-600 transition-colors">
					{title}
				</h2>
				<p className="mt-2 text-sm text-zinc-600 leading-relaxed">
					{description}
				</p>
				<div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 group-hover:gap-2.5 transition-all">
					<span>Read Article</span>
					<FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
				</div>
			</Link>
		</div>
	);
};

export default Article;
