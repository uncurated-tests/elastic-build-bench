'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12634<T> = T extends (infer U)[]
  ? DeepReadonlyArray12634<U>
  : T extends object
  ? DeepReadonlyObject12634<T>
  : T;

interface DeepReadonlyArray12634<T> extends ReadonlyArray<DeepReadonly12634<T>> {}

type DeepReadonlyObject12634<T> = {
  readonly [P in keyof T]: DeepReadonly12634<T[P]>;
};

type UnionToIntersection12634<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12634<T> = UnionToIntersection12634<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12634<T extends unknown[], V> = [...T, V];

type TuplifyUnion12634<T, L = LastOf12634<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12634<TuplifyUnion12634<Exclude<T, L>>, L>;

type DeepPartial12634<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12634<T[P]> }
  : T;

type Paths12634<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12634<K, Paths12634<T[K], Prev12634[D]>> : never }[keyof T]
  : never;

type Prev12634 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12634<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12634 {
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

type ConfigPaths12634 = Paths12634<NestedConfig12634>;

interface HeavyProps12634 {
  config: DeepPartial12634<NestedConfig12634>;
  path?: ConfigPaths12634;
}

const HeavyComponent12634 = memo(function HeavyComponent12634({ config }: HeavyProps12634) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12634) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12634 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12634: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12634.displayName = 'HeavyComponent12634';
export default HeavyComponent12634;
