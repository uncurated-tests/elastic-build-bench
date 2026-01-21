'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7140<T> = T extends (infer U)[]
  ? DeepReadonlyArray7140<U>
  : T extends object
  ? DeepReadonlyObject7140<T>
  : T;

interface DeepReadonlyArray7140<T> extends ReadonlyArray<DeepReadonly7140<T>> {}

type DeepReadonlyObject7140<T> = {
  readonly [P in keyof T]: DeepReadonly7140<T[P]>;
};

type UnionToIntersection7140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7140<T> = UnionToIntersection7140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7140<T extends unknown[], V> = [...T, V];

type TuplifyUnion7140<T, L = LastOf7140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7140<TuplifyUnion7140<Exclude<T, L>>, L>;

type DeepPartial7140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7140<T[P]> }
  : T;

type Paths7140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7140<K, Paths7140<T[K], Prev7140[D]>> : never }[keyof T]
  : never;

type Prev7140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7140 {
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

type ConfigPaths7140 = Paths7140<NestedConfig7140>;

interface HeavyProps7140 {
  config: DeepPartial7140<NestedConfig7140>;
  path?: ConfigPaths7140;
}

const HeavyComponent7140 = memo(function HeavyComponent7140({ config }: HeavyProps7140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7140.displayName = 'HeavyComponent7140';
export default HeavyComponent7140;
