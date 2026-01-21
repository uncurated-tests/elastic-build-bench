'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7753<T> = T extends (infer U)[]
  ? DeepReadonlyArray7753<U>
  : T extends object
  ? DeepReadonlyObject7753<T>
  : T;

interface DeepReadonlyArray7753<T> extends ReadonlyArray<DeepReadonly7753<T>> {}

type DeepReadonlyObject7753<T> = {
  readonly [P in keyof T]: DeepReadonly7753<T[P]>;
};

type UnionToIntersection7753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7753<T> = UnionToIntersection7753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7753<T extends unknown[], V> = [...T, V];

type TuplifyUnion7753<T, L = LastOf7753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7753<TuplifyUnion7753<Exclude<T, L>>, L>;

type DeepPartial7753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7753<T[P]> }
  : T;

type Paths7753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7753<K, Paths7753<T[K], Prev7753[D]>> : never }[keyof T]
  : never;

type Prev7753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7753 {
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

type ConfigPaths7753 = Paths7753<NestedConfig7753>;

interface HeavyProps7753 {
  config: DeepPartial7753<NestedConfig7753>;
  path?: ConfigPaths7753;
}

const HeavyComponent7753 = memo(function HeavyComponent7753({ config }: HeavyProps7753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7753.displayName = 'HeavyComponent7753';
export default HeavyComponent7753;
