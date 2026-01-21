'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12207<T> = T extends (infer U)[]
  ? DeepReadonlyArray12207<U>
  : T extends object
  ? DeepReadonlyObject12207<T>
  : T;

interface DeepReadonlyArray12207<T> extends ReadonlyArray<DeepReadonly12207<T>> {}

type DeepReadonlyObject12207<T> = {
  readonly [P in keyof T]: DeepReadonly12207<T[P]>;
};

type UnionToIntersection12207<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12207<T> = UnionToIntersection12207<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12207<T extends unknown[], V> = [...T, V];

type TuplifyUnion12207<T, L = LastOf12207<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12207<TuplifyUnion12207<Exclude<T, L>>, L>;

type DeepPartial12207<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12207<T[P]> }
  : T;

type Paths12207<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12207<K, Paths12207<T[K], Prev12207[D]>> : never }[keyof T]
  : never;

type Prev12207 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12207<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12207 {
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

type ConfigPaths12207 = Paths12207<NestedConfig12207>;

interface HeavyProps12207 {
  config: DeepPartial12207<NestedConfig12207>;
  path?: ConfigPaths12207;
}

const HeavyComponent12207 = memo(function HeavyComponent12207({ config }: HeavyProps12207) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12207) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12207 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12207: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12207.displayName = 'HeavyComponent12207';
export default HeavyComponent12207;
