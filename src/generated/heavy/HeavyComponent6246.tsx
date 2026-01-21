'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6246<T> = T extends (infer U)[]
  ? DeepReadonlyArray6246<U>
  : T extends object
  ? DeepReadonlyObject6246<T>
  : T;

interface DeepReadonlyArray6246<T> extends ReadonlyArray<DeepReadonly6246<T>> {}

type DeepReadonlyObject6246<T> = {
  readonly [P in keyof T]: DeepReadonly6246<T[P]>;
};

type UnionToIntersection6246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6246<T> = UnionToIntersection6246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6246<T extends unknown[], V> = [...T, V];

type TuplifyUnion6246<T, L = LastOf6246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6246<TuplifyUnion6246<Exclude<T, L>>, L>;

type DeepPartial6246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6246<T[P]> }
  : T;

type Paths6246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6246<K, Paths6246<T[K], Prev6246[D]>> : never }[keyof T]
  : never;

type Prev6246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6246 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths6246 = Paths6246<NestedConfig6246>;

interface HeavyProps6246 {
  config: DeepPartial6246<NestedConfig6246>;
  path?: ConfigPaths6246;
}

const HeavyComponent6246 = memo(function HeavyComponent6246({ config }: HeavyProps6246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6246.displayName = 'HeavyComponent6246';
export default HeavyComponent6246;
