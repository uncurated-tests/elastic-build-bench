'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7880<T> = T extends (infer U)[]
  ? DeepReadonlyArray7880<U>
  : T extends object
  ? DeepReadonlyObject7880<T>
  : T;

interface DeepReadonlyArray7880<T> extends ReadonlyArray<DeepReadonly7880<T>> {}

type DeepReadonlyObject7880<T> = {
  readonly [P in keyof T]: DeepReadonly7880<T[P]>;
};

type UnionToIntersection7880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7880<T> = UnionToIntersection7880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7880<T extends unknown[], V> = [...T, V];

type TuplifyUnion7880<T, L = LastOf7880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7880<TuplifyUnion7880<Exclude<T, L>>, L>;

type DeepPartial7880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7880<T[P]> }
  : T;

type Paths7880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7880<K, Paths7880<T[K], Prev7880[D]>> : never }[keyof T]
  : never;

type Prev7880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7880 {
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

type ConfigPaths7880 = Paths7880<NestedConfig7880>;

interface HeavyProps7880 {
  config: DeepPartial7880<NestedConfig7880>;
  path?: ConfigPaths7880;
}

const HeavyComponent7880 = memo(function HeavyComponent7880({ config }: HeavyProps7880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7880.displayName = 'HeavyComponent7880';
export default HeavyComponent7880;
