import { useForm } from "react-hook-form";

export default function SignUp() {
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
      <h4>react hook form 테스트</h4>
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
        이름:{" "}
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수값입니다.",
            minLength: {
              value: 2,
              message: "이름은 두 글자 이상 입력해야 합니다.",
            },
          })}
        />
        {errors.username?.message}
        <br />
        이메일:{" "}
        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수값입니다.",
            validate: (v) =>
              v.includes("gmail.com") || "gmail로만 가입이 가능합니다.",
          })}
        />
        {errors.email?.message}
        <br />

        성별:
        <label htmlFor="gender-men">
          남
          <input type="radio" value="남" {...register("gender", { required: '성별은 필수값입니다.' })} />
        </label>
        <label htmlFor="gender-women">
          여
          <input type="radio" value="여" {...register("gender", { required: '성별은 필수값입니다.' })} />
        </label>
        {errors.gender?.message}
        <br /> 
        
        <select {...register("취미", {required: '취미는 필수값입니다.'})}>
            <option value="lego">레고</option>
            <option value="soccer">축구</option>
        </select>
        
        <br />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
