'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12399<T> = T extends (infer U)[]
  ? DeepReadonlyArray12399<U>
  : T extends object
  ? DeepReadonlyObject12399<T>
  : T;

interface DeepReadonlyArray12399<T> extends ReadonlyArray<DeepReadonly12399<T>> {}

type DeepReadonlyObject12399<T> = {
  readonly [P in keyof T]: DeepReadonly12399<T[P]>;
};

type UnionToIntersection12399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12399<T> = UnionToIntersection12399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12399<T extends unknown[], V> = [...T, V];

type TuplifyUnion12399<T, L = LastOf12399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12399<TuplifyUnion12399<Exclude<T, L>>, L>;

type DeepPartial12399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12399<T[P]> }
  : T;

type Paths12399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12399<K, Paths12399<T[K], Prev12399[D]>> : never }[keyof T]
  : never;

type Prev12399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12399 {
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

type ConfigPaths12399 = Paths12399<NestedConfig12399>;

interface HeavyProps12399 {
  config: DeepPartial12399<NestedConfig12399>;
  path?: ConfigPaths12399;
}

const HeavyComponent12399 = memo(function HeavyComponent12399({ config }: HeavyProps12399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12399.displayName = 'HeavyComponent12399';
export default HeavyComponent12399;
