'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12888<T> = T extends (infer U)[]
  ? DeepReadonlyArray12888<U>
  : T extends object
  ? DeepReadonlyObject12888<T>
  : T;

interface DeepReadonlyArray12888<T> extends ReadonlyArray<DeepReadonly12888<T>> {}

type DeepReadonlyObject12888<T> = {
  readonly [P in keyof T]: DeepReadonly12888<T[P]>;
};

type UnionToIntersection12888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12888<T> = UnionToIntersection12888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12888<T extends unknown[], V> = [...T, V];

type TuplifyUnion12888<T, L = LastOf12888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12888<TuplifyUnion12888<Exclude<T, L>>, L>;

type DeepPartial12888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12888<T[P]> }
  : T;

type Paths12888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12888<K, Paths12888<T[K], Prev12888[D]>> : never }[keyof T]
  : never;

type Prev12888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12888 {
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

type ConfigPaths12888 = Paths12888<NestedConfig12888>;

interface HeavyProps12888 {
  config: DeepPartial12888<NestedConfig12888>;
  path?: ConfigPaths12888;
}

const HeavyComponent12888 = memo(function HeavyComponent12888({ config }: HeavyProps12888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12888.displayName = 'HeavyComponent12888';
export default HeavyComponent12888;
