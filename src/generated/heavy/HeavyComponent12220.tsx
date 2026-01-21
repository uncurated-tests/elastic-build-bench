'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12220<T> = T extends (infer U)[]
  ? DeepReadonlyArray12220<U>
  : T extends object
  ? DeepReadonlyObject12220<T>
  : T;

interface DeepReadonlyArray12220<T> extends ReadonlyArray<DeepReadonly12220<T>> {}

type DeepReadonlyObject12220<T> = {
  readonly [P in keyof T]: DeepReadonly12220<T[P]>;
};

type UnionToIntersection12220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12220<T> = UnionToIntersection12220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12220<T extends unknown[], V> = [...T, V];

type TuplifyUnion12220<T, L = LastOf12220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12220<TuplifyUnion12220<Exclude<T, L>>, L>;

type DeepPartial12220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12220<T[P]> }
  : T;

type Paths12220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12220<K, Paths12220<T[K], Prev12220[D]>> : never }[keyof T]
  : never;

type Prev12220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12220 {
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

type ConfigPaths12220 = Paths12220<NestedConfig12220>;

interface HeavyProps12220 {
  config: DeepPartial12220<NestedConfig12220>;
  path?: ConfigPaths12220;
}

const HeavyComponent12220 = memo(function HeavyComponent12220({ config }: HeavyProps12220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12220.displayName = 'HeavyComponent12220';
export default HeavyComponent12220;
