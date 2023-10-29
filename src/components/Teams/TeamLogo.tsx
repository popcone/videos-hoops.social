//
import {Img, useVideoConfig, useCurrentFrame, spring} from 'remotion';

// TYPES
type TeamLogo = {
	logo: string;
	size: number;
};

export const TeamLogo: React.FC<TeamLogo> = ({logo, size}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 15,
		from: 7,
	});

	return (
		<div className="logo">
			<Img src={logo} style={{transform: `scale(${scale})`}} height={size} />
		</div>
	);
};
