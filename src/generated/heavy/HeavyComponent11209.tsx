'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11209<T> = T extends (infer U)[]
  ? DeepReadonlyArray11209<U>
  : T extends object
  ? DeepReadonlyObject11209<T>
  : T;

interface DeepReadonlyArray11209<T> extends ReadonlyArray<DeepReadonly11209<T>> {}

type DeepReadonlyObject11209<T> = {
  readonly [P in keyof T]: DeepReadonly11209<T[P]>;
};

type UnionToIntersection11209<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11209<T> = UnionToIntersection11209<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11209<T extends unknown[], V> = [...T, V];

type TuplifyUnion11209<T, L = LastOf11209<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11209<TuplifyUnion11209<Exclude<T, L>>, L>;

type DeepPartial11209<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11209<T[P]> }
  : T;

type Paths11209<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11209<K, Paths11209<T[K], Prev11209[D]>> : never }[keyof T]
  : never;

type Prev11209 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11209<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11209 {
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

type ConfigPaths11209 = Paths11209<NestedConfig11209>;

interface HeavyProps11209 {
  config: DeepPartial11209<NestedConfig11209>;
  path?: ConfigPaths11209;
}

const HeavyComponent11209 = memo(function HeavyComponent11209({ config }: HeavyProps11209) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11209) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11209 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11209: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11209.displayName = 'HeavyComponent11209';
export default HeavyComponent11209;
