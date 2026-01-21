'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12113<T> = T extends (infer U)[]
  ? DeepReadonlyArray12113<U>
  : T extends object
  ? DeepReadonlyObject12113<T>
  : T;

interface DeepReadonlyArray12113<T> extends ReadonlyArray<DeepReadonly12113<T>> {}

type DeepReadonlyObject12113<T> = {
  readonly [P in keyof T]: DeepReadonly12113<T[P]>;
};

type UnionToIntersection12113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12113<T> = UnionToIntersection12113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12113<T extends unknown[], V> = [...T, V];

type TuplifyUnion12113<T, L = LastOf12113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12113<TuplifyUnion12113<Exclude<T, L>>, L>;

type DeepPartial12113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12113<T[P]> }
  : T;

type Paths12113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12113<K, Paths12113<T[K], Prev12113[D]>> : never }[keyof T]
  : never;

type Prev12113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12113 {
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

type ConfigPaths12113 = Paths12113<NestedConfig12113>;

interface HeavyProps12113 {
  config: DeepPartial12113<NestedConfig12113>;
  path?: ConfigPaths12113;
}

const HeavyComponent12113 = memo(function HeavyComponent12113({ config }: HeavyProps12113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12113.displayName = 'HeavyComponent12113';
export default HeavyComponent12113;
