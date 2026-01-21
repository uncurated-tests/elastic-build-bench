'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6380<T> = T extends (infer U)[]
  ? DeepReadonlyArray6380<U>
  : T extends object
  ? DeepReadonlyObject6380<T>
  : T;

interface DeepReadonlyArray6380<T> extends ReadonlyArray<DeepReadonly6380<T>> {}

type DeepReadonlyObject6380<T> = {
  readonly [P in keyof T]: DeepReadonly6380<T[P]>;
};

type UnionToIntersection6380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6380<T> = UnionToIntersection6380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6380<T extends unknown[], V> = [...T, V];

type TuplifyUnion6380<T, L = LastOf6380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6380<TuplifyUnion6380<Exclude<T, L>>, L>;

type DeepPartial6380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6380<T[P]> }
  : T;

type Paths6380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6380<K, Paths6380<T[K], Prev6380[D]>> : never }[keyof T]
  : never;

type Prev6380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6380 {
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

type ConfigPaths6380 = Paths6380<NestedConfig6380>;

interface HeavyProps6380 {
  config: DeepPartial6380<NestedConfig6380>;
  path?: ConfigPaths6380;
}

const HeavyComponent6380 = memo(function HeavyComponent6380({ config }: HeavyProps6380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6380.displayName = 'HeavyComponent6380';
export default HeavyComponent6380;
