'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12624<T> = T extends (infer U)[]
  ? DeepReadonlyArray12624<U>
  : T extends object
  ? DeepReadonlyObject12624<T>
  : T;

interface DeepReadonlyArray12624<T> extends ReadonlyArray<DeepReadonly12624<T>> {}

type DeepReadonlyObject12624<T> = {
  readonly [P in keyof T]: DeepReadonly12624<T[P]>;
};

type UnionToIntersection12624<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12624<T> = UnionToIntersection12624<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12624<T extends unknown[], V> = [...T, V];

type TuplifyUnion12624<T, L = LastOf12624<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12624<TuplifyUnion12624<Exclude<T, L>>, L>;

type DeepPartial12624<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12624<T[P]> }
  : T;

type Paths12624<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12624<K, Paths12624<T[K], Prev12624[D]>> : never }[keyof T]
  : never;

type Prev12624 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12624<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12624 {
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

type ConfigPaths12624 = Paths12624<NestedConfig12624>;

interface HeavyProps12624 {
  config: DeepPartial12624<NestedConfig12624>;
  path?: ConfigPaths12624;
}

const HeavyComponent12624 = memo(function HeavyComponent12624({ config }: HeavyProps12624) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12624) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12624 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12624: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12624.displayName = 'HeavyComponent12624';
export default HeavyComponent12624;
