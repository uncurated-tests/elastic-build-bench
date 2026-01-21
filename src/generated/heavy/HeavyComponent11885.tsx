'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11885<T> = T extends (infer U)[]
  ? DeepReadonlyArray11885<U>
  : T extends object
  ? DeepReadonlyObject11885<T>
  : T;

interface DeepReadonlyArray11885<T> extends ReadonlyArray<DeepReadonly11885<T>> {}

type DeepReadonlyObject11885<T> = {
  readonly [P in keyof T]: DeepReadonly11885<T[P]>;
};

type UnionToIntersection11885<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11885<T> = UnionToIntersection11885<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11885<T extends unknown[], V> = [...T, V];

type TuplifyUnion11885<T, L = LastOf11885<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11885<TuplifyUnion11885<Exclude<T, L>>, L>;

type DeepPartial11885<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11885<T[P]> }
  : T;

type Paths11885<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11885<K, Paths11885<T[K], Prev11885[D]>> : never }[keyof T]
  : never;

type Prev11885 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11885<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11885 {
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

type ConfigPaths11885 = Paths11885<NestedConfig11885>;

interface HeavyProps11885 {
  config: DeepPartial11885<NestedConfig11885>;
  path?: ConfigPaths11885;
}

const HeavyComponent11885 = memo(function HeavyComponent11885({ config }: HeavyProps11885) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11885) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11885 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11885: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11885.displayName = 'HeavyComponent11885';
export default HeavyComponent11885;
