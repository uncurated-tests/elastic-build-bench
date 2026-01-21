'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7723<T> = T extends (infer U)[]
  ? DeepReadonlyArray7723<U>
  : T extends object
  ? DeepReadonlyObject7723<T>
  : T;

interface DeepReadonlyArray7723<T> extends ReadonlyArray<DeepReadonly7723<T>> {}

type DeepReadonlyObject7723<T> = {
  readonly [P in keyof T]: DeepReadonly7723<T[P]>;
};

type UnionToIntersection7723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7723<T> = UnionToIntersection7723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7723<T extends unknown[], V> = [...T, V];

type TuplifyUnion7723<T, L = LastOf7723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7723<TuplifyUnion7723<Exclude<T, L>>, L>;

type DeepPartial7723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7723<T[P]> }
  : T;

type Paths7723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7723<K, Paths7723<T[K], Prev7723[D]>> : never }[keyof T]
  : never;

type Prev7723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7723 {
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

type ConfigPaths7723 = Paths7723<NestedConfig7723>;

interface HeavyProps7723 {
  config: DeepPartial7723<NestedConfig7723>;
  path?: ConfigPaths7723;
}

const HeavyComponent7723 = memo(function HeavyComponent7723({ config }: HeavyProps7723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7723.displayName = 'HeavyComponent7723';
export default HeavyComponent7723;
