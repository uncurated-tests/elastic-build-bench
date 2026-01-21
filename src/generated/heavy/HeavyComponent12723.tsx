'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12723<T> = T extends (infer U)[]
  ? DeepReadonlyArray12723<U>
  : T extends object
  ? DeepReadonlyObject12723<T>
  : T;

interface DeepReadonlyArray12723<T> extends ReadonlyArray<DeepReadonly12723<T>> {}

type DeepReadonlyObject12723<T> = {
  readonly [P in keyof T]: DeepReadonly12723<T[P]>;
};

type UnionToIntersection12723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12723<T> = UnionToIntersection12723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12723<T extends unknown[], V> = [...T, V];

type TuplifyUnion12723<T, L = LastOf12723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12723<TuplifyUnion12723<Exclude<T, L>>, L>;

type DeepPartial12723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12723<T[P]> }
  : T;

type Paths12723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12723<K, Paths12723<T[K], Prev12723[D]>> : never }[keyof T]
  : never;

type Prev12723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12723 {
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

type ConfigPaths12723 = Paths12723<NestedConfig12723>;

interface HeavyProps12723 {
  config: DeepPartial12723<NestedConfig12723>;
  path?: ConfigPaths12723;
}

const HeavyComponent12723 = memo(function HeavyComponent12723({ config }: HeavyProps12723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12723.displayName = 'HeavyComponent12723';
export default HeavyComponent12723;
