import Button from "@/components/Button";
import { Input } from "@/components/Input";
import Layout from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import OpenAI from "openai";

import React, { useState, useEffect } from "react";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function ChatAI() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful librarian.",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Layout>
        <h3 className="text-3xl font-semibold ml-3 mb-5">Chat dengan AI</h3>
        <div className="bg-slate-100 rounded-lg p-3 h-full overflow-auto flex flex-col">
          {results.map((result) => (
            <p
              className={clsx(
                "border rounded-xl p-3 mb-4 w-fit",
                result.message.role === "assistant" ? "self-start" : "self-end"
              )}>
              {result.message.content}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="grid grid-flow-row gap-3">
          <Input
            className="grid-cols-9 input-bordered w-full border p-2 rounded-md"
            placeholder="Ketik disini..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            className="grid-cols-3 btn btn-success"
            label={isLoading ? "Proses" : "Kirim"}
            disabled={isLoading}
            aria-disabled={isLoading}
            type="submit"
          />
        </form>
      </Layout>
    </>
  );
}

export default ChatAI;
