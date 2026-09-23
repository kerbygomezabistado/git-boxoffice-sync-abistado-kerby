### Lab Reflection Questions

#### 1. Walk through the final `calculateTicketPrice` function and name which contributor's change is responsible for each part.
* **Clone A (Contributor 1):** Responsible for the conditional evaluation block adding a 10% discount for orders containing 5 or more tickets.
* **Clone B (Contributor 2):** Responsible for changing the mathematical formatting engine logic to switch from truncation blocks to explicit price rounding.
* **Clone C (Contributor 3):** Responsible for introducing the input parameter structures that filter seating types to apply a 50% VIP surcharge.
* **Clone A (Final pass):** Responsible for inserting the logic processing statement that subtracts a flat \$10 discount across the aggregate order total.

#### 2. Compare Task 3's two-way conflict to Task 5's three-way conflict — what got harder with a third line of work?
Task 3's conflict was straightforward because it only required blending two different code lines hitting a single spot. Task 5's three-way conflict became much more complicated because Clone C had to resolve code that had completely shifted and rewritten itself based on Clone A and Clone B's previous merge. Instead of looking at code in its original form, the developer had to carefully piece together three separate features simultaneously without breaking how the first two features already worked with each other.

#### 3. Task 6's flat \$10 discount changed the expected result of tests unrelated to your change (the group-discount and VIP tests). Why, and what does that tell you about "isolated" changes in shared code?
* **Why:** The flat \$10 deduction changed the final math calculations across all test scenarios. Even if a test was only checking a VIP surcharge or a group discount ratio, the test still evaluated the final aggregate total price, which was now universally \$10 lower.
* **What it tells us:** This shows that code changes are rarely completely "isolated" when they touch a core shared function. Modifying a shared foundational system can cause unexpected side effects down the line, which is why running full regression tests is essential every single time code is updated.

#### 4. If this were a real team of three, what one process change would have prevented all three rejected pushes?
The team should adopt a structured **Pull Request (PR) workflow with Trunk-Based Development**, paired with a strict local protocol to pull and rebase before pushing code. Instead of pushing changes directly into one raw shared branch, teammates should work on small, independent branch lines, frequently integrate remote updates using `git pull --rebase`, and use automated testing tools to flag conflicts on the remote server before a local push gets rejected.
