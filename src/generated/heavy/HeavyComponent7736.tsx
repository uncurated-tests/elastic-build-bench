'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7736<T> = T extends (infer U)[]
  ? DeepReadonlyArray7736<U>
  : T extends object
  ? DeepReadonlyObject7736<T>
  : T;

interface DeepReadonlyArray7736<T> extends ReadonlyArray<DeepReadonly7736<T>> {}

type DeepReadonlyObject7736<T> = {
  readonly [P in keyof T]: DeepReadonly7736<T[P]>;
};

type UnionToIntersection7736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7736<T> = UnionToIntersection7736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7736<T extends unknown[], V> = [...T, V];

type TuplifyUnion7736<T, L = LastOf7736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7736<TuplifyUnion7736<Exclude<T, L>>, L>;

type DeepPartial7736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7736<T[P]> }
  : T;

type Paths7736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7736<K, Paths7736<T[K], Prev7736[D]>> : never }[keyof T]
  : never;

type Prev7736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7736 {
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

type ConfigPaths7736 = Paths7736<NestedConfig7736>;

interface HeavyProps7736 {
  config: DeepPartial7736<NestedConfig7736>;
  path?: ConfigPaths7736;
}

const HeavyComponent7736 = memo(function HeavyComponent7736({ config }: HeavyProps7736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7736.displayName = 'HeavyComponent7736';
export default HeavyComponent7736;
