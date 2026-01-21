'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12943<T> = T extends (infer U)[]
  ? DeepReadonlyArray12943<U>
  : T extends object
  ? DeepReadonlyObject12943<T>
  : T;

interface DeepReadonlyArray12943<T> extends ReadonlyArray<DeepReadonly12943<T>> {}

type DeepReadonlyObject12943<T> = {
  readonly [P in keyof T]: DeepReadonly12943<T[P]>;
};

type UnionToIntersection12943<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12943<T> = UnionToIntersection12943<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12943<T extends unknown[], V> = [...T, V];

type TuplifyUnion12943<T, L = LastOf12943<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12943<TuplifyUnion12943<Exclude<T, L>>, L>;

type DeepPartial12943<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12943<T[P]> }
  : T;

type Paths12943<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12943<K, Paths12943<T[K], Prev12943[D]>> : never }[keyof T]
  : never;

type Prev12943 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12943<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12943 {
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

type ConfigPaths12943 = Paths12943<NestedConfig12943>;

interface HeavyProps12943 {
  config: DeepPartial12943<NestedConfig12943>;
  path?: ConfigPaths12943;
}

const HeavyComponent12943 = memo(function HeavyComponent12943({ config }: HeavyProps12943) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12943) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12943 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12943: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12943.displayName = 'HeavyComponent12943';
export default HeavyComponent12943;
