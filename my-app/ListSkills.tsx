import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ListSkills() {
  const [skills, setSkills] = useState<string[]>(['First Skill', 'Second Skill', 'Third Skill']);
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    const trimmedSkill = skillInput.trim();

    if (!trimmedSkill) {
      return;
    }

    setSkills((currentSkills) => [...currentSkills, trimmedSkill]);
    setSkillInput('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.banner} resizeMode="cover" />
      <Text style={styles.title}>List your skills!</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Your skills"
          value={skillInput}
          onChangeText={setSkillInput}
        />
        <Pressable style={styles.addButton} onPress={addSkill}>
          <Text style={styles.addButtonText}>ADD SKILL</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.list}>
        {skills.map((skill, index) => (
          <Text key={`${skill}-${index}`} style={styles.skillText}>
            {skill}
          </Text>
        ))}
        {skills.length === 0 && <Text style={styles.empty}>No skills yet.</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 18, paddingTop: 78, backgroundColor: '#f4f4f4' },
  banner: { width: '100%', height: 96, marginBottom: 18 },
  title: { color: '#7a117c', fontSize: 25, fontWeight: '700', marginBottom: 10, textAlign: 'center' },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 18, marginBottom: 8 },
  input: { flex: 1, height: 43, borderWidth: 1, borderColor: '#d6d6d6', paddingHorizontal: 10, backgroundColor: '#ffffff', fontSize: 14 },
  addButton: { alignItems: 'center', backgroundColor: '#2099dc', justifyContent: 'center', minHeight: 43, paddingHorizontal: 12 },
  addButtonText: { color: '#ffffff', fontSize: 13, fontWeight: '700' },
  list: { flex: 1 },
  skillText: { borderBottomColor: '#bdbdbd', borderBottomWidth: 1, color: '#303030', fontSize: 14, paddingVertical: 7 },
  empty: { color: '#6b7280', fontSize: 14, marginTop: 16, textAlign: 'center' },
});