'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11902<T> = T extends (infer U)[]
  ? DeepReadonlyArray11902<U>
  : T extends object
  ? DeepReadonlyObject11902<T>
  : T;

interface DeepReadonlyArray11902<T> extends ReadonlyArray<DeepReadonly11902<T>> {}

type DeepReadonlyObject11902<T> = {
  readonly [P in keyof T]: DeepReadonly11902<T[P]>;
};

type UnionToIntersection11902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11902<T> = UnionToIntersection11902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11902<T extends unknown[], V> = [...T, V];

type TuplifyUnion11902<T, L = LastOf11902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11902<TuplifyUnion11902<Exclude<T, L>>, L>;

type DeepPartial11902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11902<T[P]> }
  : T;

type Paths11902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11902<K, Paths11902<T[K], Prev11902[D]>> : never }[keyof T]
  : never;

type Prev11902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11902 {
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

type ConfigPaths11902 = Paths11902<NestedConfig11902>;

interface HeavyProps11902 {
  config: DeepPartial11902<NestedConfig11902>;
  path?: ConfigPaths11902;
}

const HeavyComponent11902 = memo(function HeavyComponent11902({ config }: HeavyProps11902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11902.displayName = 'HeavyComponent11902';
export default HeavyComponent11902;
