import React from "react";

import { Grid } from "@mui/material";
import ChallengeCard from "./ChallengeCard";

const ChallengeList = () => {
	const [list, setList] = useState([]);

	const fetchChallenges = async () => {
		try {
			const { data } = await axios.get("/challenges?kind=All");
			setList(data);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		fetchChallenges();
	}, []);

	console.log(list);

	return (
		<Grid container spacing={4}>
			{props.challenges.map((challenge) => (
				<Grid item xs={4} key={challenge.challengeId}>
					<ChallengeCard
						key={challenge.challengeId}
						challengeId={challenge.challengeId}
						title={challenge.title}
						category={challenge.category.name}
						locationType={challenge.locationType}
						challengeStartDate={challenge.challengeStartDate}
						challengeEndDate={challenge.challengeEndDate}
						imgUrl={challenge.imgUrl}
						limitPerson={challenge.limitPerson}
						participants={challenge.participants}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default ChallengeList;
