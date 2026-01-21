'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12530<T> = T extends (infer U)[]
  ? DeepReadonlyArray12530<U>
  : T extends object
  ? DeepReadonlyObject12530<T>
  : T;

interface DeepReadonlyArray12530<T> extends ReadonlyArray<DeepReadonly12530<T>> {}

type DeepReadonlyObject12530<T> = {
  readonly [P in keyof T]: DeepReadonly12530<T[P]>;
};

type UnionToIntersection12530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12530<T> = UnionToIntersection12530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12530<T extends unknown[], V> = [...T, V];

type TuplifyUnion12530<T, L = LastOf12530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12530<TuplifyUnion12530<Exclude<T, L>>, L>;

type DeepPartial12530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12530<T[P]> }
  : T;

type Paths12530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12530<K, Paths12530<T[K], Prev12530[D]>> : never }[keyof T]
  : never;

type Prev12530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12530 {
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

type ConfigPaths12530 = Paths12530<NestedConfig12530>;

interface HeavyProps12530 {
  config: DeepPartial12530<NestedConfig12530>;
  path?: ConfigPaths12530;
}

const HeavyComponent12530 = memo(function HeavyComponent12530({ config }: HeavyProps12530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12530.displayName = 'HeavyComponent12530';
export default HeavyComponent12530;
