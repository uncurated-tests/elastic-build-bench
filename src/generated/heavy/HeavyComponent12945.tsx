'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12945<T> = T extends (infer U)[]
  ? DeepReadonlyArray12945<U>
  : T extends object
  ? DeepReadonlyObject12945<T>
  : T;

interface DeepReadonlyArray12945<T> extends ReadonlyArray<DeepReadonly12945<T>> {}

type DeepReadonlyObject12945<T> = {
  readonly [P in keyof T]: DeepReadonly12945<T[P]>;
};

type UnionToIntersection12945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12945<T> = UnionToIntersection12945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12945<T extends unknown[], V> = [...T, V];

type TuplifyUnion12945<T, L = LastOf12945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12945<TuplifyUnion12945<Exclude<T, L>>, L>;

type DeepPartial12945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12945<T[P]> }
  : T;

type Paths12945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12945<K, Paths12945<T[K], Prev12945[D]>> : never }[keyof T]
  : never;

type Prev12945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12945 {
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

type ConfigPaths12945 = Paths12945<NestedConfig12945>;

interface HeavyProps12945 {
  config: DeepPartial12945<NestedConfig12945>;
  path?: ConfigPaths12945;
}

const HeavyComponent12945 = memo(function HeavyComponent12945({ config }: HeavyProps12945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12945.displayName = 'HeavyComponent12945';
export default HeavyComponent12945;
