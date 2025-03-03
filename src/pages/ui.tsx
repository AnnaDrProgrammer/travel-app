import Button from '../shared/ui/button';

export const UIPage = () => {
  return (
    <>
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
    </>
  );
};
