'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11047<T> = T extends (infer U)[]
  ? DeepReadonlyArray11047<U>
  : T extends object
  ? DeepReadonlyObject11047<T>
  : T;

interface DeepReadonlyArray11047<T> extends ReadonlyArray<DeepReadonly11047<T>> {}

type DeepReadonlyObject11047<T> = {
  readonly [P in keyof T]: DeepReadonly11047<T[P]>;
};

type UnionToIntersection11047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11047<T> = UnionToIntersection11047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11047<T extends unknown[], V> = [...T, V];

type TuplifyUnion11047<T, L = LastOf11047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11047<TuplifyUnion11047<Exclude<T, L>>, L>;

type DeepPartial11047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11047<T[P]> }
  : T;

type Paths11047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11047<K, Paths11047<T[K], Prev11047[D]>> : never }[keyof T]
  : never;

type Prev11047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11047 {
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

type ConfigPaths11047 = Paths11047<NestedConfig11047>;

interface HeavyProps11047 {
  config: DeepPartial11047<NestedConfig11047>;
  path?: ConfigPaths11047;
}

const HeavyComponent11047 = memo(function HeavyComponent11047({ config }: HeavyProps11047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11047.displayName = 'HeavyComponent11047';
export default HeavyComponent11047;
