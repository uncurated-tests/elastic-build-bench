'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12251<T> = T extends (infer U)[]
  ? DeepReadonlyArray12251<U>
  : T extends object
  ? DeepReadonlyObject12251<T>
  : T;

interface DeepReadonlyArray12251<T> extends ReadonlyArray<DeepReadonly12251<T>> {}

type DeepReadonlyObject12251<T> = {
  readonly [P in keyof T]: DeepReadonly12251<T[P]>;
};

type UnionToIntersection12251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12251<T> = UnionToIntersection12251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12251<T extends unknown[], V> = [...T, V];

type TuplifyUnion12251<T, L = LastOf12251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12251<TuplifyUnion12251<Exclude<T, L>>, L>;

type DeepPartial12251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12251<T[P]> }
  : T;

type Paths12251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12251<K, Paths12251<T[K], Prev12251[D]>> : never }[keyof T]
  : never;

type Prev12251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12251 {
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

type ConfigPaths12251 = Paths12251<NestedConfig12251>;

interface HeavyProps12251 {
  config: DeepPartial12251<NestedConfig12251>;
  path?: ConfigPaths12251;
}

const HeavyComponent12251 = memo(function HeavyComponent12251({ config }: HeavyProps12251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12251.displayName = 'HeavyComponent12251';
export default HeavyComponent12251;
