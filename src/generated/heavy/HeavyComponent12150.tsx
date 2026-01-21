'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12150<T> = T extends (infer U)[]
  ? DeepReadonlyArray12150<U>
  : T extends object
  ? DeepReadonlyObject12150<T>
  : T;

interface DeepReadonlyArray12150<T> extends ReadonlyArray<DeepReadonly12150<T>> {}

type DeepReadonlyObject12150<T> = {
  readonly [P in keyof T]: DeepReadonly12150<T[P]>;
};

type UnionToIntersection12150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12150<T> = UnionToIntersection12150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12150<T extends unknown[], V> = [...T, V];

type TuplifyUnion12150<T, L = LastOf12150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12150<TuplifyUnion12150<Exclude<T, L>>, L>;

type DeepPartial12150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12150<T[P]> }
  : T;

type Paths12150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12150<K, Paths12150<T[K], Prev12150[D]>> : never }[keyof T]
  : never;

type Prev12150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12150 {
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

type ConfigPaths12150 = Paths12150<NestedConfig12150>;

interface HeavyProps12150 {
  config: DeepPartial12150<NestedConfig12150>;
  path?: ConfigPaths12150;
}

const HeavyComponent12150 = memo(function HeavyComponent12150({ config }: HeavyProps12150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12150.displayName = 'HeavyComponent12150';
export default HeavyComponent12150;
