import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ftrbvsfqeggjqkvgxyzy.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0cmJ2c2ZxZWdnanFrdmd4eXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NDIwMDAsImV4cCI6MjAxNjQxODAwMH0.2Cbfdgc4NW59eIyqKaQDyW35W_5u7qNnCAE8Ub_C89k'
console.log(supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
