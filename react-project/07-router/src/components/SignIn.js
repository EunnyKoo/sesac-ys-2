import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("성공", data);
  };

  const onInvalid = (error) => {
    console.log("실패", error);
  };

  return (
    <>
      <h4>실습하기</h4>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        아이디:{" "}
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", {
            required: "아이디는 필수값입니다.",
          })}
        />
        {errors.ID?.message}
        <br />
        나이:{" "}
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "나이는 필수값입니다.",
            validate: (value) => {
              const ageValue = parseInt(value);
              if (ageValue <= 0) {
                return "나이를 제대로 입력해주세요.";
              }
              return true;
            },
          })}
        />
        {errors.age?.message}
        <br />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
