'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6272<T> = T extends (infer U)[]
  ? DeepReadonlyArray6272<U>
  : T extends object
  ? DeepReadonlyObject6272<T>
  : T;

interface DeepReadonlyArray6272<T> extends ReadonlyArray<DeepReadonly6272<T>> {}

type DeepReadonlyObject6272<T> = {
  readonly [P in keyof T]: DeepReadonly6272<T[P]>;
};

type UnionToIntersection6272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6272<T> = UnionToIntersection6272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6272<T extends unknown[], V> = [...T, V];

type TuplifyUnion6272<T, L = LastOf6272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6272<TuplifyUnion6272<Exclude<T, L>>, L>;

type DeepPartial6272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6272<T[P]> }
  : T;

type Paths6272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6272<K, Paths6272<T[K], Prev6272[D]>> : never }[keyof T]
  : never;

type Prev6272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6272 {
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

type ConfigPaths6272 = Paths6272<NestedConfig6272>;

interface HeavyProps6272 {
  config: DeepPartial6272<NestedConfig6272>;
  path?: ConfigPaths6272;
}

const HeavyComponent6272 = memo(function HeavyComponent6272({ config }: HeavyProps6272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6272.displayName = 'HeavyComponent6272';
export default HeavyComponent6272;
