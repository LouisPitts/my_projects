function App() {
    return (
      <div>
        <Person
          name="Louis"
          age={38}
          hobbies={["Games", "swimming", "Reading manga"]}
        />
        <Person name="Scott"
         age={34}
         hobbies={["games", "Working", "sleeping"]} />
        <Person
          name="Stephanie"
          age={10}
          hobbies={["shopping", "Make-up", "Working"]}
        />
      </div>
    );
  }