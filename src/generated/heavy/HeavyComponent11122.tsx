'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11122<T> = T extends (infer U)[]
  ? DeepReadonlyArray11122<U>
  : T extends object
  ? DeepReadonlyObject11122<T>
  : T;

interface DeepReadonlyArray11122<T> extends ReadonlyArray<DeepReadonly11122<T>> {}

type DeepReadonlyObject11122<T> = {
  readonly [P in keyof T]: DeepReadonly11122<T[P]>;
};

type UnionToIntersection11122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11122<T> = UnionToIntersection11122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11122<T extends unknown[], V> = [...T, V];

type TuplifyUnion11122<T, L = LastOf11122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11122<TuplifyUnion11122<Exclude<T, L>>, L>;

type DeepPartial11122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11122<T[P]> }
  : T;

type Paths11122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11122<K, Paths11122<T[K], Prev11122[D]>> : never }[keyof T]
  : never;

type Prev11122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11122 {
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

type ConfigPaths11122 = Paths11122<NestedConfig11122>;

interface HeavyProps11122 {
  config: DeepPartial11122<NestedConfig11122>;
  path?: ConfigPaths11122;
}

const HeavyComponent11122 = memo(function HeavyComponent11122({ config }: HeavyProps11122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11122.displayName = 'HeavyComponent11122';
export default HeavyComponent11122;
