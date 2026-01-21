'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12095<T> = T extends (infer U)[]
  ? DeepReadonlyArray12095<U>
  : T extends object
  ? DeepReadonlyObject12095<T>
  : T;

interface DeepReadonlyArray12095<T> extends ReadonlyArray<DeepReadonly12095<T>> {}

type DeepReadonlyObject12095<T> = {
  readonly [P in keyof T]: DeepReadonly12095<T[P]>;
};

type UnionToIntersection12095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12095<T> = UnionToIntersection12095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12095<T extends unknown[], V> = [...T, V];

type TuplifyUnion12095<T, L = LastOf12095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12095<TuplifyUnion12095<Exclude<T, L>>, L>;

type DeepPartial12095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12095<T[P]> }
  : T;

type Paths12095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12095<K, Paths12095<T[K], Prev12095[D]>> : never }[keyof T]
  : never;

type Prev12095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12095 {
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

type ConfigPaths12095 = Paths12095<NestedConfig12095>;

interface HeavyProps12095 {
  config: DeepPartial12095<NestedConfig12095>;
  path?: ConfigPaths12095;
}

const HeavyComponent12095 = memo(function HeavyComponent12095({ config }: HeavyProps12095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12095.displayName = 'HeavyComponent12095';
export default HeavyComponent12095;
