'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12704<T> = T extends (infer U)[]
  ? DeepReadonlyArray12704<U>
  : T extends object
  ? DeepReadonlyObject12704<T>
  : T;

interface DeepReadonlyArray12704<T> extends ReadonlyArray<DeepReadonly12704<T>> {}

type DeepReadonlyObject12704<T> = {
  readonly [P in keyof T]: DeepReadonly12704<T[P]>;
};

type UnionToIntersection12704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12704<T> = UnionToIntersection12704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12704<T extends unknown[], V> = [...T, V];

type TuplifyUnion12704<T, L = LastOf12704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12704<TuplifyUnion12704<Exclude<T, L>>, L>;

type DeepPartial12704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12704<T[P]> }
  : T;

type Paths12704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12704<K, Paths12704<T[K], Prev12704[D]>> : never }[keyof T]
  : never;

type Prev12704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12704 {
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

type ConfigPaths12704 = Paths12704<NestedConfig12704>;

interface HeavyProps12704 {
  config: DeepPartial12704<NestedConfig12704>;
  path?: ConfigPaths12704;
}

const HeavyComponent12704 = memo(function HeavyComponent12704({ config }: HeavyProps12704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12704.displayName = 'HeavyComponent12704';
export default HeavyComponent12704;
