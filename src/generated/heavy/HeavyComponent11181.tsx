'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11181<T> = T extends (infer U)[]
  ? DeepReadonlyArray11181<U>
  : T extends object
  ? DeepReadonlyObject11181<T>
  : T;

interface DeepReadonlyArray11181<T> extends ReadonlyArray<DeepReadonly11181<T>> {}

type DeepReadonlyObject11181<T> = {
  readonly [P in keyof T]: DeepReadonly11181<T[P]>;
};

type UnionToIntersection11181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11181<T> = UnionToIntersection11181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11181<T extends unknown[], V> = [...T, V];

type TuplifyUnion11181<T, L = LastOf11181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11181<TuplifyUnion11181<Exclude<T, L>>, L>;

type DeepPartial11181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11181<T[P]> }
  : T;

type Paths11181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11181<K, Paths11181<T[K], Prev11181[D]>> : never }[keyof T]
  : never;

type Prev11181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11181 {
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

type ConfigPaths11181 = Paths11181<NestedConfig11181>;

interface HeavyProps11181 {
  config: DeepPartial11181<NestedConfig11181>;
  path?: ConfigPaths11181;
}

const HeavyComponent11181 = memo(function HeavyComponent11181({ config }: HeavyProps11181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11181.displayName = 'HeavyComponent11181';
export default HeavyComponent11181;
