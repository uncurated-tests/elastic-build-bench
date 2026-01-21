'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12374<T> = T extends (infer U)[]
  ? DeepReadonlyArray12374<U>
  : T extends object
  ? DeepReadonlyObject12374<T>
  : T;

interface DeepReadonlyArray12374<T> extends ReadonlyArray<DeepReadonly12374<T>> {}

type DeepReadonlyObject12374<T> = {
  readonly [P in keyof T]: DeepReadonly12374<T[P]>;
};

type UnionToIntersection12374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12374<T> = UnionToIntersection12374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12374<T extends unknown[], V> = [...T, V];

type TuplifyUnion12374<T, L = LastOf12374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12374<TuplifyUnion12374<Exclude<T, L>>, L>;

type DeepPartial12374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12374<T[P]> }
  : T;

type Paths12374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12374<K, Paths12374<T[K], Prev12374[D]>> : never }[keyof T]
  : never;

type Prev12374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12374 {
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

type ConfigPaths12374 = Paths12374<NestedConfig12374>;

interface HeavyProps12374 {
  config: DeepPartial12374<NestedConfig12374>;
  path?: ConfigPaths12374;
}

const HeavyComponent12374 = memo(function HeavyComponent12374({ config }: HeavyProps12374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12374.displayName = 'HeavyComponent12374';
export default HeavyComponent12374;
