import {useRouter} from "next/router"
function reviewDetails() {
    const router = useRouter();
    const {employeedId, reviewId} = router.query;
  return (
    <div>
        <h1>
            Review {reviewId} for Employee {employeedId}
        </h1>
    </div>
  )
}

export default reviewDetails