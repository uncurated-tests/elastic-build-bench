'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12771<T> = T extends (infer U)[]
  ? DeepReadonlyArray12771<U>
  : T extends object
  ? DeepReadonlyObject12771<T>
  : T;

interface DeepReadonlyArray12771<T> extends ReadonlyArray<DeepReadonly12771<T>> {}

type DeepReadonlyObject12771<T> = {
  readonly [P in keyof T]: DeepReadonly12771<T[P]>;
};

type UnionToIntersection12771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12771<T> = UnionToIntersection12771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12771<T extends unknown[], V> = [...T, V];

type TuplifyUnion12771<T, L = LastOf12771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12771<TuplifyUnion12771<Exclude<T, L>>, L>;

type DeepPartial12771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12771<T[P]> }
  : T;

type Paths12771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12771<K, Paths12771<T[K], Prev12771[D]>> : never }[keyof T]
  : never;

type Prev12771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12771 {
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

type ConfigPaths12771 = Paths12771<NestedConfig12771>;

interface HeavyProps12771 {
  config: DeepPartial12771<NestedConfig12771>;
  path?: ConfigPaths12771;
}

const HeavyComponent12771 = memo(function HeavyComponent12771({ config }: HeavyProps12771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12771.displayName = 'HeavyComponent12771';
export default HeavyComponent12771;
