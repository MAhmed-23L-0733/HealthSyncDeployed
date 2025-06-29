
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uejipgyylrhkhwzsqgmg.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlamlwZ3l5bHJoa2h3enNxZ21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNDQwMzEsImV4cCI6MjA2NjcyMDAzMX0.hFHRGPweCPidrUvge5N2_uaAlmF0LJt4bs86Z1dkBaE';
export const supabase = createClient(supabaseUrl, supabaseKey)