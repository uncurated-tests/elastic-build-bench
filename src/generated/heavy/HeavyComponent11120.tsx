'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11120<T> = T extends (infer U)[]
  ? DeepReadonlyArray11120<U>
  : T extends object
  ? DeepReadonlyObject11120<T>
  : T;

interface DeepReadonlyArray11120<T> extends ReadonlyArray<DeepReadonly11120<T>> {}

type DeepReadonlyObject11120<T> = {
  readonly [P in keyof T]: DeepReadonly11120<T[P]>;
};

type UnionToIntersection11120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11120<T> = UnionToIntersection11120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11120<T extends unknown[], V> = [...T, V];

type TuplifyUnion11120<T, L = LastOf11120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11120<TuplifyUnion11120<Exclude<T, L>>, L>;

type DeepPartial11120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11120<T[P]> }
  : T;

type Paths11120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11120<K, Paths11120<T[K], Prev11120[D]>> : never }[keyof T]
  : never;

type Prev11120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11120 {
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

type ConfigPaths11120 = Paths11120<NestedConfig11120>;

interface HeavyProps11120 {
  config: DeepPartial11120<NestedConfig11120>;
  path?: ConfigPaths11120;
}

const HeavyComponent11120 = memo(function HeavyComponent11120({ config }: HeavyProps11120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11120.displayName = 'HeavyComponent11120';
export default HeavyComponent11120;
