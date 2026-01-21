'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12236<T> = T extends (infer U)[]
  ? DeepReadonlyArray12236<U>
  : T extends object
  ? DeepReadonlyObject12236<T>
  : T;

interface DeepReadonlyArray12236<T> extends ReadonlyArray<DeepReadonly12236<T>> {}

type DeepReadonlyObject12236<T> = {
  readonly [P in keyof T]: DeepReadonly12236<T[P]>;
};

type UnionToIntersection12236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12236<T> = UnionToIntersection12236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12236<T extends unknown[], V> = [...T, V];

type TuplifyUnion12236<T, L = LastOf12236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12236<TuplifyUnion12236<Exclude<T, L>>, L>;

type DeepPartial12236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12236<T[P]> }
  : T;

type Paths12236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12236<K, Paths12236<T[K], Prev12236[D]>> : never }[keyof T]
  : never;

type Prev12236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12236 {
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

type ConfigPaths12236 = Paths12236<NestedConfig12236>;

interface HeavyProps12236 {
  config: DeepPartial12236<NestedConfig12236>;
  path?: ConfigPaths12236;
}

const HeavyComponent12236 = memo(function HeavyComponent12236({ config }: HeavyProps12236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12236.displayName = 'HeavyComponent12236';
export default HeavyComponent12236;
