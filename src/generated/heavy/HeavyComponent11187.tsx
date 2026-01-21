'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11187<T> = T extends (infer U)[]
  ? DeepReadonlyArray11187<U>
  : T extends object
  ? DeepReadonlyObject11187<T>
  : T;

interface DeepReadonlyArray11187<T> extends ReadonlyArray<DeepReadonly11187<T>> {}

type DeepReadonlyObject11187<T> = {
  readonly [P in keyof T]: DeepReadonly11187<T[P]>;
};

type UnionToIntersection11187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11187<T> = UnionToIntersection11187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11187<T extends unknown[], V> = [...T, V];

type TuplifyUnion11187<T, L = LastOf11187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11187<TuplifyUnion11187<Exclude<T, L>>, L>;

type DeepPartial11187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11187<T[P]> }
  : T;

type Paths11187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11187<K, Paths11187<T[K], Prev11187[D]>> : never }[keyof T]
  : never;

type Prev11187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11187 {
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

type ConfigPaths11187 = Paths11187<NestedConfig11187>;

interface HeavyProps11187 {
  config: DeepPartial11187<NestedConfig11187>;
  path?: ConfigPaths11187;
}

const HeavyComponent11187 = memo(function HeavyComponent11187({ config }: HeavyProps11187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11187.displayName = 'HeavyComponent11187';
export default HeavyComponent11187;
