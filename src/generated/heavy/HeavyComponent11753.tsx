'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11753<T> = T extends (infer U)[]
  ? DeepReadonlyArray11753<U>
  : T extends object
  ? DeepReadonlyObject11753<T>
  : T;

interface DeepReadonlyArray11753<T> extends ReadonlyArray<DeepReadonly11753<T>> {}

type DeepReadonlyObject11753<T> = {
  readonly [P in keyof T]: DeepReadonly11753<T[P]>;
};

type UnionToIntersection11753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11753<T> = UnionToIntersection11753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11753<T extends unknown[], V> = [...T, V];

type TuplifyUnion11753<T, L = LastOf11753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11753<TuplifyUnion11753<Exclude<T, L>>, L>;

type DeepPartial11753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11753<T[P]> }
  : T;

type Paths11753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11753<K, Paths11753<T[K], Prev11753[D]>> : never }[keyof T]
  : never;

type Prev11753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11753 {
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

type ConfigPaths11753 = Paths11753<NestedConfig11753>;

interface HeavyProps11753 {
  config: DeepPartial11753<NestedConfig11753>;
  path?: ConfigPaths11753;
}

const HeavyComponent11753 = memo(function HeavyComponent11753({ config }: HeavyProps11753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11753.displayName = 'HeavyComponent11753';
export default HeavyComponent11753;
