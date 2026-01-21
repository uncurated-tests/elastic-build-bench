'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6376<T> = T extends (infer U)[]
  ? DeepReadonlyArray6376<U>
  : T extends object
  ? DeepReadonlyObject6376<T>
  : T;

interface DeepReadonlyArray6376<T> extends ReadonlyArray<DeepReadonly6376<T>> {}

type DeepReadonlyObject6376<T> = {
  readonly [P in keyof T]: DeepReadonly6376<T[P]>;
};

type UnionToIntersection6376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6376<T> = UnionToIntersection6376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6376<T extends unknown[], V> = [...T, V];

type TuplifyUnion6376<T, L = LastOf6376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6376<TuplifyUnion6376<Exclude<T, L>>, L>;

type DeepPartial6376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6376<T[P]> }
  : T;

type Paths6376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6376<K, Paths6376<T[K], Prev6376[D]>> : never }[keyof T]
  : never;

type Prev6376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6376 {
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

type ConfigPaths6376 = Paths6376<NestedConfig6376>;

interface HeavyProps6376 {
  config: DeepPartial6376<NestedConfig6376>;
  path?: ConfigPaths6376;
}

const HeavyComponent6376 = memo(function HeavyComponent6376({ config }: HeavyProps6376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6376.displayName = 'HeavyComponent6376';
export default HeavyComponent6376;
