'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly321<T> = T extends (infer U)[]
  ? DeepReadonlyArray321<U>
  : T extends object
  ? DeepReadonlyObject321<T>
  : T;

interface DeepReadonlyArray321<T> extends ReadonlyArray<DeepReadonly321<T>> {}

type DeepReadonlyObject321<T> = {
  readonly [P in keyof T]: DeepReadonly321<T[P]>;
};

type UnionToIntersection321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf321<T> = UnionToIntersection321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push321<T extends unknown[], V> = [...T, V];

type TuplifyUnion321<T, L = LastOf321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push321<TuplifyUnion321<Exclude<T, L>>, L>;

type DeepPartial321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial321<T[P]> }
  : T;

type Paths321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join321<K, Paths321<T[K], Prev321[D]>> : never }[keyof T]
  : never;

type Prev321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig321 {
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

type ConfigPaths321 = Paths321<NestedConfig321>;

interface HeavyProps321 {
  config: DeepPartial321<NestedConfig321>;
  path?: ConfigPaths321;
}

const HeavyComponent321 = memo(function HeavyComponent321({ config }: HeavyProps321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent321.displayName = 'HeavyComponent321';
export default HeavyComponent321;
