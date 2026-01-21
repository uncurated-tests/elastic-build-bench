'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11483<T> = T extends (infer U)[]
  ? DeepReadonlyArray11483<U>
  : T extends object
  ? DeepReadonlyObject11483<T>
  : T;

interface DeepReadonlyArray11483<T> extends ReadonlyArray<DeepReadonly11483<T>> {}

type DeepReadonlyObject11483<T> = {
  readonly [P in keyof T]: DeepReadonly11483<T[P]>;
};

type UnionToIntersection11483<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11483<T> = UnionToIntersection11483<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11483<T extends unknown[], V> = [...T, V];

type TuplifyUnion11483<T, L = LastOf11483<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11483<TuplifyUnion11483<Exclude<T, L>>, L>;

type DeepPartial11483<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11483<T[P]> }
  : T;

type Paths11483<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11483<K, Paths11483<T[K], Prev11483[D]>> : never }[keyof T]
  : never;

type Prev11483 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11483<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11483 {
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

type ConfigPaths11483 = Paths11483<NestedConfig11483>;

interface HeavyProps11483 {
  config: DeepPartial11483<NestedConfig11483>;
  path?: ConfigPaths11483;
}

const HeavyComponent11483 = memo(function HeavyComponent11483({ config }: HeavyProps11483) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11483) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11483 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11483: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11483.displayName = 'HeavyComponent11483';
export default HeavyComponent11483;
