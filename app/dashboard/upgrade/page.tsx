"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";

const UpgradePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("personal");
  return (
    <div>
      <h2 className="w-full flex justify-center text-4xl font-bold">
        Upgrade your plan
      </h2>

      <Tabs defaultValue="personal">
        <div className="w-full flex justify-center mt-10">
          <TabsList className="grid w-[250px] grid-cols-2 p-1 border bg-slate-200 dark:bg-slate-800 rounded-full">
            <TabsTrigger
              value="personal"
              className={`p-2 ${
                selectedCategory === "personal" &&
                "bg-white dark:bg-slate-950 rounded-full"
              }`}
              onClick={() => setSelectedCategory("personal")}
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="business"
              className={`p-2 ${
                selectedCategory === "business" &&
                "bg-white dark:bg-slate-950 rounded-full"
              }`}
              onClick={() => setSelectedCategory("business")}
            >
              Business
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="w-full flex justify-center mt-10">
          <TabsContent value="personal">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card className="p-5">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Free Plan
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-normal">$0 </p>
                      <p>/month</p>
                    </div>
                    <p className="mt-1">
                      Ideal for individuals exploring basic functionality.
                    </p>
                  </CardDescription>
                </CardHeader>
                <Button className="w-full py-1" disabled>
                  Your current plan
                </Button>
                <CardContent className="mt-5 text-gray-800 dark:text-gray-400">
                  <p>✔ Generate upto 5 courses</p>
                  <p>✔ Access to public templates</p>
                  <p>✔ Community support</p>
                  <p className="text-gray-400 dark:text-gray-800">
                    ✘ Export courses in PDF format
                  </p>
                  <p className="text-gray-400 dark:text-gray-800">
                    ✘ Priority email support
                  </p>
                </CardContent>
              </Card>
              <Card className="p-5">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Pro Plan</CardTitle>
                  <CardDescription>
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-normal">$29 </p>
                      <p>/month</p>
                    </div>
                    <p className="mt-1">
                      Perfect for professionals looking for customization and
                      efficiency.
                    </p>
                  </CardDescription>
                </CardHeader>
                <Button className="w-full py-1">Select Plan</Button>
                <CardContent className="mt-5 text-gray-800 dark:text-gray-400">
                  <p>✔ All Free Plan features, plus:</p>
                  <p>✔ 50 course generations</p>
                  <p>✔ Custom course branding</p>
                  <p>✔ Export courses in PDF format</p>
                  <p>✔ Priority email support</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="business">
            <Card className="p-5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  Enterprise Plan
                </CardTitle>
                <CardDescription>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-normal">$49 </p>
                    <p>/month</p>
                  </div>
                  <p className="mt-1">
                    Designed for organizations with extensive needs.
                  </p>
                </CardDescription>
              </CardHeader>
              <Button className="w-full py-1">Select Plan</Button>
              <CardContent className="mt-5 text-gray-800 dark:text-gray-400">
                <p>✔ All Pro Plan features, plus:</p>
                <p>✔ Unlimited course generations</p>
                <p>✔ Access to exclusive AI-powered course suggestions</p>
                <p>✔ Dedicated account manager</p>
                <p>✔ SLA-backed priority support</p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default UpgradePage;
