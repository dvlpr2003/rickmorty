import { filloutForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fillOut = () => {
  return (
    <form action={filloutForm}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="number" name="age" placeholder="Age" />
      <Input type="text" name="address" placeholder="Address" />

      <select name="isgraduate">
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
      <Button type="submit">Update details</Button>
    </form>
  );
};

export default fillOut;
