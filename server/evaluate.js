import { checklist_rules } from "./rules.js";
import fetchdata from "./apiCall.js";

export const evaluate = (data) => {
  if (!data) {
    console.error("Data is undefined");
    return;
  }

  const result = checklist_rules.map((items) => {
    return { rule: items.rule, status: items.status(data) };
  });

  return result;
};

export const evaluateController = async (req, res) => {
  try {
    const data = await fetchdata();
    const result = evaluate(data);
    res.json(result);
    console.log(result);
  } catch (error) {
    console.error("Error fetching or evaluating data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
