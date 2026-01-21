'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12038<T> = T extends (infer U)[]
  ? DeepReadonlyArray12038<U>
  : T extends object
  ? DeepReadonlyObject12038<T>
  : T;

interface DeepReadonlyArray12038<T> extends ReadonlyArray<DeepReadonly12038<T>> {}

type DeepReadonlyObject12038<T> = {
  readonly [P in keyof T]: DeepReadonly12038<T[P]>;
};

type UnionToIntersection12038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12038<T> = UnionToIntersection12038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12038<T extends unknown[], V> = [...T, V];

type TuplifyUnion12038<T, L = LastOf12038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12038<TuplifyUnion12038<Exclude<T, L>>, L>;

type DeepPartial12038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12038<T[P]> }
  : T;

type Paths12038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12038<K, Paths12038<T[K], Prev12038[D]>> : never }[keyof T]
  : never;

type Prev12038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12038 {
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

type ConfigPaths12038 = Paths12038<NestedConfig12038>;

interface HeavyProps12038 {
  config: DeepPartial12038<NestedConfig12038>;
  path?: ConfigPaths12038;
}

const HeavyComponent12038 = memo(function HeavyComponent12038({ config }: HeavyProps12038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12038.displayName = 'HeavyComponent12038';
export default HeavyComponent12038;
