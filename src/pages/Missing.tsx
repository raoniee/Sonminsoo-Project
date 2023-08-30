import useAxiosPrivate from "../hooks/useAxiosPrivate";
const Missing = () => {
  const axiosPrivate = useAxiosPrivate();
  return (
    <div>
      missing
      <button
        onClick={(e) => {
          e.preventDefault();
          axiosPrivate
            .get("sonminsu-items?page=1&perPage=1")
            .then((res) => console.log(res))
            .catch((err) => {
              console.error(err);
            });
          console.log("test");
        }}
      >
        test
      </button>
    </div>
  );
};
export default Missing;
