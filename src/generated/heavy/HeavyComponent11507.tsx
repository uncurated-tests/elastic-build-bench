'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11507<T> = T extends (infer U)[]
  ? DeepReadonlyArray11507<U>
  : T extends object
  ? DeepReadonlyObject11507<T>
  : T;

interface DeepReadonlyArray11507<T> extends ReadonlyArray<DeepReadonly11507<T>> {}

type DeepReadonlyObject11507<T> = {
  readonly [P in keyof T]: DeepReadonly11507<T[P]>;
};

type UnionToIntersection11507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11507<T> = UnionToIntersection11507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11507<T extends unknown[], V> = [...T, V];

type TuplifyUnion11507<T, L = LastOf11507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11507<TuplifyUnion11507<Exclude<T, L>>, L>;

type DeepPartial11507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11507<T[P]> }
  : T;

type Paths11507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11507<K, Paths11507<T[K], Prev11507[D]>> : never }[keyof T]
  : never;

type Prev11507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11507 {
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

type ConfigPaths11507 = Paths11507<NestedConfig11507>;

interface HeavyProps11507 {
  config: DeepPartial11507<NestedConfig11507>;
  path?: ConfigPaths11507;
}

const HeavyComponent11507 = memo(function HeavyComponent11507({ config }: HeavyProps11507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11507.displayName = 'HeavyComponent11507';
export default HeavyComponent11507;
