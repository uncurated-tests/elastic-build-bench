'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7491<T> = T extends (infer U)[]
  ? DeepReadonlyArray7491<U>
  : T extends object
  ? DeepReadonlyObject7491<T>
  : T;

interface DeepReadonlyArray7491<T> extends ReadonlyArray<DeepReadonly7491<T>> {}

type DeepReadonlyObject7491<T> = {
  readonly [P in keyof T]: DeepReadonly7491<T[P]>;
};

type UnionToIntersection7491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7491<T> = UnionToIntersection7491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7491<T extends unknown[], V> = [...T, V];

type TuplifyUnion7491<T, L = LastOf7491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7491<TuplifyUnion7491<Exclude<T, L>>, L>;

type DeepPartial7491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7491<T[P]> }
  : T;

type Paths7491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7491<K, Paths7491<T[K], Prev7491[D]>> : never }[keyof T]
  : never;

type Prev7491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7491 {
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

type ConfigPaths7491 = Paths7491<NestedConfig7491>;

interface HeavyProps7491 {
  config: DeepPartial7491<NestedConfig7491>;
  path?: ConfigPaths7491;
}

const HeavyComponent7491 = memo(function HeavyComponent7491({ config }: HeavyProps7491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7491.displayName = 'HeavyComponent7491';
export default HeavyComponent7491;
