'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11321<T> = T extends (infer U)[]
  ? DeepReadonlyArray11321<U>
  : T extends object
  ? DeepReadonlyObject11321<T>
  : T;

interface DeepReadonlyArray11321<T> extends ReadonlyArray<DeepReadonly11321<T>> {}

type DeepReadonlyObject11321<T> = {
  readonly [P in keyof T]: DeepReadonly11321<T[P]>;
};

type UnionToIntersection11321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11321<T> = UnionToIntersection11321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11321<T extends unknown[], V> = [...T, V];

type TuplifyUnion11321<T, L = LastOf11321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11321<TuplifyUnion11321<Exclude<T, L>>, L>;

type DeepPartial11321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11321<T[P]> }
  : T;

type Paths11321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11321<K, Paths11321<T[K], Prev11321[D]>> : never }[keyof T]
  : never;

type Prev11321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11321 {
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

type ConfigPaths11321 = Paths11321<NestedConfig11321>;

interface HeavyProps11321 {
  config: DeepPartial11321<NestedConfig11321>;
  path?: ConfigPaths11321;
}

const HeavyComponent11321 = memo(function HeavyComponent11321({ config }: HeavyProps11321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11321.displayName = 'HeavyComponent11321';
export default HeavyComponent11321;
