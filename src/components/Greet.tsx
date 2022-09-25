type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` Yoroshiku! ${props.name} sama, you have ${props.messageCount}
        notifications`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;
