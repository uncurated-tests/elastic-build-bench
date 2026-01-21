'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12813<T> = T extends (infer U)[]
  ? DeepReadonlyArray12813<U>
  : T extends object
  ? DeepReadonlyObject12813<T>
  : T;

interface DeepReadonlyArray12813<T> extends ReadonlyArray<DeepReadonly12813<T>> {}

type DeepReadonlyObject12813<T> = {
  readonly [P in keyof T]: DeepReadonly12813<T[P]>;
};

type UnionToIntersection12813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12813<T> = UnionToIntersection12813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12813<T extends unknown[], V> = [...T, V];

type TuplifyUnion12813<T, L = LastOf12813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12813<TuplifyUnion12813<Exclude<T, L>>, L>;

type DeepPartial12813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12813<T[P]> }
  : T;

type Paths12813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12813<K, Paths12813<T[K], Prev12813[D]>> : never }[keyof T]
  : never;

type Prev12813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12813 {
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

type ConfigPaths12813 = Paths12813<NestedConfig12813>;

interface HeavyProps12813 {
  config: DeepPartial12813<NestedConfig12813>;
  path?: ConfigPaths12813;
}

const HeavyComponent12813 = memo(function HeavyComponent12813({ config }: HeavyProps12813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12813.displayName = 'HeavyComponent12813';
export default HeavyComponent12813;
