'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6379<T> = T extends (infer U)[]
  ? DeepReadonlyArray6379<U>
  : T extends object
  ? DeepReadonlyObject6379<T>
  : T;

interface DeepReadonlyArray6379<T> extends ReadonlyArray<DeepReadonly6379<T>> {}

type DeepReadonlyObject6379<T> = {
  readonly [P in keyof T]: DeepReadonly6379<T[P]>;
};

type UnionToIntersection6379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6379<T> = UnionToIntersection6379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6379<T extends unknown[], V> = [...T, V];

type TuplifyUnion6379<T, L = LastOf6379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6379<TuplifyUnion6379<Exclude<T, L>>, L>;

type DeepPartial6379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6379<T[P]> }
  : T;

type Paths6379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6379<K, Paths6379<T[K], Prev6379[D]>> : never }[keyof T]
  : never;

type Prev6379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6379 {
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

type ConfigPaths6379 = Paths6379<NestedConfig6379>;

interface HeavyProps6379 {
  config: DeepPartial6379<NestedConfig6379>;
  path?: ConfigPaths6379;
}

const HeavyComponent6379 = memo(function HeavyComponent6379({ config }: HeavyProps6379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6379.displayName = 'HeavyComponent6379';
export default HeavyComponent6379;
