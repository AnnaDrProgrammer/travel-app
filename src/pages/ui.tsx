import Button from '../shared/ui/button';
import { Typography } from '../shared/ui/typography';

export const UIPage = () => {
  return (
    <>
      <div>
        <Button view="primary" size="m">
          Browse Trip
        </Button>
        <Button view="primary" size="l">
          View Trip Details
        </Button>
        <Button view="secondaryDark" size="smallest">
          Home
        </Button>
        <Button view="secondaryDark" size="xxs">
          Contact us
        </Button>
        <Button view="secondaryLight" size="s">
          See all
        </Button>
        <Button view="secondaryLight" size="xs">
          View All Trips
        </Button>
      </div>

      <div>
        <Typography.Title variant="h1">
          Life Is Adventure Make The Best Of It
        </Typography.Title>

        <Typography.Title variant="h2">
          Life Is Adventure Make The Best Of It
        </Typography.Title>
        <Typography.Title variant="h3">
          Life Is Adventure Make The Best Of It
        </Typography.Title>
        <Typography.Text variant="p1">
          Life Is Adventure Make The Best Of It
        </Typography.Text>
        <Typography.Text variant="p5">
          Life Is Adventure Make The Best Of It
        </Typography.Text>
        <Typography.Text variant="p8">
          Life Is Adventure Make The Best Of It
        </Typography.Text>
        <Typography.Text variant="p13">
          Life Is Adventure Make The Best Of It
        </Typography.Text>
      </div>
    </>
  );
};
