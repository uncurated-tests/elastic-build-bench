'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12000<T> = T extends (infer U)[]
  ? DeepReadonlyArray12000<U>
  : T extends object
  ? DeepReadonlyObject12000<T>
  : T;

interface DeepReadonlyArray12000<T> extends ReadonlyArray<DeepReadonly12000<T>> {}

type DeepReadonlyObject12000<T> = {
  readonly [P in keyof T]: DeepReadonly12000<T[P]>;
};

type UnionToIntersection12000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12000<T> = UnionToIntersection12000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12000<T extends unknown[], V> = [...T, V];

type TuplifyUnion12000<T, L = LastOf12000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12000<TuplifyUnion12000<Exclude<T, L>>, L>;

type DeepPartial12000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12000<T[P]> }
  : T;

type Paths12000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12000<K, Paths12000<T[K], Prev12000[D]>> : never }[keyof T]
  : never;

type Prev12000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12000 {
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

type ConfigPaths12000 = Paths12000<NestedConfig12000>;

interface HeavyProps12000 {
  config: DeepPartial12000<NestedConfig12000>;
  path?: ConfigPaths12000;
}

const HeavyComponent12000 = memo(function HeavyComponent12000({ config }: HeavyProps12000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12000.displayName = 'HeavyComponent12000';
export default HeavyComponent12000;
