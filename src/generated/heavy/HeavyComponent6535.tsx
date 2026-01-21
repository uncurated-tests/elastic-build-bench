'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6535<T> = T extends (infer U)[]
  ? DeepReadonlyArray6535<U>
  : T extends object
  ? DeepReadonlyObject6535<T>
  : T;

interface DeepReadonlyArray6535<T> extends ReadonlyArray<DeepReadonly6535<T>> {}

type DeepReadonlyObject6535<T> = {
  readonly [P in keyof T]: DeepReadonly6535<T[P]>;
};

type UnionToIntersection6535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6535<T> = UnionToIntersection6535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6535<T extends unknown[], V> = [...T, V];

type TuplifyUnion6535<T, L = LastOf6535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6535<TuplifyUnion6535<Exclude<T, L>>, L>;

type DeepPartial6535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6535<T[P]> }
  : T;

type Paths6535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6535<K, Paths6535<T[K], Prev6535[D]>> : never }[keyof T]
  : never;

type Prev6535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6535 {
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

type ConfigPaths6535 = Paths6535<NestedConfig6535>;

interface HeavyProps6535 {
  config: DeepPartial6535<NestedConfig6535>;
  path?: ConfigPaths6535;
}

const HeavyComponent6535 = memo(function HeavyComponent6535({ config }: HeavyProps6535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6535.displayName = 'HeavyComponent6535';
export default HeavyComponent6535;
