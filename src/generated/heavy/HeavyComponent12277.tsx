'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12277<T> = T extends (infer U)[]
  ? DeepReadonlyArray12277<U>
  : T extends object
  ? DeepReadonlyObject12277<T>
  : T;

interface DeepReadonlyArray12277<T> extends ReadonlyArray<DeepReadonly12277<T>> {}

type DeepReadonlyObject12277<T> = {
  readonly [P in keyof T]: DeepReadonly12277<T[P]>;
};

type UnionToIntersection12277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12277<T> = UnionToIntersection12277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12277<T extends unknown[], V> = [...T, V];

type TuplifyUnion12277<T, L = LastOf12277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12277<TuplifyUnion12277<Exclude<T, L>>, L>;

type DeepPartial12277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12277<T[P]> }
  : T;

type Paths12277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12277<K, Paths12277<T[K], Prev12277[D]>> : never }[keyof T]
  : never;

type Prev12277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12277 {
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

type ConfigPaths12277 = Paths12277<NestedConfig12277>;

interface HeavyProps12277 {
  config: DeepPartial12277<NestedConfig12277>;
  path?: ConfigPaths12277;
}

const HeavyComponent12277 = memo(function HeavyComponent12277({ config }: HeavyProps12277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12277.displayName = 'HeavyComponent12277';
export default HeavyComponent12277;
