'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly377<T> = T extends (infer U)[]
  ? DeepReadonlyArray377<U>
  : T extends object
  ? DeepReadonlyObject377<T>
  : T;

interface DeepReadonlyArray377<T> extends ReadonlyArray<DeepReadonly377<T>> {}

type DeepReadonlyObject377<T> = {
  readonly [P in keyof T]: DeepReadonly377<T[P]>;
};

type UnionToIntersection377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf377<T> = UnionToIntersection377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push377<T extends unknown[], V> = [...T, V];

type TuplifyUnion377<T, L = LastOf377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push377<TuplifyUnion377<Exclude<T, L>>, L>;

type DeepPartial377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial377<T[P]> }
  : T;

type Paths377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join377<K, Paths377<T[K], Prev377[D]>> : never }[keyof T]
  : never;

type Prev377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig377 {
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

type ConfigPaths377 = Paths377<NestedConfig377>;

interface HeavyProps377 {
  config: DeepPartial377<NestedConfig377>;
  path?: ConfigPaths377;
}

const HeavyComponent377 = memo(function HeavyComponent377({ config }: HeavyProps377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent377.displayName = 'HeavyComponent377';
export default HeavyComponent377;
