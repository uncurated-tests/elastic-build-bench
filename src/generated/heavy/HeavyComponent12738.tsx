'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12738<T> = T extends (infer U)[]
  ? DeepReadonlyArray12738<U>
  : T extends object
  ? DeepReadonlyObject12738<T>
  : T;

interface DeepReadonlyArray12738<T> extends ReadonlyArray<DeepReadonly12738<T>> {}

type DeepReadonlyObject12738<T> = {
  readonly [P in keyof T]: DeepReadonly12738<T[P]>;
};

type UnionToIntersection12738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12738<T> = UnionToIntersection12738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12738<T extends unknown[], V> = [...T, V];

type TuplifyUnion12738<T, L = LastOf12738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12738<TuplifyUnion12738<Exclude<T, L>>, L>;

type DeepPartial12738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12738<T[P]> }
  : T;

type Paths12738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12738<K, Paths12738<T[K], Prev12738[D]>> : never }[keyof T]
  : never;

type Prev12738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12738 {
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

type ConfigPaths12738 = Paths12738<NestedConfig12738>;

interface HeavyProps12738 {
  config: DeepPartial12738<NestedConfig12738>;
  path?: ConfigPaths12738;
}

const HeavyComponent12738 = memo(function HeavyComponent12738({ config }: HeavyProps12738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12738.displayName = 'HeavyComponent12738';
export default HeavyComponent12738;
