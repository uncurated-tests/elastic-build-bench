'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly950<T> = T extends (infer U)[]
  ? DeepReadonlyArray950<U>
  : T extends object
  ? DeepReadonlyObject950<T>
  : T;

interface DeepReadonlyArray950<T> extends ReadonlyArray<DeepReadonly950<T>> {}

type DeepReadonlyObject950<T> = {
  readonly [P in keyof T]: DeepReadonly950<T[P]>;
};

type UnionToIntersection950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf950<T> = UnionToIntersection950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push950<T extends unknown[], V> = [...T, V];

type TuplifyUnion950<T, L = LastOf950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push950<TuplifyUnion950<Exclude<T, L>>, L>;

type DeepPartial950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial950<T[P]> }
  : T;

type Paths950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join950<K, Paths950<T[K], Prev950[D]>> : never }[keyof T]
  : never;

type Prev950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig950 {
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

type ConfigPaths950 = Paths950<NestedConfig950>;

interface HeavyProps950 {
  config: DeepPartial950<NestedConfig950>;
  path?: ConfigPaths950;
}

const HeavyComponent950 = memo(function HeavyComponent950({ config }: HeavyProps950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent950.displayName = 'HeavyComponent950';
export default HeavyComponent950;
