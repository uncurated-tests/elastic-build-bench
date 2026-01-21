'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7422<T> = T extends (infer U)[]
  ? DeepReadonlyArray7422<U>
  : T extends object
  ? DeepReadonlyObject7422<T>
  : T;

interface DeepReadonlyArray7422<T> extends ReadonlyArray<DeepReadonly7422<T>> {}

type DeepReadonlyObject7422<T> = {
  readonly [P in keyof T]: DeepReadonly7422<T[P]>;
};

type UnionToIntersection7422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7422<T> = UnionToIntersection7422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7422<T extends unknown[], V> = [...T, V];

type TuplifyUnion7422<T, L = LastOf7422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7422<TuplifyUnion7422<Exclude<T, L>>, L>;

type DeepPartial7422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7422<T[P]> }
  : T;

type Paths7422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7422<K, Paths7422<T[K], Prev7422[D]>> : never }[keyof T]
  : never;

type Prev7422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7422 {
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

type ConfigPaths7422 = Paths7422<NestedConfig7422>;

interface HeavyProps7422 {
  config: DeepPartial7422<NestedConfig7422>;
  path?: ConfigPaths7422;
}

const HeavyComponent7422 = memo(function HeavyComponent7422({ config }: HeavyProps7422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7422.displayName = 'HeavyComponent7422';
export default HeavyComponent7422;
