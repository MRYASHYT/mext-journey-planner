import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '@/hooks/useAuth';
import { LogIn, LogOut, UserPlus, Cloud, CloudOff, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const Auth = () => {
    const { user, isAuthenticated, signOut, loading: authLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                toast({ title: "Welcome back!", description: "You are now logged in and synced." });
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                toast({ title: "Welcome!", description: "Account created. Please check your email to verify." });
            }
        } catch (error: any) {
            let errorMsg = error.message;
            if (errorMsg.includes("Email not confirmed")) {
                errorMsg = "Please verify your email address. Check your inbox (and spam folder) for the confirmation link sent by Supabase.";
            }
            toast({
                title: "Authentication Error",
                description: errorMsg,
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) {
        return (
            <div className="flex items-center justify-center p-4">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
        );
    }

    if (isAuthenticated) {
        return (
            <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <Cloud className="w-4 h-4 text-secondary" />
                    <span>Sync Active</span>
                </div>
                <div className="text-xs text-muted-foreground truncate font-mono">
                    {user?.email}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs h-8 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                    onClick={signOut}
                >
                    <LogOut className="w-3 h-3 mr-2" />
                    Logout
                </Button>
            </div>
        );
    }

    return (
        <div className="p-4 bg-muted/30 border border-border rounded-xl space-y-3 glass-card">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CloudOff className="w-4 h-4" />
                <span>Sync Disabled (Local Only)</span>
            </div>

            <form onSubmit={handleAuth} className="space-y-3">
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-8 text-xs bg-background/50 border-border/50 focus:border-primary/50"
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-8 text-xs bg-background/50 border-border/50 focus:border-primary/50"
                    required
                />
                <Button
                    type="submit"
                    size="sm"
                    className="w-full text-xs h-8 bg-primary hover:bg-primary/90 transition-all shadow-sm"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="w-3 h-3 animate-spin mr-2" />
                    ) : isLogin ? (
                        <LogIn className="w-3 h-3 mr-2" />
                    ) : (
                        <UserPlus className="w-3 h-3 mr-2" />
                    )}
                    {isLogin ? 'Login' : 'Sign Up'}
                </Button>
            </form>

            <button
                className="w-full text-[10px] text-center text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
        </div>
    );
};
