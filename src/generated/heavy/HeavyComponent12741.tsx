'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12741<T> = T extends (infer U)[]
  ? DeepReadonlyArray12741<U>
  : T extends object
  ? DeepReadonlyObject12741<T>
  : T;

interface DeepReadonlyArray12741<T> extends ReadonlyArray<DeepReadonly12741<T>> {}

type DeepReadonlyObject12741<T> = {
  readonly [P in keyof T]: DeepReadonly12741<T[P]>;
};

type UnionToIntersection12741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12741<T> = UnionToIntersection12741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12741<T extends unknown[], V> = [...T, V];

type TuplifyUnion12741<T, L = LastOf12741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12741<TuplifyUnion12741<Exclude<T, L>>, L>;

type DeepPartial12741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12741<T[P]> }
  : T;

type Paths12741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12741<K, Paths12741<T[K], Prev12741[D]>> : never }[keyof T]
  : never;

type Prev12741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12741 {
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

type ConfigPaths12741 = Paths12741<NestedConfig12741>;

interface HeavyProps12741 {
  config: DeepPartial12741<NestedConfig12741>;
  path?: ConfigPaths12741;
}

const HeavyComponent12741 = memo(function HeavyComponent12741({ config }: HeavyProps12741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12741.displayName = 'HeavyComponent12741';
export default HeavyComponent12741;
