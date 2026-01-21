'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7985<T> = T extends (infer U)[]
  ? DeepReadonlyArray7985<U>
  : T extends object
  ? DeepReadonlyObject7985<T>
  : T;

interface DeepReadonlyArray7985<T> extends ReadonlyArray<DeepReadonly7985<T>> {}

type DeepReadonlyObject7985<T> = {
  readonly [P in keyof T]: DeepReadonly7985<T[P]>;
};

type UnionToIntersection7985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7985<T> = UnionToIntersection7985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7985<T extends unknown[], V> = [...T, V];

type TuplifyUnion7985<T, L = LastOf7985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7985<TuplifyUnion7985<Exclude<T, L>>, L>;

type DeepPartial7985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7985<T[P]> }
  : T;

type Paths7985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7985<K, Paths7985<T[K], Prev7985[D]>> : never }[keyof T]
  : never;

type Prev7985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7985 {
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

type ConfigPaths7985 = Paths7985<NestedConfig7985>;

interface HeavyProps7985 {
  config: DeepPartial7985<NestedConfig7985>;
  path?: ConfigPaths7985;
}

const HeavyComponent7985 = memo(function HeavyComponent7985({ config }: HeavyProps7985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7985.displayName = 'HeavyComponent7985';
export default HeavyComponent7985;
