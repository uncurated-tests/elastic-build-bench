'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12022<T> = T extends (infer U)[]
  ? DeepReadonlyArray12022<U>
  : T extends object
  ? DeepReadonlyObject12022<T>
  : T;

interface DeepReadonlyArray12022<T> extends ReadonlyArray<DeepReadonly12022<T>> {}

type DeepReadonlyObject12022<T> = {
  readonly [P in keyof T]: DeepReadonly12022<T[P]>;
};

type UnionToIntersection12022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12022<T> = UnionToIntersection12022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12022<T extends unknown[], V> = [...T, V];

type TuplifyUnion12022<T, L = LastOf12022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12022<TuplifyUnion12022<Exclude<T, L>>, L>;

type DeepPartial12022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12022<T[P]> }
  : T;

type Paths12022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12022<K, Paths12022<T[K], Prev12022[D]>> : never }[keyof T]
  : never;

type Prev12022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12022 {
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

type ConfigPaths12022 = Paths12022<NestedConfig12022>;

interface HeavyProps12022 {
  config: DeepPartial12022<NestedConfig12022>;
  path?: ConfigPaths12022;
}

const HeavyComponent12022 = memo(function HeavyComponent12022({ config }: HeavyProps12022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12022.displayName = 'HeavyComponent12022';
export default HeavyComponent12022;
