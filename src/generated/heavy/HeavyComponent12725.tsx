'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12725<T> = T extends (infer U)[]
  ? DeepReadonlyArray12725<U>
  : T extends object
  ? DeepReadonlyObject12725<T>
  : T;

interface DeepReadonlyArray12725<T> extends ReadonlyArray<DeepReadonly12725<T>> {}

type DeepReadonlyObject12725<T> = {
  readonly [P in keyof T]: DeepReadonly12725<T[P]>;
};

type UnionToIntersection12725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12725<T> = UnionToIntersection12725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12725<T extends unknown[], V> = [...T, V];

type TuplifyUnion12725<T, L = LastOf12725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12725<TuplifyUnion12725<Exclude<T, L>>, L>;

type DeepPartial12725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12725<T[P]> }
  : T;

type Paths12725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12725<K, Paths12725<T[K], Prev12725[D]>> : never }[keyof T]
  : never;

type Prev12725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12725 {
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

type ConfigPaths12725 = Paths12725<NestedConfig12725>;

interface HeavyProps12725 {
  config: DeepPartial12725<NestedConfig12725>;
  path?: ConfigPaths12725;
}

const HeavyComponent12725 = memo(function HeavyComponent12725({ config }: HeavyProps12725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12725.displayName = 'HeavyComponent12725';
export default HeavyComponent12725;
