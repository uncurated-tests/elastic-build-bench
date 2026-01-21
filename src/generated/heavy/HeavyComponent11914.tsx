'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11914<T> = T extends (infer U)[]
  ? DeepReadonlyArray11914<U>
  : T extends object
  ? DeepReadonlyObject11914<T>
  : T;

interface DeepReadonlyArray11914<T> extends ReadonlyArray<DeepReadonly11914<T>> {}

type DeepReadonlyObject11914<T> = {
  readonly [P in keyof T]: DeepReadonly11914<T[P]>;
};

type UnionToIntersection11914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11914<T> = UnionToIntersection11914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11914<T extends unknown[], V> = [...T, V];

type TuplifyUnion11914<T, L = LastOf11914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11914<TuplifyUnion11914<Exclude<T, L>>, L>;

type DeepPartial11914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11914<T[P]> }
  : T;

type Paths11914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11914<K, Paths11914<T[K], Prev11914[D]>> : never }[keyof T]
  : never;

type Prev11914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11914 {
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

type ConfigPaths11914 = Paths11914<NestedConfig11914>;

interface HeavyProps11914 {
  config: DeepPartial11914<NestedConfig11914>;
  path?: ConfigPaths11914;
}

const HeavyComponent11914 = memo(function HeavyComponent11914({ config }: HeavyProps11914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11914.displayName = 'HeavyComponent11914';
export default HeavyComponent11914;
