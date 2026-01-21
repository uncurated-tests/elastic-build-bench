'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11056<T> = T extends (infer U)[]
  ? DeepReadonlyArray11056<U>
  : T extends object
  ? DeepReadonlyObject11056<T>
  : T;

interface DeepReadonlyArray11056<T> extends ReadonlyArray<DeepReadonly11056<T>> {}

type DeepReadonlyObject11056<T> = {
  readonly [P in keyof T]: DeepReadonly11056<T[P]>;
};

type UnionToIntersection11056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11056<T> = UnionToIntersection11056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11056<T extends unknown[], V> = [...T, V];

type TuplifyUnion11056<T, L = LastOf11056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11056<TuplifyUnion11056<Exclude<T, L>>, L>;

type DeepPartial11056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11056<T[P]> }
  : T;

type Paths11056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11056<K, Paths11056<T[K], Prev11056[D]>> : never }[keyof T]
  : never;

type Prev11056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11056 {
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

type ConfigPaths11056 = Paths11056<NestedConfig11056>;

interface HeavyProps11056 {
  config: DeepPartial11056<NestedConfig11056>;
  path?: ConfigPaths11056;
}

const HeavyComponent11056 = memo(function HeavyComponent11056({ config }: HeavyProps11056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11056.displayName = 'HeavyComponent11056';
export default HeavyComponent11056;
