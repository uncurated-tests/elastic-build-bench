'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11495<T> = T extends (infer U)[]
  ? DeepReadonlyArray11495<U>
  : T extends object
  ? DeepReadonlyObject11495<T>
  : T;

interface DeepReadonlyArray11495<T> extends ReadonlyArray<DeepReadonly11495<T>> {}

type DeepReadonlyObject11495<T> = {
  readonly [P in keyof T]: DeepReadonly11495<T[P]>;
};

type UnionToIntersection11495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11495<T> = UnionToIntersection11495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11495<T extends unknown[], V> = [...T, V];

type TuplifyUnion11495<T, L = LastOf11495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11495<TuplifyUnion11495<Exclude<T, L>>, L>;

type DeepPartial11495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11495<T[P]> }
  : T;

type Paths11495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11495<K, Paths11495<T[K], Prev11495[D]>> : never }[keyof T]
  : never;

type Prev11495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11495 {
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

type ConfigPaths11495 = Paths11495<NestedConfig11495>;

interface HeavyProps11495 {
  config: DeepPartial11495<NestedConfig11495>;
  path?: ConfigPaths11495;
}

const HeavyComponent11495 = memo(function HeavyComponent11495({ config }: HeavyProps11495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11495.displayName = 'HeavyComponent11495';
export default HeavyComponent11495;
