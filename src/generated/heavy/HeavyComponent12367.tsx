'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12367<T> = T extends (infer U)[]
  ? DeepReadonlyArray12367<U>
  : T extends object
  ? DeepReadonlyObject12367<T>
  : T;

interface DeepReadonlyArray12367<T> extends ReadonlyArray<DeepReadonly12367<T>> {}

type DeepReadonlyObject12367<T> = {
  readonly [P in keyof T]: DeepReadonly12367<T[P]>;
};

type UnionToIntersection12367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12367<T> = UnionToIntersection12367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12367<T extends unknown[], V> = [...T, V];

type TuplifyUnion12367<T, L = LastOf12367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12367<TuplifyUnion12367<Exclude<T, L>>, L>;

type DeepPartial12367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12367<T[P]> }
  : T;

type Paths12367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12367<K, Paths12367<T[K], Prev12367[D]>> : never }[keyof T]
  : never;

type Prev12367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12367 {
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

type ConfigPaths12367 = Paths12367<NestedConfig12367>;

interface HeavyProps12367 {
  config: DeepPartial12367<NestedConfig12367>;
  path?: ConfigPaths12367;
}

const HeavyComponent12367 = memo(function HeavyComponent12367({ config }: HeavyProps12367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12367.displayName = 'HeavyComponent12367';
export default HeavyComponent12367;
