function App(){
return(
    <div>
      <Tweet
        name="Louis Pitts"
        username="LPII"
        date={new Date().toDateString()}
        message="Not a fan of tweets"
      />
      <Tweet
        name="Scott Smith"
        username="Smithy"
        date={new Date().toDateString()}
        message="Blacksmithing in D4"
      />
      <Tweet
        name="Stephanie Pitts"
        username="BestShopper"
        date={new Date().toDateString()}
        message="Time for Shopping"
      />
    </div>
);
}