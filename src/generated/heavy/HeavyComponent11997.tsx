'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11997<T> = T extends (infer U)[]
  ? DeepReadonlyArray11997<U>
  : T extends object
  ? DeepReadonlyObject11997<T>
  : T;

interface DeepReadonlyArray11997<T> extends ReadonlyArray<DeepReadonly11997<T>> {}

type DeepReadonlyObject11997<T> = {
  readonly [P in keyof T]: DeepReadonly11997<T[P]>;
};

type UnionToIntersection11997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11997<T> = UnionToIntersection11997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11997<T extends unknown[], V> = [...T, V];

type TuplifyUnion11997<T, L = LastOf11997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11997<TuplifyUnion11997<Exclude<T, L>>, L>;

type DeepPartial11997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11997<T[P]> }
  : T;

type Paths11997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11997<K, Paths11997<T[K], Prev11997[D]>> : never }[keyof T]
  : never;

type Prev11997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11997 {
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

type ConfigPaths11997 = Paths11997<NestedConfig11997>;

interface HeavyProps11997 {
  config: DeepPartial11997<NestedConfig11997>;
  path?: ConfigPaths11997;
}

const HeavyComponent11997 = memo(function HeavyComponent11997({ config }: HeavyProps11997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11997.displayName = 'HeavyComponent11997';
export default HeavyComponent11997;
