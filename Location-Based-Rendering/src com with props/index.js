import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
const App = () => {
	return (
		<div>
			<ApprovalCard>
				<CommentDetails
					name={Faker.internet.userName()}
					avatar={Faker.image.avatar()}
					comment={Faker.lorem.words()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					name={Faker.internet.userName()}
					avatar={Faker.image.avatar()}
					comment={Faker.lorem.words()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					name={Faker.internet.userName()}
					avatar={Faker.image.avatar()}
					comment={Faker.lorem.words()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
