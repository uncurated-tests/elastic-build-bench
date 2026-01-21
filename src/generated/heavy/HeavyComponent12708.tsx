'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12708<T> = T extends (infer U)[]
  ? DeepReadonlyArray12708<U>
  : T extends object
  ? DeepReadonlyObject12708<T>
  : T;

interface DeepReadonlyArray12708<T> extends ReadonlyArray<DeepReadonly12708<T>> {}

type DeepReadonlyObject12708<T> = {
  readonly [P in keyof T]: DeepReadonly12708<T[P]>;
};

type UnionToIntersection12708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12708<T> = UnionToIntersection12708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12708<T extends unknown[], V> = [...T, V];

type TuplifyUnion12708<T, L = LastOf12708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12708<TuplifyUnion12708<Exclude<T, L>>, L>;

type DeepPartial12708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12708<T[P]> }
  : T;

type Paths12708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12708<K, Paths12708<T[K], Prev12708[D]>> : never }[keyof T]
  : never;

type Prev12708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12708 {
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

type ConfigPaths12708 = Paths12708<NestedConfig12708>;

interface HeavyProps12708 {
  config: DeepPartial12708<NestedConfig12708>;
  path?: ConfigPaths12708;
}

const HeavyComponent12708 = memo(function HeavyComponent12708({ config }: HeavyProps12708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12708.displayName = 'HeavyComponent12708';
export default HeavyComponent12708;
