'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12520<T> = T extends (infer U)[]
  ? DeepReadonlyArray12520<U>
  : T extends object
  ? DeepReadonlyObject12520<T>
  : T;

interface DeepReadonlyArray12520<T> extends ReadonlyArray<DeepReadonly12520<T>> {}

type DeepReadonlyObject12520<T> = {
  readonly [P in keyof T]: DeepReadonly12520<T[P]>;
};

type UnionToIntersection12520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12520<T> = UnionToIntersection12520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12520<T extends unknown[], V> = [...T, V];

type TuplifyUnion12520<T, L = LastOf12520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12520<TuplifyUnion12520<Exclude<T, L>>, L>;

type DeepPartial12520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12520<T[P]> }
  : T;

type Paths12520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12520<K, Paths12520<T[K], Prev12520[D]>> : never }[keyof T]
  : never;

type Prev12520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12520 {
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

type ConfigPaths12520 = Paths12520<NestedConfig12520>;

interface HeavyProps12520 {
  config: DeepPartial12520<NestedConfig12520>;
  path?: ConfigPaths12520;
}

const HeavyComponent12520 = memo(function HeavyComponent12520({ config }: HeavyProps12520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12520.displayName = 'HeavyComponent12520';
export default HeavyComponent12520;
