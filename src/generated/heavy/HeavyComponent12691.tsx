'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12691<T> = T extends (infer U)[]
  ? DeepReadonlyArray12691<U>
  : T extends object
  ? DeepReadonlyObject12691<T>
  : T;

interface DeepReadonlyArray12691<T> extends ReadonlyArray<DeepReadonly12691<T>> {}

type DeepReadonlyObject12691<T> = {
  readonly [P in keyof T]: DeepReadonly12691<T[P]>;
};

type UnionToIntersection12691<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12691<T> = UnionToIntersection12691<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12691<T extends unknown[], V> = [...T, V];

type TuplifyUnion12691<T, L = LastOf12691<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12691<TuplifyUnion12691<Exclude<T, L>>, L>;

type DeepPartial12691<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12691<T[P]> }
  : T;

type Paths12691<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12691<K, Paths12691<T[K], Prev12691[D]>> : never }[keyof T]
  : never;

type Prev12691 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12691<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12691 {
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

type ConfigPaths12691 = Paths12691<NestedConfig12691>;

interface HeavyProps12691 {
  config: DeepPartial12691<NestedConfig12691>;
  path?: ConfigPaths12691;
}

const HeavyComponent12691 = memo(function HeavyComponent12691({ config }: HeavyProps12691) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12691) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12691 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12691: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12691.displayName = 'HeavyComponent12691';
export default HeavyComponent12691;
