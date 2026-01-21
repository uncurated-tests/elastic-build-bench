'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7456<T> = T extends (infer U)[]
  ? DeepReadonlyArray7456<U>
  : T extends object
  ? DeepReadonlyObject7456<T>
  : T;

interface DeepReadonlyArray7456<T> extends ReadonlyArray<DeepReadonly7456<T>> {}

type DeepReadonlyObject7456<T> = {
  readonly [P in keyof T]: DeepReadonly7456<T[P]>;
};

type UnionToIntersection7456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7456<T> = UnionToIntersection7456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7456<T extends unknown[], V> = [...T, V];

type TuplifyUnion7456<T, L = LastOf7456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7456<TuplifyUnion7456<Exclude<T, L>>, L>;

type DeepPartial7456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7456<T[P]> }
  : T;

type Paths7456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7456<K, Paths7456<T[K], Prev7456[D]>> : never }[keyof T]
  : never;

type Prev7456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7456 {
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

type ConfigPaths7456 = Paths7456<NestedConfig7456>;

interface HeavyProps7456 {
  config: DeepPartial7456<NestedConfig7456>;
  path?: ConfigPaths7456;
}

const HeavyComponent7456 = memo(function HeavyComponent7456({ config }: HeavyProps7456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7456.displayName = 'HeavyComponent7456';
export default HeavyComponent7456;
