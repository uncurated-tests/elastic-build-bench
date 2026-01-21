'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11454<T> = T extends (infer U)[]
  ? DeepReadonlyArray11454<U>
  : T extends object
  ? DeepReadonlyObject11454<T>
  : T;

interface DeepReadonlyArray11454<T> extends ReadonlyArray<DeepReadonly11454<T>> {}

type DeepReadonlyObject11454<T> = {
  readonly [P in keyof T]: DeepReadonly11454<T[P]>;
};

type UnionToIntersection11454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11454<T> = UnionToIntersection11454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11454<T extends unknown[], V> = [...T, V];

type TuplifyUnion11454<T, L = LastOf11454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11454<TuplifyUnion11454<Exclude<T, L>>, L>;

type DeepPartial11454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11454<T[P]> }
  : T;

type Paths11454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11454<K, Paths11454<T[K], Prev11454[D]>> : never }[keyof T]
  : never;

type Prev11454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11454 {
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

type ConfigPaths11454 = Paths11454<NestedConfig11454>;

interface HeavyProps11454 {
  config: DeepPartial11454<NestedConfig11454>;
  path?: ConfigPaths11454;
}

const HeavyComponent11454 = memo(function HeavyComponent11454({ config }: HeavyProps11454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11454.displayName = 'HeavyComponent11454';
export default HeavyComponent11454;
