'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5623<T> = T extends (infer U)[]
  ? DeepReadonlyArray5623<U>
  : T extends object
  ? DeepReadonlyObject5623<T>
  : T;

interface DeepReadonlyArray5623<T> extends ReadonlyArray<DeepReadonly5623<T>> {}

type DeepReadonlyObject5623<T> = {
  readonly [P in keyof T]: DeepReadonly5623<T[P]>;
};

type UnionToIntersection5623<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5623<T> = UnionToIntersection5623<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5623<T extends unknown[], V> = [...T, V];

type TuplifyUnion5623<T, L = LastOf5623<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5623<TuplifyUnion5623<Exclude<T, L>>, L>;

type DeepPartial5623<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5623<T[P]> }
  : T;

type Paths5623<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5623<K, Paths5623<T[K], Prev5623[D]>> : never }[keyof T]
  : never;

type Prev5623 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5623<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5623 {
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

type ConfigPaths5623 = Paths5623<NestedConfig5623>;

interface HeavyProps5623 {
  config: DeepPartial5623<NestedConfig5623>;
  path?: ConfigPaths5623;
}

const HeavyComponent5623 = memo(function HeavyComponent5623({ config }: HeavyProps5623) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5623) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5623 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5623: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5623.displayName = 'HeavyComponent5623';
export default HeavyComponent5623;
