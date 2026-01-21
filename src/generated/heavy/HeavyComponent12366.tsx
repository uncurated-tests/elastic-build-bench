'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12366<T> = T extends (infer U)[]
  ? DeepReadonlyArray12366<U>
  : T extends object
  ? DeepReadonlyObject12366<T>
  : T;

interface DeepReadonlyArray12366<T> extends ReadonlyArray<DeepReadonly12366<T>> {}

type DeepReadonlyObject12366<T> = {
  readonly [P in keyof T]: DeepReadonly12366<T[P]>;
};

type UnionToIntersection12366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12366<T> = UnionToIntersection12366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12366<T extends unknown[], V> = [...T, V];

type TuplifyUnion12366<T, L = LastOf12366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12366<TuplifyUnion12366<Exclude<T, L>>, L>;

type DeepPartial12366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12366<T[P]> }
  : T;

type Paths12366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12366<K, Paths12366<T[K], Prev12366[D]>> : never }[keyof T]
  : never;

type Prev12366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12366 {
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

type ConfigPaths12366 = Paths12366<NestedConfig12366>;

interface HeavyProps12366 {
  config: DeepPartial12366<NestedConfig12366>;
  path?: ConfigPaths12366;
}

const HeavyComponent12366 = memo(function HeavyComponent12366({ config }: HeavyProps12366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12366.displayName = 'HeavyComponent12366';
export default HeavyComponent12366;
