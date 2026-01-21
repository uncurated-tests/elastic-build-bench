'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12127<T> = T extends (infer U)[]
  ? DeepReadonlyArray12127<U>
  : T extends object
  ? DeepReadonlyObject12127<T>
  : T;

interface DeepReadonlyArray12127<T> extends ReadonlyArray<DeepReadonly12127<T>> {}

type DeepReadonlyObject12127<T> = {
  readonly [P in keyof T]: DeepReadonly12127<T[P]>;
};

type UnionToIntersection12127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12127<T> = UnionToIntersection12127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12127<T extends unknown[], V> = [...T, V];

type TuplifyUnion12127<T, L = LastOf12127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12127<TuplifyUnion12127<Exclude<T, L>>, L>;

type DeepPartial12127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12127<T[P]> }
  : T;

type Paths12127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12127<K, Paths12127<T[K], Prev12127[D]>> : never }[keyof T]
  : never;

type Prev12127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12127 {
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

type ConfigPaths12127 = Paths12127<NestedConfig12127>;

interface HeavyProps12127 {
  config: DeepPartial12127<NestedConfig12127>;
  path?: ConfigPaths12127;
}

const HeavyComponent12127 = memo(function HeavyComponent12127({ config }: HeavyProps12127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12127.displayName = 'HeavyComponent12127';
export default HeavyComponent12127;
