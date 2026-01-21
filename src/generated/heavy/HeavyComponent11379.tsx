'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11379<T> = T extends (infer U)[]
  ? DeepReadonlyArray11379<U>
  : T extends object
  ? DeepReadonlyObject11379<T>
  : T;

interface DeepReadonlyArray11379<T> extends ReadonlyArray<DeepReadonly11379<T>> {}

type DeepReadonlyObject11379<T> = {
  readonly [P in keyof T]: DeepReadonly11379<T[P]>;
};

type UnionToIntersection11379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11379<T> = UnionToIntersection11379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11379<T extends unknown[], V> = [...T, V];

type TuplifyUnion11379<T, L = LastOf11379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11379<TuplifyUnion11379<Exclude<T, L>>, L>;

type DeepPartial11379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11379<T[P]> }
  : T;

type Paths11379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11379<K, Paths11379<T[K], Prev11379[D]>> : never }[keyof T]
  : never;

type Prev11379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11379 {
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

type ConfigPaths11379 = Paths11379<NestedConfig11379>;

interface HeavyProps11379 {
  config: DeepPartial11379<NestedConfig11379>;
  path?: ConfigPaths11379;
}

const HeavyComponent11379 = memo(function HeavyComponent11379({ config }: HeavyProps11379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11379.displayName = 'HeavyComponent11379';
export default HeavyComponent11379;
