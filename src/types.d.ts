interface BlogResponse {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: Blog[];
}

interface Blog {
  user_id: number;
  title: string;
  content_text: string;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
  category: string;
  updated_at: string;
}
