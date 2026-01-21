'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11969<T> = T extends (infer U)[]
  ? DeepReadonlyArray11969<U>
  : T extends object
  ? DeepReadonlyObject11969<T>
  : T;

interface DeepReadonlyArray11969<T> extends ReadonlyArray<DeepReadonly11969<T>> {}

type DeepReadonlyObject11969<T> = {
  readonly [P in keyof T]: DeepReadonly11969<T[P]>;
};

type UnionToIntersection11969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11969<T> = UnionToIntersection11969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11969<T extends unknown[], V> = [...T, V];

type TuplifyUnion11969<T, L = LastOf11969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11969<TuplifyUnion11969<Exclude<T, L>>, L>;

type DeepPartial11969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11969<T[P]> }
  : T;

type Paths11969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11969<K, Paths11969<T[K], Prev11969[D]>> : never }[keyof T]
  : never;

type Prev11969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11969 {
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

type ConfigPaths11969 = Paths11969<NestedConfig11969>;

interface HeavyProps11969 {
  config: DeepPartial11969<NestedConfig11969>;
  path?: ConfigPaths11969;
}

const HeavyComponent11969 = memo(function HeavyComponent11969({ config }: HeavyProps11969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11969.displayName = 'HeavyComponent11969';
export default HeavyComponent11969;
