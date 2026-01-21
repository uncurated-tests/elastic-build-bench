'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12578<T> = T extends (infer U)[]
  ? DeepReadonlyArray12578<U>
  : T extends object
  ? DeepReadonlyObject12578<T>
  : T;

interface DeepReadonlyArray12578<T> extends ReadonlyArray<DeepReadonly12578<T>> {}

type DeepReadonlyObject12578<T> = {
  readonly [P in keyof T]: DeepReadonly12578<T[P]>;
};

type UnionToIntersection12578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12578<T> = UnionToIntersection12578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12578<T extends unknown[], V> = [...T, V];

type TuplifyUnion12578<T, L = LastOf12578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12578<TuplifyUnion12578<Exclude<T, L>>, L>;

type DeepPartial12578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12578<T[P]> }
  : T;

type Paths12578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12578<K, Paths12578<T[K], Prev12578[D]>> : never }[keyof T]
  : never;

type Prev12578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12578 {
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

type ConfigPaths12578 = Paths12578<NestedConfig12578>;

interface HeavyProps12578 {
  config: DeepPartial12578<NestedConfig12578>;
  path?: ConfigPaths12578;
}

const HeavyComponent12578 = memo(function HeavyComponent12578({ config }: HeavyProps12578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12578.displayName = 'HeavyComponent12578';
export default HeavyComponent12578;
