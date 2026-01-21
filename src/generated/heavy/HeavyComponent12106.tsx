'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12106<T> = T extends (infer U)[]
  ? DeepReadonlyArray12106<U>
  : T extends object
  ? DeepReadonlyObject12106<T>
  : T;

interface DeepReadonlyArray12106<T> extends ReadonlyArray<DeepReadonly12106<T>> {}

type DeepReadonlyObject12106<T> = {
  readonly [P in keyof T]: DeepReadonly12106<T[P]>;
};

type UnionToIntersection12106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12106<T> = UnionToIntersection12106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12106<T extends unknown[], V> = [...T, V];

type TuplifyUnion12106<T, L = LastOf12106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12106<TuplifyUnion12106<Exclude<T, L>>, L>;

type DeepPartial12106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12106<T[P]> }
  : T;

type Paths12106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12106<K, Paths12106<T[K], Prev12106[D]>> : never }[keyof T]
  : never;

type Prev12106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12106 {
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

type ConfigPaths12106 = Paths12106<NestedConfig12106>;

interface HeavyProps12106 {
  config: DeepPartial12106<NestedConfig12106>;
  path?: ConfigPaths12106;
}

const HeavyComponent12106 = memo(function HeavyComponent12106({ config }: HeavyProps12106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12106.displayName = 'HeavyComponent12106';
export default HeavyComponent12106;
