'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12586<T> = T extends (infer U)[]
  ? DeepReadonlyArray12586<U>
  : T extends object
  ? DeepReadonlyObject12586<T>
  : T;

interface DeepReadonlyArray12586<T> extends ReadonlyArray<DeepReadonly12586<T>> {}

type DeepReadonlyObject12586<T> = {
  readonly [P in keyof T]: DeepReadonly12586<T[P]>;
};

type UnionToIntersection12586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12586<T> = UnionToIntersection12586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12586<T extends unknown[], V> = [...T, V];

type TuplifyUnion12586<T, L = LastOf12586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12586<TuplifyUnion12586<Exclude<T, L>>, L>;

type DeepPartial12586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12586<T[P]> }
  : T;

type Paths12586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12586<K, Paths12586<T[K], Prev12586[D]>> : never }[keyof T]
  : never;

type Prev12586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12586 {
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

type ConfigPaths12586 = Paths12586<NestedConfig12586>;

interface HeavyProps12586 {
  config: DeepPartial12586<NestedConfig12586>;
  path?: ConfigPaths12586;
}

const HeavyComponent12586 = memo(function HeavyComponent12586({ config }: HeavyProps12586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12586.displayName = 'HeavyComponent12586';
export default HeavyComponent12586;
