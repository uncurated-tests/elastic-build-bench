'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7110<T> = T extends (infer U)[]
  ? DeepReadonlyArray7110<U>
  : T extends object
  ? DeepReadonlyObject7110<T>
  : T;

interface DeepReadonlyArray7110<T> extends ReadonlyArray<DeepReadonly7110<T>> {}

type DeepReadonlyObject7110<T> = {
  readonly [P in keyof T]: DeepReadonly7110<T[P]>;
};

type UnionToIntersection7110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7110<T> = UnionToIntersection7110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7110<T extends unknown[], V> = [...T, V];

type TuplifyUnion7110<T, L = LastOf7110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7110<TuplifyUnion7110<Exclude<T, L>>, L>;

type DeepPartial7110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7110<T[P]> }
  : T;

type Paths7110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7110<K, Paths7110<T[K], Prev7110[D]>> : never }[keyof T]
  : never;

type Prev7110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7110 {
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

type ConfigPaths7110 = Paths7110<NestedConfig7110>;

interface HeavyProps7110 {
  config: DeepPartial7110<NestedConfig7110>;
  path?: ConfigPaths7110;
}

const HeavyComponent7110 = memo(function HeavyComponent7110({ config }: HeavyProps7110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7110.displayName = 'HeavyComponent7110';
export default HeavyComponent7110;
