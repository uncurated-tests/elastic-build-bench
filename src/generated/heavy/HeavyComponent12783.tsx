'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12783<T> = T extends (infer U)[]
  ? DeepReadonlyArray12783<U>
  : T extends object
  ? DeepReadonlyObject12783<T>
  : T;

interface DeepReadonlyArray12783<T> extends ReadonlyArray<DeepReadonly12783<T>> {}

type DeepReadonlyObject12783<T> = {
  readonly [P in keyof T]: DeepReadonly12783<T[P]>;
};

type UnionToIntersection12783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12783<T> = UnionToIntersection12783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12783<T extends unknown[], V> = [...T, V];

type TuplifyUnion12783<T, L = LastOf12783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12783<TuplifyUnion12783<Exclude<T, L>>, L>;

type DeepPartial12783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12783<T[P]> }
  : T;

type Paths12783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12783<K, Paths12783<T[K], Prev12783[D]>> : never }[keyof T]
  : never;

type Prev12783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12783 {
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

type ConfigPaths12783 = Paths12783<NestedConfig12783>;

interface HeavyProps12783 {
  config: DeepPartial12783<NestedConfig12783>;
  path?: ConfigPaths12783;
}

const HeavyComponent12783 = memo(function HeavyComponent12783({ config }: HeavyProps12783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12783.displayName = 'HeavyComponent12783';
export default HeavyComponent12783;
