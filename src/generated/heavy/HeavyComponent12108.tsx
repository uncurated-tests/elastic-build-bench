'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12108<T> = T extends (infer U)[]
  ? DeepReadonlyArray12108<U>
  : T extends object
  ? DeepReadonlyObject12108<T>
  : T;

interface DeepReadonlyArray12108<T> extends ReadonlyArray<DeepReadonly12108<T>> {}

type DeepReadonlyObject12108<T> = {
  readonly [P in keyof T]: DeepReadonly12108<T[P]>;
};

type UnionToIntersection12108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12108<T> = UnionToIntersection12108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12108<T extends unknown[], V> = [...T, V];

type TuplifyUnion12108<T, L = LastOf12108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12108<TuplifyUnion12108<Exclude<T, L>>, L>;

type DeepPartial12108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12108<T[P]> }
  : T;

type Paths12108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12108<K, Paths12108<T[K], Prev12108[D]>> : never }[keyof T]
  : never;

type Prev12108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12108 {
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

type ConfigPaths12108 = Paths12108<NestedConfig12108>;

interface HeavyProps12108 {
  config: DeepPartial12108<NestedConfig12108>;
  path?: ConfigPaths12108;
}

const HeavyComponent12108 = memo(function HeavyComponent12108({ config }: HeavyProps12108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12108.displayName = 'HeavyComponent12108';
export default HeavyComponent12108;
