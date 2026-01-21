'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12707<T> = T extends (infer U)[]
  ? DeepReadonlyArray12707<U>
  : T extends object
  ? DeepReadonlyObject12707<T>
  : T;

interface DeepReadonlyArray12707<T> extends ReadonlyArray<DeepReadonly12707<T>> {}

type DeepReadonlyObject12707<T> = {
  readonly [P in keyof T]: DeepReadonly12707<T[P]>;
};

type UnionToIntersection12707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12707<T> = UnionToIntersection12707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12707<T extends unknown[], V> = [...T, V];

type TuplifyUnion12707<T, L = LastOf12707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12707<TuplifyUnion12707<Exclude<T, L>>, L>;

type DeepPartial12707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12707<T[P]> }
  : T;

type Paths12707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12707<K, Paths12707<T[K], Prev12707[D]>> : never }[keyof T]
  : never;

type Prev12707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12707 {
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

type ConfigPaths12707 = Paths12707<NestedConfig12707>;

interface HeavyProps12707 {
  config: DeepPartial12707<NestedConfig12707>;
  path?: ConfigPaths12707;
}

const HeavyComponent12707 = memo(function HeavyComponent12707({ config }: HeavyProps12707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12707.displayName = 'HeavyComponent12707';
export default HeavyComponent12707;
