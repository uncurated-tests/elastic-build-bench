'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11215<T> = T extends (infer U)[]
  ? DeepReadonlyArray11215<U>
  : T extends object
  ? DeepReadonlyObject11215<T>
  : T;

interface DeepReadonlyArray11215<T> extends ReadonlyArray<DeepReadonly11215<T>> {}

type DeepReadonlyObject11215<T> = {
  readonly [P in keyof T]: DeepReadonly11215<T[P]>;
};

type UnionToIntersection11215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11215<T> = UnionToIntersection11215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11215<T extends unknown[], V> = [...T, V];

type TuplifyUnion11215<T, L = LastOf11215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11215<TuplifyUnion11215<Exclude<T, L>>, L>;

type DeepPartial11215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11215<T[P]> }
  : T;

type Paths11215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11215<K, Paths11215<T[K], Prev11215[D]>> : never }[keyof T]
  : never;

type Prev11215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11215 {
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

type ConfigPaths11215 = Paths11215<NestedConfig11215>;

interface HeavyProps11215 {
  config: DeepPartial11215<NestedConfig11215>;
  path?: ConfigPaths11215;
}

const HeavyComponent11215 = memo(function HeavyComponent11215({ config }: HeavyProps11215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11215.displayName = 'HeavyComponent11215';
export default HeavyComponent11215;
