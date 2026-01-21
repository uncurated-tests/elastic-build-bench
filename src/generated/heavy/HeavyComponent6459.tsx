'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6459<T> = T extends (infer U)[]
  ? DeepReadonlyArray6459<U>
  : T extends object
  ? DeepReadonlyObject6459<T>
  : T;

interface DeepReadonlyArray6459<T> extends ReadonlyArray<DeepReadonly6459<T>> {}

type DeepReadonlyObject6459<T> = {
  readonly [P in keyof T]: DeepReadonly6459<T[P]>;
};

type UnionToIntersection6459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6459<T> = UnionToIntersection6459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6459<T extends unknown[], V> = [...T, V];

type TuplifyUnion6459<T, L = LastOf6459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6459<TuplifyUnion6459<Exclude<T, L>>, L>;

type DeepPartial6459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6459<T[P]> }
  : T;

type Paths6459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6459<K, Paths6459<T[K], Prev6459[D]>> : never }[keyof T]
  : never;

type Prev6459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6459 {
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

type ConfigPaths6459 = Paths6459<NestedConfig6459>;

interface HeavyProps6459 {
  config: DeepPartial6459<NestedConfig6459>;
  path?: ConfigPaths6459;
}

const HeavyComponent6459 = memo(function HeavyComponent6459({ config }: HeavyProps6459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6459.displayName = 'HeavyComponent6459';
export default HeavyComponent6459;
