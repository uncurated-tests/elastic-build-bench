'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11478<T> = T extends (infer U)[]
  ? DeepReadonlyArray11478<U>
  : T extends object
  ? DeepReadonlyObject11478<T>
  : T;

interface DeepReadonlyArray11478<T> extends ReadonlyArray<DeepReadonly11478<T>> {}

type DeepReadonlyObject11478<T> = {
  readonly [P in keyof T]: DeepReadonly11478<T[P]>;
};

type UnionToIntersection11478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11478<T> = UnionToIntersection11478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11478<T extends unknown[], V> = [...T, V];

type TuplifyUnion11478<T, L = LastOf11478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11478<TuplifyUnion11478<Exclude<T, L>>, L>;

type DeepPartial11478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11478<T[P]> }
  : T;

type Paths11478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11478<K, Paths11478<T[K], Prev11478[D]>> : never }[keyof T]
  : never;

type Prev11478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11478 {
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

type ConfigPaths11478 = Paths11478<NestedConfig11478>;

interface HeavyProps11478 {
  config: DeepPartial11478<NestedConfig11478>;
  path?: ConfigPaths11478;
}

const HeavyComponent11478 = memo(function HeavyComponent11478({ config }: HeavyProps11478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11478.displayName = 'HeavyComponent11478';
export default HeavyComponent11478;
