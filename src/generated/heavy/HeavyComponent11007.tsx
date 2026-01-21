'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11007<T> = T extends (infer U)[]
  ? DeepReadonlyArray11007<U>
  : T extends object
  ? DeepReadonlyObject11007<T>
  : T;

interface DeepReadonlyArray11007<T> extends ReadonlyArray<DeepReadonly11007<T>> {}

type DeepReadonlyObject11007<T> = {
  readonly [P in keyof T]: DeepReadonly11007<T[P]>;
};

type UnionToIntersection11007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11007<T> = UnionToIntersection11007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11007<T extends unknown[], V> = [...T, V];

type TuplifyUnion11007<T, L = LastOf11007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11007<TuplifyUnion11007<Exclude<T, L>>, L>;

type DeepPartial11007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11007<T[P]> }
  : T;

type Paths11007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11007<K, Paths11007<T[K], Prev11007[D]>> : never }[keyof T]
  : never;

type Prev11007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11007 {
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

type ConfigPaths11007 = Paths11007<NestedConfig11007>;

interface HeavyProps11007 {
  config: DeepPartial11007<NestedConfig11007>;
  path?: ConfigPaths11007;
}

const HeavyComponent11007 = memo(function HeavyComponent11007({ config }: HeavyProps11007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11007.displayName = 'HeavyComponent11007';
export default HeavyComponent11007;
