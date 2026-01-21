'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12054<T> = T extends (infer U)[]
  ? DeepReadonlyArray12054<U>
  : T extends object
  ? DeepReadonlyObject12054<T>
  : T;

interface DeepReadonlyArray12054<T> extends ReadonlyArray<DeepReadonly12054<T>> {}

type DeepReadonlyObject12054<T> = {
  readonly [P in keyof T]: DeepReadonly12054<T[P]>;
};

type UnionToIntersection12054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12054<T> = UnionToIntersection12054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12054<T extends unknown[], V> = [...T, V];

type TuplifyUnion12054<T, L = LastOf12054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12054<TuplifyUnion12054<Exclude<T, L>>, L>;

type DeepPartial12054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12054<T[P]> }
  : T;

type Paths12054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12054<K, Paths12054<T[K], Prev12054[D]>> : never }[keyof T]
  : never;

type Prev12054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12054 {
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

type ConfigPaths12054 = Paths12054<NestedConfig12054>;

interface HeavyProps12054 {
  config: DeepPartial12054<NestedConfig12054>;
  path?: ConfigPaths12054;
}

const HeavyComponent12054 = memo(function HeavyComponent12054({ config }: HeavyProps12054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12054.displayName = 'HeavyComponent12054';
export default HeavyComponent12054;
