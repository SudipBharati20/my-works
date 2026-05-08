import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.geom.RoundRectangle2D;
import java.util.ArrayList;

public class SubscriptionGUI extends JFrame implements ActionListener {

    // ── Palette (very few colours) ───────────────────────────────
    private static final Color BG        = new Color(0xF5F4F2);   // warm off-white background
    private static final Color PANEL_BG  = Color.WHITE;
    private static final Color BORDER_C  = new Color(0xDDDBD8);
    private static final Color TEXT      = new Color(0x1A1A1A);
    private static final Color MUTED     = new Color(0x888580);
    private static final Color ACCENT    = new Color(0x2B2B2B);   // near-black buttons
    private static final Color ACCENT_HV = new Color(0x484848);
    private static final Color FIELD_BG  = new Color(0xFAF9F7);
    private static final Color OUT_BG    = new Color(0x1C1C1C);   // dark terminal pane
    private static final Color OUT_TEXT  = new Color(0xD4D0CA);
    private static final Color ERR_TEXT  = new Color(0xE07070);

    private static final Font  LABEL_F   = new Font("SansSerif", Font.PLAIN, 12);
    private static final Font  MONO_F    = new Font(Font.MONOSPACED, Font.PLAIN, 12);

    // ── Data ─────────────────────────────────────────────────────
    private final ArrayList<AIModel> plans = new ArrayList<>();

    // ── Input fields ─────────────────────────────────────────────
    private final JTextField tfModelName  = field(16);
    private final JTextField tfPrice      = field(10);
    private final JTextField tfParams     = field(10);
    private final JTextField tfContext    = field(10);
    private final JTextField tfQuota      = field(10);
    private final JTextField tfSlots      = field(10);
    private final JTextField tfIndex       = field(6);
    private final JTextField tfPromptIndex = field(6);
    private final JTextField tfPromptText = field(22);
    private final JTextField tfOutputLen  = field(10);
    private final JTextField tfMemberName = field(16);

    // ── Output area ───────────────────────────────────────────────
    private final JTextArea taOutput = new JTextArea(10, 48);

    // ── Buttons ───────────────────────────────────────────────────
    private final JButton btnAddPersonal = btn("Add Personal Plan");
    private final JButton btnAddPro      = btn("Add Pro Plan");
    private final JButton btnDisplayAll  = btn("Display All");
    private final JButton btnClear       = ghostBtn("Clear");
    private final JButton btnGivePrompt  = btn("Submit Prompt");
    private final JButton btnAddMember   = btn("Add Member");
    private final JButton btnRmvMember   = ghostBtn("Remove Member");
    private final JButton btnCheckType   = ghostBtn("Check Type");
    private final JButton btnBuyPrompts  = ghostBtn("Buy Prompts");

    // ─────────────────────────────────────────────────────────────
    public SubscriptionGUI() {
        super("AI Subscription Manager");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setResizable(false);
        getContentPane().setBackground(BG);
        setLayout(new BorderLayout());

        JPanel wrap = new JPanel(new BorderLayout(12, 12));
        wrap.setBackground(BG);
        wrap.setBorder(new EmptyBorder(16, 16, 16, 16));
        wrap.add(buildHeader(),       BorderLayout.NORTH);
        wrap.add(buildBody(),         BorderLayout.CENTER);
        wrap.add(buildOutputPanel(),  BorderLayout.SOUTH);
        add(wrap);

        for (JButton b : new JButton[]{btnAddPersonal, btnAddPro, btnDisplayAll,
                btnClear, btnGivePrompt, btnAddMember, btnRmvMember,
                btnCheckType, btnBuyPrompts}) {
            b.addActionListener(this);
        }

        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    // ── Header ───────────────────────────────────────────────────
    private JPanel buildHeader() {
        JPanel p = new JPanel(new BorderLayout(0, 6));
        p.setBackground(BG);

        JLabel title = new JLabel("AI Subscription Manager");
        title.setFont(new Font("SansSerif", Font.BOLD, 18));
        title.setForeground(TEXT);

        JLabel sub = new JLabel("Create and manage AI model subscription plans");
        sub.setFont(new Font("SansSerif", Font.PLAIN, 12));
        sub.setForeground(MUTED);

        JPanel textBlock = new JPanel(new GridLayout(2, 1, 0, 2));
        textBlock.setBackground(BG);
        textBlock.add(title);
        textBlock.add(sub);

        JSeparator sep = new JSeparator();
        sep.setForeground(BORDER_C);

        p.add(textBlock, BorderLayout.CENTER);
        p.add(sep,       BorderLayout.SOUTH);
        return p;
    }

    // ── Body: two-column layout ───────────────────────────────────
    private JPanel buildBody() {
        JPanel p = new JPanel(new GridLayout(1, 2, 12, 0));
        p.setBackground(BG);
        p.add(buildPlanCard());
        p.add(buildRightColumn());
        return p;
    }

    // Left column — Plan Details card
    private JPanel buildPlanCard() {
        JPanel card = card();
        card.setLayout(new BorderLayout(0, 10));
        card.add(sectionLabel("Plan Details"), BorderLayout.NORTH);

        JPanel grid = new JPanel(new GridBagLayout());
        grid.setBackground(PANEL_BG);
        GridBagConstraints g = gbc();

        row(grid, g, 0, "Model Name",           tfModelName);
        row(grid, g, 1, "Price  (Rs / 1L tok)", tfPrice);
        row(grid, g, 2, "Parameters  (B)",      tfParams);
        row(grid, g, 3, "Context Window",       tfContext);

        // Divider + type hint: Personal Plan
        g.gridx = 0; g.gridy = 4; g.gridwidth = 2; g.fill = GridBagConstraints.HORIZONTAL;
        g.insets = new Insets(8, 0, 2, 0);
        JSeparator div1 = new JSeparator(); div1.setForeground(BORDER_C);
        grid.add(div1, g);

        g.gridy = 5; g.insets = new Insets(4, 0, 4, 0);
        JLabel lp = new JLabel("Personal Plan");
        lp.setFont(new Font("SansSerif", Font.BOLD, 11)); lp.setForeground(MUTED);
        grid.add(lp, g);

        g.gridwidth = 1; g.insets = new Insets(4, 0, 4, 10); g.fill = GridBagConstraints.NONE;
        row(grid, g, 6, "Prompt Quota", tfQuota);

        // Divider + type hint: Pro Plan
        g.gridx = 0; g.gridy = 7; g.gridwidth = 2; g.fill = GridBagConstraints.HORIZONTAL;
        g.insets = new Insets(10, 0, 2, 0);
        JSeparator div2 = new JSeparator(); div2.setForeground(BORDER_C);
        grid.add(div2, g);

        g.gridy = 8; g.insets = new Insets(4, 0, 4, 0);
        JLabel lpr = new JLabel("Pro Plan");
        lpr.setFont(new Font("SansSerif", Font.BOLD, 11)); lpr.setForeground(MUTED);
        grid.add(lpr, g);

        g.gridwidth = 1; g.insets = new Insets(4, 0, 4, 10); g.fill = GridBagConstraints.NONE;
        row(grid, g, 9, "Team Slots", tfSlots);

        card.add(grid, BorderLayout.CENTER);

        JPanel btns = new JPanel(new FlowLayout(FlowLayout.LEFT, 6, 0));
        btns.setBackground(PANEL_BG);
        btns.add(btnAddPersonal);
        btns.add(btnAddPro);
        btns.add(btnDisplayAll);
        btns.add(btnClear);
        card.add(btns, BorderLayout.SOUTH);

        return card;
    }

    // Right column — Prompt + Team cards stacked
    private JPanel buildRightColumn() {
        JPanel col = new JPanel(new GridLayout(2, 1, 0, 12));
        col.setBackground(BG);

        // Prompt card
        JPanel promptCard = card();
        promptCard.setLayout(new BorderLayout(0, 10));
        promptCard.add(sectionLabel("Submit a Prompt"), BorderLayout.NORTH);

        JPanel pg = new JPanel(new GridBagLayout());
        pg.setBackground(PANEL_BG);
        GridBagConstraints pgc = gbc();
        row(pg, pgc, 0, "Plan Index",    tfPromptIndex);
        row(pg, pgc, 1, "Prompt Text",   tfPromptText);
        row(pg, pgc, 2, "Output Tokens", tfOutputLen);
        promptCard.add(pg, BorderLayout.CENTER);

        JPanel pb = new JPanel(new FlowLayout(FlowLayout.LEFT, 6, 0));
        pb.setBackground(PANEL_BG);
        pb.add(btnGivePrompt);
        pb.add(btnCheckType);
        pb.add(btnBuyPrompts);
        promptCard.add(pb, BorderLayout.SOUTH);

        // Team card
        JPanel teamCard = card();
        teamCard.setLayout(new BorderLayout(0, 10));
        teamCard.add(sectionLabel("Team Management  —  Pro Plan only"), BorderLayout.NORTH);

        JPanel tg = new JPanel(new GridBagLayout());
        tg.setBackground(PANEL_BG);
        GridBagConstraints tgc = gbc();
        row(tg, tgc, 0, "Plan Index",  tfIndex);
        row(tg, tgc, 1, "Member Name", tfMemberName);
        teamCard.add(tg, BorderLayout.CENTER);

        JPanel tb = new JPanel(new FlowLayout(FlowLayout.LEFT, 6, 0));
        tb.setBackground(PANEL_BG);
        tb.add(btnAddMember);
        tb.add(btnRmvMember);
        teamCard.add(tb, BorderLayout.SOUTH);

        col.add(promptCard);
        col.add(teamCard);
        return col;
    }

    // ── Output panel ─────────────────────────────────────────────
    private JPanel buildOutputPanel() {
        JPanel p = new JPanel(new BorderLayout(0, 5));
        p.setBackground(BG);

        JLabel lbl = new JLabel("OUTPUT");
        lbl.setFont(new Font("Monospaced", Font.BOLD, 10));
        lbl.setForeground(MUTED);
        p.add(lbl, BorderLayout.NORTH);

        taOutput.setEditable(false);
        taOutput.setFont(MONO_F);
        taOutput.setBackground(OUT_BG);
        taOutput.setForeground(OUT_TEXT);
        taOutput.setCaretColor(OUT_TEXT);
        taOutput.setSelectionColor(new Color(0x444444));
        taOutput.setBorder(new EmptyBorder(10, 12, 10, 12));
        taOutput.setLineWrap(true);
        taOutput.setWrapStyleWord(true);

        JScrollPane scroll = new JScrollPane(taOutput);
        scroll.setBorder(BorderFactory.createLineBorder(BORDER_C));
        scroll.getViewport().setBackground(OUT_BG);
        p.add(scroll, BorderLayout.CENTER);
        return p;
    }

    // ── Action dispatch ───────────────────────────────────────────
    @Override
    public void actionPerformed(ActionEvent e) {
        Object src = e.getSource();
        if      (src == btnAddPersonal) addPersonalPlan();
        else if (src == btnAddPro)      addProPlan();
        else if (src == btnDisplayAll)  displayAll();
        else if (src == btnClear)       clearFields();
        else if (src == btnGivePrompt)  givePrompt();
        else if (src == btnAddMember)   addTeamMember();
        else if (src == btnRmvMember)   removeTeamMember();
        else if (src == btnBuyPrompts)  buyPrompts();
        else if (src == btnCheckType)   { int i = validPromptIndex(); if (i >= 0) checkPlanType(i); }
    }

    // ── Business logic ────────────────────────────────────────────
    private void addPersonalPlan() {
        try {
            String name  = require(tfModelName, "Model Name");
            double price = parseDouble(tfPrice, "Price");
            int params   = parseInt(tfParams, "Parameters");
            String ctx   = require(tfContext, "Context Window");
            int quota    = parseInt(tfQuota, "Prompt Quota");

            PersonalPlan pp = new PersonalPlan(name, price, params, ctx, quota);
            plans.add(pp);
            print("✓  Personal Plan added at index " + (plans.size() - 1) + "\n\n" + pp.display());
        } catch (InputEx ex) { error(ex.getMessage()); }
    }

    private void addProPlan() {
        try {
            String name  = require(tfModelName, "Model Name");
            double price = parseDouble(tfPrice, "Price");
            int params   = parseInt(tfParams, "Parameters");
            String ctx   = require(tfContext, "Context Window");
            int slots    = parseInt(tfSlots, "Team Slots");

            ProPlan pro = new ProPlan(name, price, params, ctx, slots);
            plans.add(pro);
            print("✓  Pro Plan added at index " + (plans.size() - 1) + "\n\n" + pro.display());
        } catch (InputEx ex) { error(ex.getMessage()); }
    }

    private void displayAll() {
        if (plans.isEmpty()) { print("No plans added yet."); return; }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < plans.size(); i++) {
            if (i > 0) sb.append("\n");
            sb.append("── Index ").append(i).append(" ──────────────────────\n");
            sb.append(plans.get(i).display()).append("\n");
        }
        print(sb.toString().trim());
    }

    private void clearFields() {
        for (JTextField tf : new JTextField[]{tfModelName, tfPrice, tfParams, tfContext,
                tfQuota, tfSlots, tfPromptText, tfOutputLen, tfMemberName, tfIndex, tfPromptIndex}) {
            tf.setText("");
        }
        taOutput.setText("");
        taOutput.setForeground(OUT_TEXT);
    }

    private void givePrompt() {
        try {
            int idx      = validPromptIndex(); if (idx < 0) return;
            String text  = require(tfPromptText, "Prompt Text");
            int outLen   = parseInt(tfOutputLen, "Output Tokens");
            print(plans.get(idx).enterPrompt(text, outLen));
        } catch (InputEx ex) { error(ex.getMessage()); }
    }

    private void addTeamMember() {
        try {
            int idx = validIndex(); if (idx < 0) return;
            String name = require(tfMemberName, "Member Name");
            AIModel m = plans.get(idx);
            if (m instanceof ProPlan)
                print(((ProPlan) m).addTeamMember(name));
            else
                error("Index " + idx + " is a Personal Plan.\nTeam management is only available on Pro Plans.");
        } catch (InputEx ex) { error(ex.getMessage()); }
    }

    private void removeTeamMember() {
        try {
            int idx = validIndex(); if (idx < 0) return;
            String name = require(tfMemberName, "Member Name");
            AIModel m = plans.get(idx);
            if (m instanceof ProPlan)
                print(((ProPlan) m).removeTeamMember(name));
            else
                error("Index " + idx + " is not a Pro Plan.");
        } catch (InputEx ex) { error(ex.getMessage()); }
    }

    private void buyPrompts() {
        try {
            int idx    = validPromptIndex(); if (idx < 0) return;
            int amount = parseInt(tfQuota, "Prompt Quota (amount to add)");
            AIModel m  = plans.get(idx);
            if (m instanceof PersonalPlan)
                print(((PersonalPlan) m).buyPrompts(amount));
            else
                error("Index " + idx + " is a Pro Plan.\nOnly Personal Plans have a prompt quota.");
        } catch (InputEx ex) { error(ex.getMessage()); }
    }

    private void checkPlanType(int idx) {
        AIModel m = plans.get(idx);
        String type = (m instanceof PersonalPlan) ? "Personal Plan"
                    : (m instanceof ProPlan)       ? "Pro Plan"
                    : "Unknown";
        print("Index " + idx + "  →  " + type + "\n\n" + m.display());
    }

    // ── Index validation ──────────────────────────────────────────
    private int validIndex() {
        String raw = tfIndex.getText().trim();
        int idx;
        try { idx = Integer.parseInt(raw); }
        catch (NumberFormatException ex) { error("Plan Index must be a whole number."); return -1; }
        if (plans.isEmpty())             { error("No plans have been added yet."); return -1; }
        if (idx < 0 || idx >= plans.size()) {
            error("Index " + idx + " is out of range.  Valid: 0 – " + (plans.size() - 1));
            return -1;
        }
        return idx;
    }

    private int validPromptIndex() {
        String raw = tfPromptIndex.getText().trim();
        int idx;
        try { idx = Integer.parseInt(raw); }
        catch (NumberFormatException ex) { error("Plan Index must be a whole number."); return -1; }
        if (plans.isEmpty())             { error("No plans have been added yet."); return -1; }
        if (idx < 0 || idx >= plans.size()) {
            error("Index " + idx + " is out of range.  Valid: 0 – " + (plans.size() - 1));
            return -1;
        }
        return idx;
    }

    // ── Input helpers ─────────────────────────────────────────────
    private String require(JTextField tf, String name) throws InputEx {
        String v = tf.getText().trim();
        if (v.isEmpty()) throw new InputEx(name + " cannot be empty.");
        return v;
    }
    private int parseInt(JTextField tf, String name) throws InputEx {
        try { return Integer.parseInt(tf.getText().trim()); }
        catch (NumberFormatException ex) { throw new InputEx(name + " must be a whole number."); }
    }
    private double parseDouble(JTextField tf, String name) throws InputEx {
        try { return Double.parseDouble(tf.getText().trim()); }
        catch (NumberFormatException ex) { throw new InputEx(name + " must be a number."); }
    }

    private static class InputEx extends Exception {
        InputEx(String m) { super(m); }
    }

    // ── Output helpers ────────────────────────────────────────────
    private void print(String msg) {
        taOutput.setForeground(OUT_TEXT);
        taOutput.setText(msg);
    }
    private void error(String msg) {
        taOutput.setForeground(ERR_TEXT);
        taOutput.setText("Error  —  " + msg);
    }

    // ── Widget factory helpers ────────────────────────────────────
    private static JTextField field(int cols) {
        JTextField tf = new JTextField(cols);
        tf.setFont(LABEL_F);
        tf.setBackground(FIELD_BG);
        tf.setForeground(TEXT);
        tf.setCaretColor(TEXT);
        tf.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(BORDER_C),
            new EmptyBorder(4, 7, 4, 7)));
        return tf;
    }

    /** Filled dark button */
    private static JButton btn(String text) {
        JButton b = new JButton(text) {
            @Override protected void paintComponent(Graphics g) {
                Graphics2D g2 = (Graphics2D) g.create();
                g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
                g2.setColor(getModel().isRollover() ? ACCENT_HV : ACCENT);
                g2.fill(new RoundRectangle2D.Float(0, 0, getWidth(), getHeight(), 6, 6));
                g2.dispose();
                super.paintComponent(g);
            }
        };
        styleBtn(b);
        b.setForeground(Color.WHITE);
        return b;
    }

    /** Outlined ghost button */
    private static JButton ghostBtn(String text) {
        JButton b = new JButton(text) {
            @Override protected void paintComponent(Graphics g) {
                Graphics2D g2 = (Graphics2D) g.create();
                g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
                g2.setColor(getModel().isRollover() ? new Color(0xECEAE6) : PANEL_BG);
                g2.fill(new RoundRectangle2D.Float(0, 0, getWidth(), getHeight(), 6, 6));
                g2.setColor(BORDER_C);
                g2.draw(new RoundRectangle2D.Float(0.5f, 0.5f, getWidth() - 1, getHeight() - 1, 6, 6));
                g2.dispose();
                super.paintComponent(g);
            }
        };
        styleBtn(b);
        b.setForeground(TEXT);
        return b;
    }

    private static void styleBtn(JButton b) {
        b.setFont(new Font("SansSerif", Font.PLAIN, 12));
        b.setOpaque(false);
        b.setContentAreaFilled(false);
        b.setBorderPainted(false);
        b.setFocusPainted(false);
        b.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        b.setBorder(new EmptyBorder(6, 13, 6, 13));
    }

    private static JPanel card() {
        JPanel p = new JPanel();
        p.setBackground(PANEL_BG);
        p.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(BORDER_C),
            new EmptyBorder(14, 16, 14, 16)));
        return p;
    }

    private static JLabel sectionLabel(String text) {
        JLabel l = new JLabel(text.toUpperCase());
        l.setFont(new Font("SansSerif", Font.BOLD, 10));
        l.setForeground(MUTED);
        l.setBorder(new EmptyBorder(0, 0, 4, 0));
        return l;
    }

    private static GridBagConstraints gbc() {
        GridBagConstraints g = new GridBagConstraints();
        g.anchor = GridBagConstraints.WEST;
        g.insets = new Insets(4, 0, 4, 10);
        return g;
    }

    private static void row(JPanel p, GridBagConstraints g, int row, String label, JComponent field) {
        g.gridwidth = 1; g.fill = GridBagConstraints.NONE; g.weightx = 0;
        g.gridx = 0; g.gridy = row;
        JLabel l = new JLabel(label);
        l.setFont(LABEL_F); l.setForeground(MUTED);
        p.add(l, g);
        g.gridx = 1; g.fill = GridBagConstraints.HORIZONTAL; g.weightx = 1.0;
        p.add(field, g);
        g.weightx = 0;
    }

    // ── Entry point ───────────────────────────────────────────────
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            try { UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName()); }
            catch (Exception ignored) {}
            new SubscriptionGUI();
        });
    }
}
