'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11916<T> = T extends (infer U)[]
  ? DeepReadonlyArray11916<U>
  : T extends object
  ? DeepReadonlyObject11916<T>
  : T;

interface DeepReadonlyArray11916<T> extends ReadonlyArray<DeepReadonly11916<T>> {}

type DeepReadonlyObject11916<T> = {
  readonly [P in keyof T]: DeepReadonly11916<T[P]>;
};

type UnionToIntersection11916<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11916<T> = UnionToIntersection11916<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11916<T extends unknown[], V> = [...T, V];

type TuplifyUnion11916<T, L = LastOf11916<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11916<TuplifyUnion11916<Exclude<T, L>>, L>;

type DeepPartial11916<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11916<T[P]> }
  : T;

type Paths11916<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11916<K, Paths11916<T[K], Prev11916[D]>> : never }[keyof T]
  : never;

type Prev11916 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11916<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11916 {
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

type ConfigPaths11916 = Paths11916<NestedConfig11916>;

interface HeavyProps11916 {
  config: DeepPartial11916<NestedConfig11916>;
  path?: ConfigPaths11916;
}

const HeavyComponent11916 = memo(function HeavyComponent11916({ config }: HeavyProps11916) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11916) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11916 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11916: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11916.displayName = 'HeavyComponent11916';
export default HeavyComponent11916;
