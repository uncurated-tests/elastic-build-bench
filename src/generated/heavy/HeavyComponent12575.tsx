'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12575<T> = T extends (infer U)[]
  ? DeepReadonlyArray12575<U>
  : T extends object
  ? DeepReadonlyObject12575<T>
  : T;

interface DeepReadonlyArray12575<T> extends ReadonlyArray<DeepReadonly12575<T>> {}

type DeepReadonlyObject12575<T> = {
  readonly [P in keyof T]: DeepReadonly12575<T[P]>;
};

type UnionToIntersection12575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12575<T> = UnionToIntersection12575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12575<T extends unknown[], V> = [...T, V];

type TuplifyUnion12575<T, L = LastOf12575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12575<TuplifyUnion12575<Exclude<T, L>>, L>;

type DeepPartial12575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12575<T[P]> }
  : T;

type Paths12575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12575<K, Paths12575<T[K], Prev12575[D]>> : never }[keyof T]
  : never;

type Prev12575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12575 {
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

type ConfigPaths12575 = Paths12575<NestedConfig12575>;

interface HeavyProps12575 {
  config: DeepPartial12575<NestedConfig12575>;
  path?: ConfigPaths12575;
}

const HeavyComponent12575 = memo(function HeavyComponent12575({ config }: HeavyProps12575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12575.displayName = 'HeavyComponent12575';
export default HeavyComponent12575;
