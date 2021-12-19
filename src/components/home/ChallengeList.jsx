import React from "react";

import { Grid } from "@mui/material";
import ChallengeCard from "./ChallengeCard";

const ChallengeList = ({ ...props }) => {
	return (
		<Grid container spacing={4}>
			{props.list.map((challenge) => (
				<Grid item xs={4} key={challenge.challengeId}>
					<ChallengeCard
						key={challenge.challengeId}
						id={challenge.challengeId}
						title={challenge.title}
						category={challenge.category.name}
						locationType={challenge.locationType}
						startDate={challenge.challengeStartDate}
						endDate={challenge.challengeEndDate}
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
