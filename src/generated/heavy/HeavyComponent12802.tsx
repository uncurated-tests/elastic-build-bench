'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12802<T> = T extends (infer U)[]
  ? DeepReadonlyArray12802<U>
  : T extends object
  ? DeepReadonlyObject12802<T>
  : T;

interface DeepReadonlyArray12802<T> extends ReadonlyArray<DeepReadonly12802<T>> {}

type DeepReadonlyObject12802<T> = {
  readonly [P in keyof T]: DeepReadonly12802<T[P]>;
};

type UnionToIntersection12802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12802<T> = UnionToIntersection12802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12802<T extends unknown[], V> = [...T, V];

type TuplifyUnion12802<T, L = LastOf12802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12802<TuplifyUnion12802<Exclude<T, L>>, L>;

type DeepPartial12802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12802<T[P]> }
  : T;

type Paths12802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12802<K, Paths12802<T[K], Prev12802[D]>> : never }[keyof T]
  : never;

type Prev12802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12802 {
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

type ConfigPaths12802 = Paths12802<NestedConfig12802>;

interface HeavyProps12802 {
  config: DeepPartial12802<NestedConfig12802>;
  path?: ConfigPaths12802;
}

const HeavyComponent12802 = memo(function HeavyComponent12802({ config }: HeavyProps12802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12802.displayName = 'HeavyComponent12802';
export default HeavyComponent12802;
