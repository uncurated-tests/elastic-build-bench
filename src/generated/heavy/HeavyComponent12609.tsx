'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12609<T> = T extends (infer U)[]
  ? DeepReadonlyArray12609<U>
  : T extends object
  ? DeepReadonlyObject12609<T>
  : T;

interface DeepReadonlyArray12609<T> extends ReadonlyArray<DeepReadonly12609<T>> {}

type DeepReadonlyObject12609<T> = {
  readonly [P in keyof T]: DeepReadonly12609<T[P]>;
};

type UnionToIntersection12609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12609<T> = UnionToIntersection12609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12609<T extends unknown[], V> = [...T, V];

type TuplifyUnion12609<T, L = LastOf12609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12609<TuplifyUnion12609<Exclude<T, L>>, L>;

type DeepPartial12609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12609<T[P]> }
  : T;

type Paths12609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12609<K, Paths12609<T[K], Prev12609[D]>> : never }[keyof T]
  : never;

type Prev12609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12609 {
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

type ConfigPaths12609 = Paths12609<NestedConfig12609>;

interface HeavyProps12609 {
  config: DeepPartial12609<NestedConfig12609>;
  path?: ConfigPaths12609;
}

const HeavyComponent12609 = memo(function HeavyComponent12609({ config }: HeavyProps12609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12609.displayName = 'HeavyComponent12609';
export default HeavyComponent12609;
