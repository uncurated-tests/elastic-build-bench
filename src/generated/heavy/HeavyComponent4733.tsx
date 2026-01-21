'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4733<T> = T extends (infer U)[]
  ? DeepReadonlyArray4733<U>
  : T extends object
  ? DeepReadonlyObject4733<T>
  : T;

interface DeepReadonlyArray4733<T> extends ReadonlyArray<DeepReadonly4733<T>> {}

type DeepReadonlyObject4733<T> = {
  readonly [P in keyof T]: DeepReadonly4733<T[P]>;
};

type UnionToIntersection4733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4733<T> = UnionToIntersection4733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4733<T extends unknown[], V> = [...T, V];

type TuplifyUnion4733<T, L = LastOf4733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4733<TuplifyUnion4733<Exclude<T, L>>, L>;

type DeepPartial4733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4733<T[P]> }
  : T;

type Paths4733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4733<K, Paths4733<T[K], Prev4733[D]>> : never }[keyof T]
  : never;

type Prev4733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4733 {
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

type ConfigPaths4733 = Paths4733<NestedConfig4733>;

interface HeavyProps4733 {
  config: DeepPartial4733<NestedConfig4733>;
  path?: ConfigPaths4733;
}

const HeavyComponent4733 = memo(function HeavyComponent4733({ config }: HeavyProps4733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4733.displayName = 'HeavyComponent4733';
export default HeavyComponent4733;
