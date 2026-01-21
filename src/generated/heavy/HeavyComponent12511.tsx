'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12511<T> = T extends (infer U)[]
  ? DeepReadonlyArray12511<U>
  : T extends object
  ? DeepReadonlyObject12511<T>
  : T;

interface DeepReadonlyArray12511<T> extends ReadonlyArray<DeepReadonly12511<T>> {}

type DeepReadonlyObject12511<T> = {
  readonly [P in keyof T]: DeepReadonly12511<T[P]>;
};

type UnionToIntersection12511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12511<T> = UnionToIntersection12511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12511<T extends unknown[], V> = [...T, V];

type TuplifyUnion12511<T, L = LastOf12511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12511<TuplifyUnion12511<Exclude<T, L>>, L>;

type DeepPartial12511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12511<T[P]> }
  : T;

type Paths12511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12511<K, Paths12511<T[K], Prev12511[D]>> : never }[keyof T]
  : never;

type Prev12511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12511 {
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

type ConfigPaths12511 = Paths12511<NestedConfig12511>;

interface HeavyProps12511 {
  config: DeepPartial12511<NestedConfig12511>;
  path?: ConfigPaths12511;
}

const HeavyComponent12511 = memo(function HeavyComponent12511({ config }: HeavyProps12511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12511.displayName = 'HeavyComponent12511';
export default HeavyComponent12511;
