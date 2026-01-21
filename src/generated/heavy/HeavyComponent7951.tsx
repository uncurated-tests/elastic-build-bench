'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7951<T> = T extends (infer U)[]
  ? DeepReadonlyArray7951<U>
  : T extends object
  ? DeepReadonlyObject7951<T>
  : T;

interface DeepReadonlyArray7951<T> extends ReadonlyArray<DeepReadonly7951<T>> {}

type DeepReadonlyObject7951<T> = {
  readonly [P in keyof T]: DeepReadonly7951<T[P]>;
};

type UnionToIntersection7951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7951<T> = UnionToIntersection7951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7951<T extends unknown[], V> = [...T, V];

type TuplifyUnion7951<T, L = LastOf7951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7951<TuplifyUnion7951<Exclude<T, L>>, L>;

type DeepPartial7951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7951<T[P]> }
  : T;

type Paths7951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7951<K, Paths7951<T[K], Prev7951[D]>> : never }[keyof T]
  : never;

type Prev7951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7951 {
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

type ConfigPaths7951 = Paths7951<NestedConfig7951>;

interface HeavyProps7951 {
  config: DeepPartial7951<NestedConfig7951>;
  path?: ConfigPaths7951;
}

const HeavyComponent7951 = memo(function HeavyComponent7951({ config }: HeavyProps7951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7951.displayName = 'HeavyComponent7951';
export default HeavyComponent7951;
