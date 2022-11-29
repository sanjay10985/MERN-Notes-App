import NoteContext from "./noteContext";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  const serverNotes = [
    {
      _id: "6386083baa58856a5d255092",
      title: "Hello tomar",
      description: "my name is sanjay",
      __v: 0,
    },
    {
      _id: "63860bd23af2116b029eaecb",
      title: "hello baba ramdev speaking",
      description: "yes ramdev sir",
      __v: 0,
    },
    {
      _id: "63861ac1482110bf03a5bc51",
      title: "Why am i creaging this app",
      description: "may be to learn this",
      __v: 0,
    },
    {
      _id: "63861ada482110bf03a5bc53",
      title: "am i learning something in real",
      description: "i THink so",
      __v: 0,
    },
    {
      _id: "63861ade482110bf03a5bc55",
      title: "am i learning something in real",
      description: "i THink so",
      __v: 0,
    },
  ];
  return(
    <NoteContext.Provider value={{notes}}>
        {props.NoteContextchildren}
    </NoteContext.Provider>
  )
};


