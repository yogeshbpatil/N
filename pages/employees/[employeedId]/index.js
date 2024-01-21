import { useRouter } from "next/router"
function employeeDetails() {
    const router = useRouter();
    const EmpId = router.query.employeeId;
  return (
    <div>
        <h1>Employee Details Of =  {EmpId}</h1>
    </div>
  )
}

export default employeeDetails