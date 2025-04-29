import { IPost } from "../types";
import { Card, CardContent, Typography } from "@mui/material";

interface PostDetailProps {
    post: IPost;
}

const PostDetail = ({ post }: PostDetailProps) => {
    return (
        <Card elevation={2} sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {post.email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {post.content}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {post.userId}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {post.createdAt}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PostDetail;