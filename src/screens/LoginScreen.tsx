import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  EyeIcon,
  EyeOffIcon,
  AppleIcon,
  GoogleIcon,
  CoversLogo,
} from '../components/Icons';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Sign in:', { displayName, password });
    }, 1500);
  };

  const handleAppleSignIn = () => {
    console.log('Apple sign in');
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <CoversLogo size={48} />
              <Text style={styles.logoText}>COVERS</Text>
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, isLogin && styles.activeTab]}
                onPress={() => setIsLogin(true)}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, isLogin && styles.activeTabText]}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, !isLogin && styles.activeTab]}
                onPress={() => setIsLogin(false)}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <Input
                label="Display name"
                placeholder="Enter display name"
                value={displayName}
                onChangeText={setDisplayName}
                autoComplete="username"
                returnKeyType="next"
              />
              <Input
                label="Password"
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoComplete="password"
                returnKeyType="done"
                onSubmitEditing={handleSignIn}
                rightIcon={
                  showPassword ? (
                    <EyeOffIcon size={20} color="#9CA3AF" />
                  ) : (
                    <EyeIcon size={20} color="#9CA3AF" />
                  )
                }
                onRightIconPress={() => setShowPassword(!showPassword)}
              />

              <Button
                title="Sign in"
                onPress={handleSignIn}
                variant="primary"
                loading={isLoading}
                disabled={!displayName || !password}
              />

              {/* Forgot Password */}
              <View style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot your </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotLink}>display name</Text>
                </TouchableOpacity>
                <Text style={styles.forgotText}> or </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotLink}>password</Text>
                </TouchableOpacity>
                <Text style={styles.forgotText}>?</Text>
              </View>

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Sign In */}
              <View style={styles.socialContainer}>
                <Button
                  title="Continue with Apple"
                  onPress={handleAppleSignIn}
                  variant="social"
                  leftIcon={<AppleIcon size={20} />}
                />
                <Button
                  title="Continue with Google"
                  onPress={handleGoogleSignIn}
                  variant="social"
                  leftIcon={<GoogleIcon size={20} />}
                />
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                By continuing, you agree to the{' '}
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.footerLink}>Terms of Service</Text>
                </TouchableOpacity>
                {' and '}
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.footerLink}>Privacy Policy</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1F2E',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 12,
    letterSpacing: 2,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  activeTab: {
    borderColor: '#FF5722',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  form: {
    flex: 1,
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  forgotLink: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#374151',
  },
  dividerText: {
    fontSize: 12,
    color: '#6B7280',
    marginHorizontal: 16,
    fontWeight: '500',
  },
  socialContainer: {
    gap: 12,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  footerLink: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
});
