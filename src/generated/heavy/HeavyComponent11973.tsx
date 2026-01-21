'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11973<T> = T extends (infer U)[]
  ? DeepReadonlyArray11973<U>
  : T extends object
  ? DeepReadonlyObject11973<T>
  : T;

interface DeepReadonlyArray11973<T> extends ReadonlyArray<DeepReadonly11973<T>> {}

type DeepReadonlyObject11973<T> = {
  readonly [P in keyof T]: DeepReadonly11973<T[P]>;
};

type UnionToIntersection11973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11973<T> = UnionToIntersection11973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11973<T extends unknown[], V> = [...T, V];

type TuplifyUnion11973<T, L = LastOf11973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11973<TuplifyUnion11973<Exclude<T, L>>, L>;

type DeepPartial11973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11973<T[P]> }
  : T;

type Paths11973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11973<K, Paths11973<T[K], Prev11973[D]>> : never }[keyof T]
  : never;

type Prev11973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11973 {
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

type ConfigPaths11973 = Paths11973<NestedConfig11973>;

interface HeavyProps11973 {
  config: DeepPartial11973<NestedConfig11973>;
  path?: ConfigPaths11973;
}

const HeavyComponent11973 = memo(function HeavyComponent11973({ config }: HeavyProps11973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11973.displayName = 'HeavyComponent11973';
export default HeavyComponent11973;
