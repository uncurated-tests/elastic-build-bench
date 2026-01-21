'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12428<T> = T extends (infer U)[]
  ? DeepReadonlyArray12428<U>
  : T extends object
  ? DeepReadonlyObject12428<T>
  : T;

interface DeepReadonlyArray12428<T> extends ReadonlyArray<DeepReadonly12428<T>> {}

type DeepReadonlyObject12428<T> = {
  readonly [P in keyof T]: DeepReadonly12428<T[P]>;
};

type UnionToIntersection12428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12428<T> = UnionToIntersection12428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12428<T extends unknown[], V> = [...T, V];

type TuplifyUnion12428<T, L = LastOf12428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12428<TuplifyUnion12428<Exclude<T, L>>, L>;

type DeepPartial12428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12428<T[P]> }
  : T;

type Paths12428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12428<K, Paths12428<T[K], Prev12428[D]>> : never }[keyof T]
  : never;

type Prev12428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12428 {
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

type ConfigPaths12428 = Paths12428<NestedConfig12428>;

interface HeavyProps12428 {
  config: DeepPartial12428<NestedConfig12428>;
  path?: ConfigPaths12428;
}

const HeavyComponent12428 = memo(function HeavyComponent12428({ config }: HeavyProps12428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12428.displayName = 'HeavyComponent12428';
export default HeavyComponent12428;
