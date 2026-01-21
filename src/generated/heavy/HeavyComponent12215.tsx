'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12215<T> = T extends (infer U)[]
  ? DeepReadonlyArray12215<U>
  : T extends object
  ? DeepReadonlyObject12215<T>
  : T;

interface DeepReadonlyArray12215<T> extends ReadonlyArray<DeepReadonly12215<T>> {}

type DeepReadonlyObject12215<T> = {
  readonly [P in keyof T]: DeepReadonly12215<T[P]>;
};

type UnionToIntersection12215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12215<T> = UnionToIntersection12215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12215<T extends unknown[], V> = [...T, V];

type TuplifyUnion12215<T, L = LastOf12215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12215<TuplifyUnion12215<Exclude<T, L>>, L>;

type DeepPartial12215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12215<T[P]> }
  : T;

type Paths12215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12215<K, Paths12215<T[K], Prev12215[D]>> : never }[keyof T]
  : never;

type Prev12215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12215 {
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

type ConfigPaths12215 = Paths12215<NestedConfig12215>;

interface HeavyProps12215 {
  config: DeepPartial12215<NestedConfig12215>;
  path?: ConfigPaths12215;
}

const HeavyComponent12215 = memo(function HeavyComponent12215({ config }: HeavyProps12215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12215.displayName = 'HeavyComponent12215';
export default HeavyComponent12215;
