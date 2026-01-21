'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11053<T> = T extends (infer U)[]
  ? DeepReadonlyArray11053<U>
  : T extends object
  ? DeepReadonlyObject11053<T>
  : T;

interface DeepReadonlyArray11053<T> extends ReadonlyArray<DeepReadonly11053<T>> {}

type DeepReadonlyObject11053<T> = {
  readonly [P in keyof T]: DeepReadonly11053<T[P]>;
};

type UnionToIntersection11053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11053<T> = UnionToIntersection11053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11053<T extends unknown[], V> = [...T, V];

type TuplifyUnion11053<T, L = LastOf11053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11053<TuplifyUnion11053<Exclude<T, L>>, L>;

type DeepPartial11053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11053<T[P]> }
  : T;

type Paths11053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11053<K, Paths11053<T[K], Prev11053[D]>> : never }[keyof T]
  : never;

type Prev11053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11053 {
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

type ConfigPaths11053 = Paths11053<NestedConfig11053>;

interface HeavyProps11053 {
  config: DeepPartial11053<NestedConfig11053>;
  path?: ConfigPaths11053;
}

const HeavyComponent11053 = memo(function HeavyComponent11053({ config }: HeavyProps11053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11053.displayName = 'HeavyComponent11053';
export default HeavyComponent11053;
