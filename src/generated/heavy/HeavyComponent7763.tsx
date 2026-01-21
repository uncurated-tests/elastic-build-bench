'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7763<T> = T extends (infer U)[]
  ? DeepReadonlyArray7763<U>
  : T extends object
  ? DeepReadonlyObject7763<T>
  : T;

interface DeepReadonlyArray7763<T> extends ReadonlyArray<DeepReadonly7763<T>> {}

type DeepReadonlyObject7763<T> = {
  readonly [P in keyof T]: DeepReadonly7763<T[P]>;
};

type UnionToIntersection7763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7763<T> = UnionToIntersection7763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7763<T extends unknown[], V> = [...T, V];

type TuplifyUnion7763<T, L = LastOf7763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7763<TuplifyUnion7763<Exclude<T, L>>, L>;

type DeepPartial7763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7763<T[P]> }
  : T;

type Paths7763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7763<K, Paths7763<T[K], Prev7763[D]>> : never }[keyof T]
  : never;

type Prev7763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7763 {
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

type ConfigPaths7763 = Paths7763<NestedConfig7763>;

interface HeavyProps7763 {
  config: DeepPartial7763<NestedConfig7763>;
  path?: ConfigPaths7763;
}

const HeavyComponent7763 = memo(function HeavyComponent7763({ config }: HeavyProps7763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7763.displayName = 'HeavyComponent7763';
export default HeavyComponent7763;
