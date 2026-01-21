'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6276<T> = T extends (infer U)[]
  ? DeepReadonlyArray6276<U>
  : T extends object
  ? DeepReadonlyObject6276<T>
  : T;

interface DeepReadonlyArray6276<T> extends ReadonlyArray<DeepReadonly6276<T>> {}

type DeepReadonlyObject6276<T> = {
  readonly [P in keyof T]: DeepReadonly6276<T[P]>;
};

type UnionToIntersection6276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6276<T> = UnionToIntersection6276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6276<T extends unknown[], V> = [...T, V];

type TuplifyUnion6276<T, L = LastOf6276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6276<TuplifyUnion6276<Exclude<T, L>>, L>;

type DeepPartial6276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6276<T[P]> }
  : T;

type Paths6276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6276<K, Paths6276<T[K], Prev6276[D]>> : never }[keyof T]
  : never;

type Prev6276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6276 {
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

type ConfigPaths6276 = Paths6276<NestedConfig6276>;

interface HeavyProps6276 {
  config: DeepPartial6276<NestedConfig6276>;
  path?: ConfigPaths6276;
}

const HeavyComponent6276 = memo(function HeavyComponent6276({ config }: HeavyProps6276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6276.displayName = 'HeavyComponent6276';
export default HeavyComponent6276;
