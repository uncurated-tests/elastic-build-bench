'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12867<T> = T extends (infer U)[]
  ? DeepReadonlyArray12867<U>
  : T extends object
  ? DeepReadonlyObject12867<T>
  : T;

interface DeepReadonlyArray12867<T> extends ReadonlyArray<DeepReadonly12867<T>> {}

type DeepReadonlyObject12867<T> = {
  readonly [P in keyof T]: DeepReadonly12867<T[P]>;
};

type UnionToIntersection12867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12867<T> = UnionToIntersection12867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12867<T extends unknown[], V> = [...T, V];

type TuplifyUnion12867<T, L = LastOf12867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12867<TuplifyUnion12867<Exclude<T, L>>, L>;

type DeepPartial12867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12867<T[P]> }
  : T;

type Paths12867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12867<K, Paths12867<T[K], Prev12867[D]>> : never }[keyof T]
  : never;

type Prev12867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12867 {
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

type ConfigPaths12867 = Paths12867<NestedConfig12867>;

interface HeavyProps12867 {
  config: DeepPartial12867<NestedConfig12867>;
  path?: ConfigPaths12867;
}

const HeavyComponent12867 = memo(function HeavyComponent12867({ config }: HeavyProps12867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12867.displayName = 'HeavyComponent12867';
export default HeavyComponent12867;
