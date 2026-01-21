'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11471<T> = T extends (infer U)[]
  ? DeepReadonlyArray11471<U>
  : T extends object
  ? DeepReadonlyObject11471<T>
  : T;

interface DeepReadonlyArray11471<T> extends ReadonlyArray<DeepReadonly11471<T>> {}

type DeepReadonlyObject11471<T> = {
  readonly [P in keyof T]: DeepReadonly11471<T[P]>;
};

type UnionToIntersection11471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11471<T> = UnionToIntersection11471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11471<T extends unknown[], V> = [...T, V];

type TuplifyUnion11471<T, L = LastOf11471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11471<TuplifyUnion11471<Exclude<T, L>>, L>;

type DeepPartial11471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11471<T[P]> }
  : T;

type Paths11471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11471<K, Paths11471<T[K], Prev11471[D]>> : never }[keyof T]
  : never;

type Prev11471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11471 {
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

type ConfigPaths11471 = Paths11471<NestedConfig11471>;

interface HeavyProps11471 {
  config: DeepPartial11471<NestedConfig11471>;
  path?: ConfigPaths11471;
}

const HeavyComponent11471 = memo(function HeavyComponent11471({ config }: HeavyProps11471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11471.displayName = 'HeavyComponent11471';
export default HeavyComponent11471;
