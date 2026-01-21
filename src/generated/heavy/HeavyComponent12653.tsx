'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12653<T> = T extends (infer U)[]
  ? DeepReadonlyArray12653<U>
  : T extends object
  ? DeepReadonlyObject12653<T>
  : T;

interface DeepReadonlyArray12653<T> extends ReadonlyArray<DeepReadonly12653<T>> {}

type DeepReadonlyObject12653<T> = {
  readonly [P in keyof T]: DeepReadonly12653<T[P]>;
};

type UnionToIntersection12653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12653<T> = UnionToIntersection12653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12653<T extends unknown[], V> = [...T, V];

type TuplifyUnion12653<T, L = LastOf12653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12653<TuplifyUnion12653<Exclude<T, L>>, L>;

type DeepPartial12653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12653<T[P]> }
  : T;

type Paths12653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12653<K, Paths12653<T[K], Prev12653[D]>> : never }[keyof T]
  : never;

type Prev12653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12653 {
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

type ConfigPaths12653 = Paths12653<NestedConfig12653>;

interface HeavyProps12653 {
  config: DeepPartial12653<NestedConfig12653>;
  path?: ConfigPaths12653;
}

const HeavyComponent12653 = memo(function HeavyComponent12653({ config }: HeavyProps12653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12653.displayName = 'HeavyComponent12653';
export default HeavyComponent12653;
