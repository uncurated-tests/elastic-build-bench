'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12047<T> = T extends (infer U)[]
  ? DeepReadonlyArray12047<U>
  : T extends object
  ? DeepReadonlyObject12047<T>
  : T;

interface DeepReadonlyArray12047<T> extends ReadonlyArray<DeepReadonly12047<T>> {}

type DeepReadonlyObject12047<T> = {
  readonly [P in keyof T]: DeepReadonly12047<T[P]>;
};

type UnionToIntersection12047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12047<T> = UnionToIntersection12047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12047<T extends unknown[], V> = [...T, V];

type TuplifyUnion12047<T, L = LastOf12047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12047<TuplifyUnion12047<Exclude<T, L>>, L>;

type DeepPartial12047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12047<T[P]> }
  : T;

type Paths12047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12047<K, Paths12047<T[K], Prev12047[D]>> : never }[keyof T]
  : never;

type Prev12047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12047 {
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

type ConfigPaths12047 = Paths12047<NestedConfig12047>;

interface HeavyProps12047 {
  config: DeepPartial12047<NestedConfig12047>;
  path?: ConfigPaths12047;
}

const HeavyComponent12047 = memo(function HeavyComponent12047({ config }: HeavyProps12047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12047.displayName = 'HeavyComponent12047';
export default HeavyComponent12047;
