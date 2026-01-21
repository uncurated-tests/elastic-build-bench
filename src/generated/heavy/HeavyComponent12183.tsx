'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12183<T> = T extends (infer U)[]
  ? DeepReadonlyArray12183<U>
  : T extends object
  ? DeepReadonlyObject12183<T>
  : T;

interface DeepReadonlyArray12183<T> extends ReadonlyArray<DeepReadonly12183<T>> {}

type DeepReadonlyObject12183<T> = {
  readonly [P in keyof T]: DeepReadonly12183<T[P]>;
};

type UnionToIntersection12183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12183<T> = UnionToIntersection12183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12183<T extends unknown[], V> = [...T, V];

type TuplifyUnion12183<T, L = LastOf12183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12183<TuplifyUnion12183<Exclude<T, L>>, L>;

type DeepPartial12183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12183<T[P]> }
  : T;

type Paths12183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12183<K, Paths12183<T[K], Prev12183[D]>> : never }[keyof T]
  : never;

type Prev12183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12183 {
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

type ConfigPaths12183 = Paths12183<NestedConfig12183>;

interface HeavyProps12183 {
  config: DeepPartial12183<NestedConfig12183>;
  path?: ConfigPaths12183;
}

const HeavyComponent12183 = memo(function HeavyComponent12183({ config }: HeavyProps12183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12183.displayName = 'HeavyComponent12183';
export default HeavyComponent12183;
