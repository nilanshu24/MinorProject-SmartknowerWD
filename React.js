const Element = props => {
	return (
		<div
			className={`ft-hover-panel el-globals ${props.className}`}
			style={{ backgroundImage: `url(${props.bgUrl})` }}
		>
			<div className="ft-overlay">

				<TitleLeft
					titleThin={props.subtitle}
					titleBold={props.title}
					headingLevel="h3"
				/>
				<div className="ft-content">
					{props.text && <p>{props.text}</p>}
					{props.linkText && <TextButton as="a" href={props.url ? props.url : '#'}>{props.linkText}</TextButton>}
				</div>

			</div>
		</div>
	)
}

const Layout = () => (
	<div className="row no-gutters">
		<div className="col-lg-4">

			<FeatureHoverPanel
				title="Feature Title"
				subtitle="Subtitle"
				text="Lorem ipsum dolor sit amet, consectetur as adipisicing elit, sed do eiusmod tempor quis incididunt ut labore et dolore magna et."
				linkText="Learn More"
				url="https://google.com"
				bgUrl="https://via.placeholder.com/600"
			/>

		</div>
		<div className="col-lg-4">

			<FeatureHoverPanel
				title="Feature Title"
				subtitle="Subtitle"
				text="Lorem ipsum dolor sit amet, consectetur as adipisicing elit, sed do eiusmod tempor quis incididunt ut labore et dolore magna et."
				linkText="Learn More"
				url="#"
				bgUrl="https://via.placeholder.com/600"
			/>

		</div>
		<div className="col-lg-4">

			<FeatureHoverPanel
				title="Feature Title"
				subtitle="Subtitle"
				text="Lorem ipsum dolor sit amet, consectetur as adipisicing elit, sed do eiusmod tempor quis incididunt ut labore et dolore magna et."
				linkText="Learn More"
				url="#"
				bgUrl="https://via.placeholder.com/600"
			/>

		</div>
	</div>
)