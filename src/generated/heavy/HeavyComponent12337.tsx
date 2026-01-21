'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12337<T> = T extends (infer U)[]
  ? DeepReadonlyArray12337<U>
  : T extends object
  ? DeepReadonlyObject12337<T>
  : T;

interface DeepReadonlyArray12337<T> extends ReadonlyArray<DeepReadonly12337<T>> {}

type DeepReadonlyObject12337<T> = {
  readonly [P in keyof T]: DeepReadonly12337<T[P]>;
};

type UnionToIntersection12337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12337<T> = UnionToIntersection12337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12337<T extends unknown[], V> = [...T, V];

type TuplifyUnion12337<T, L = LastOf12337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12337<TuplifyUnion12337<Exclude<T, L>>, L>;

type DeepPartial12337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12337<T[P]> }
  : T;

type Paths12337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12337<K, Paths12337<T[K], Prev12337[D]>> : never }[keyof T]
  : never;

type Prev12337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12337 {
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

type ConfigPaths12337 = Paths12337<NestedConfig12337>;

interface HeavyProps12337 {
  config: DeepPartial12337<NestedConfig12337>;
  path?: ConfigPaths12337;
}

const HeavyComponent12337 = memo(function HeavyComponent12337({ config }: HeavyProps12337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12337.displayName = 'HeavyComponent12337';
export default HeavyComponent12337;
