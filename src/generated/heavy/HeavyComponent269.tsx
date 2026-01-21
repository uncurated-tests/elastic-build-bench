'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly269<T> = T extends (infer U)[]
  ? DeepReadonlyArray269<U>
  : T extends object
  ? DeepReadonlyObject269<T>
  : T;

interface DeepReadonlyArray269<T> extends ReadonlyArray<DeepReadonly269<T>> {}

type DeepReadonlyObject269<T> = {
  readonly [P in keyof T]: DeepReadonly269<T[P]>;
};

type UnionToIntersection269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf269<T> = UnionToIntersection269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push269<T extends unknown[], V> = [...T, V];

type TuplifyUnion269<T, L = LastOf269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push269<TuplifyUnion269<Exclude<T, L>>, L>;

type DeepPartial269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial269<T[P]> }
  : T;

type Paths269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join269<K, Paths269<T[K], Prev269[D]>> : never }[keyof T]
  : never;

type Prev269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig269 {
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

type ConfigPaths269 = Paths269<NestedConfig269>;

interface HeavyProps269 {
  config: DeepPartial269<NestedConfig269>;
  path?: ConfigPaths269;
}

const HeavyComponent269 = memo(function HeavyComponent269({ config }: HeavyProps269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent269.displayName = 'HeavyComponent269';
export default HeavyComponent269;
