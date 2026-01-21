'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12440<T> = T extends (infer U)[]
  ? DeepReadonlyArray12440<U>
  : T extends object
  ? DeepReadonlyObject12440<T>
  : T;

interface DeepReadonlyArray12440<T> extends ReadonlyArray<DeepReadonly12440<T>> {}

type DeepReadonlyObject12440<T> = {
  readonly [P in keyof T]: DeepReadonly12440<T[P]>;
};

type UnionToIntersection12440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12440<T> = UnionToIntersection12440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12440<T extends unknown[], V> = [...T, V];

type TuplifyUnion12440<T, L = LastOf12440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12440<TuplifyUnion12440<Exclude<T, L>>, L>;

type DeepPartial12440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12440<T[P]> }
  : T;

type Paths12440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12440<K, Paths12440<T[K], Prev12440[D]>> : never }[keyof T]
  : never;

type Prev12440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12440 {
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

type ConfigPaths12440 = Paths12440<NestedConfig12440>;

interface HeavyProps12440 {
  config: DeepPartial12440<NestedConfig12440>;
  path?: ConfigPaths12440;
}

const HeavyComponent12440 = memo(function HeavyComponent12440({ config }: HeavyProps12440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12440.displayName = 'HeavyComponent12440';
export default HeavyComponent12440;
