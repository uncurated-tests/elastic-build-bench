'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12309<T> = T extends (infer U)[]
  ? DeepReadonlyArray12309<U>
  : T extends object
  ? DeepReadonlyObject12309<T>
  : T;

interface DeepReadonlyArray12309<T> extends ReadonlyArray<DeepReadonly12309<T>> {}

type DeepReadonlyObject12309<T> = {
  readonly [P in keyof T]: DeepReadonly12309<T[P]>;
};

type UnionToIntersection12309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12309<T> = UnionToIntersection12309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12309<T extends unknown[], V> = [...T, V];

type TuplifyUnion12309<T, L = LastOf12309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12309<TuplifyUnion12309<Exclude<T, L>>, L>;

type DeepPartial12309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12309<T[P]> }
  : T;

type Paths12309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12309<K, Paths12309<T[K], Prev12309[D]>> : never }[keyof T]
  : never;

type Prev12309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12309 {
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

type ConfigPaths12309 = Paths12309<NestedConfig12309>;

interface HeavyProps12309 {
  config: DeepPartial12309<NestedConfig12309>;
  path?: ConfigPaths12309;
}

const HeavyComponent12309 = memo(function HeavyComponent12309({ config }: HeavyProps12309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12309.displayName = 'HeavyComponent12309';
export default HeavyComponent12309;
