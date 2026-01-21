'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11057<T> = T extends (infer U)[]
  ? DeepReadonlyArray11057<U>
  : T extends object
  ? DeepReadonlyObject11057<T>
  : T;

interface DeepReadonlyArray11057<T> extends ReadonlyArray<DeepReadonly11057<T>> {}

type DeepReadonlyObject11057<T> = {
  readonly [P in keyof T]: DeepReadonly11057<T[P]>;
};

type UnionToIntersection11057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11057<T> = UnionToIntersection11057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11057<T extends unknown[], V> = [...T, V];

type TuplifyUnion11057<T, L = LastOf11057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11057<TuplifyUnion11057<Exclude<T, L>>, L>;

type DeepPartial11057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11057<T[P]> }
  : T;

type Paths11057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11057<K, Paths11057<T[K], Prev11057[D]>> : never }[keyof T]
  : never;

type Prev11057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11057 {
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

type ConfigPaths11057 = Paths11057<NestedConfig11057>;

interface HeavyProps11057 {
  config: DeepPartial11057<NestedConfig11057>;
  path?: ConfigPaths11057;
}

const HeavyComponent11057 = memo(function HeavyComponent11057({ config }: HeavyProps11057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11057.displayName = 'HeavyComponent11057';
export default HeavyComponent11057;
