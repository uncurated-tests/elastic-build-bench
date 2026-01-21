'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12588<T> = T extends (infer U)[]
  ? DeepReadonlyArray12588<U>
  : T extends object
  ? DeepReadonlyObject12588<T>
  : T;

interface DeepReadonlyArray12588<T> extends ReadonlyArray<DeepReadonly12588<T>> {}

type DeepReadonlyObject12588<T> = {
  readonly [P in keyof T]: DeepReadonly12588<T[P]>;
};

type UnionToIntersection12588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12588<T> = UnionToIntersection12588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12588<T extends unknown[], V> = [...T, V];

type TuplifyUnion12588<T, L = LastOf12588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12588<TuplifyUnion12588<Exclude<T, L>>, L>;

type DeepPartial12588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12588<T[P]> }
  : T;

type Paths12588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12588<K, Paths12588<T[K], Prev12588[D]>> : never }[keyof T]
  : never;

type Prev12588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12588 {
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

type ConfigPaths12588 = Paths12588<NestedConfig12588>;

interface HeavyProps12588 {
  config: DeepPartial12588<NestedConfig12588>;
  path?: ConfigPaths12588;
}

const HeavyComponent12588 = memo(function HeavyComponent12588({ config }: HeavyProps12588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12588.displayName = 'HeavyComponent12588';
export default HeavyComponent12588;
