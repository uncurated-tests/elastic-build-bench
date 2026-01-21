'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6035<T> = T extends (infer U)[]
  ? DeepReadonlyArray6035<U>
  : T extends object
  ? DeepReadonlyObject6035<T>
  : T;

interface DeepReadonlyArray6035<T> extends ReadonlyArray<DeepReadonly6035<T>> {}

type DeepReadonlyObject6035<T> = {
  readonly [P in keyof T]: DeepReadonly6035<T[P]>;
};

type UnionToIntersection6035<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6035<T> = UnionToIntersection6035<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6035<T extends unknown[], V> = [...T, V];

type TuplifyUnion6035<T, L = LastOf6035<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6035<TuplifyUnion6035<Exclude<T, L>>, L>;

type DeepPartial6035<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6035<T[P]> }
  : T;

type Paths6035<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6035<K, Paths6035<T[K], Prev6035[D]>> : never }[keyof T]
  : never;

type Prev6035 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6035<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6035 {
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

type ConfigPaths6035 = Paths6035<NestedConfig6035>;

interface HeavyProps6035 {
  config: DeepPartial6035<NestedConfig6035>;
  path?: ConfigPaths6035;
}

const HeavyComponent6035 = memo(function HeavyComponent6035({ config }: HeavyProps6035) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6035) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6035 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6035: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6035.displayName = 'HeavyComponent6035';
export default HeavyComponent6035;
