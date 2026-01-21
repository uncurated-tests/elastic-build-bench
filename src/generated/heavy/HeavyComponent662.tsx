'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly662<T> = T extends (infer U)[]
  ? DeepReadonlyArray662<U>
  : T extends object
  ? DeepReadonlyObject662<T>
  : T;

interface DeepReadonlyArray662<T> extends ReadonlyArray<DeepReadonly662<T>> {}

type DeepReadonlyObject662<T> = {
  readonly [P in keyof T]: DeepReadonly662<T[P]>;
};

type UnionToIntersection662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf662<T> = UnionToIntersection662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push662<T extends unknown[], V> = [...T, V];

type TuplifyUnion662<T, L = LastOf662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push662<TuplifyUnion662<Exclude<T, L>>, L>;

type DeepPartial662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial662<T[P]> }
  : T;

type Paths662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join662<K, Paths662<T[K], Prev662[D]>> : never }[keyof T]
  : never;

type Prev662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig662 {
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

type ConfigPaths662 = Paths662<NestedConfig662>;

interface HeavyProps662 {
  config: DeepPartial662<NestedConfig662>;
  path?: ConfigPaths662;
}

const HeavyComponent662 = memo(function HeavyComponent662({ config }: HeavyProps662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent662.displayName = 'HeavyComponent662';
export default HeavyComponent662;
