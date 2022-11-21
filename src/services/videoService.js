import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = 'https://sykiwanugavjntexbtyd.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5a2l3YW51Z2F2am50ZXhidHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwMzcxNjMsImV4cCI6MTk4NDYxMzE2M30.23gBUyUtHHmjT55-7HbaV4agnE6SqN-AI7lShnECGog'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return{
        getAllVideos(){
            return supabase.from('video')
                .select('*')
               
        }
    }
}