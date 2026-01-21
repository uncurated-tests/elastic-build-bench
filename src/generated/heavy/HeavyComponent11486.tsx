'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11486<T> = T extends (infer U)[]
  ? DeepReadonlyArray11486<U>
  : T extends object
  ? DeepReadonlyObject11486<T>
  : T;

interface DeepReadonlyArray11486<T> extends ReadonlyArray<DeepReadonly11486<T>> {}

type DeepReadonlyObject11486<T> = {
  readonly [P in keyof T]: DeepReadonly11486<T[P]>;
};

type UnionToIntersection11486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11486<T> = UnionToIntersection11486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11486<T extends unknown[], V> = [...T, V];

type TuplifyUnion11486<T, L = LastOf11486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11486<TuplifyUnion11486<Exclude<T, L>>, L>;

type DeepPartial11486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11486<T[P]> }
  : T;

type Paths11486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11486<K, Paths11486<T[K], Prev11486[D]>> : never }[keyof T]
  : never;

type Prev11486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11486 {
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

type ConfigPaths11486 = Paths11486<NestedConfig11486>;

interface HeavyProps11486 {
  config: DeepPartial11486<NestedConfig11486>;
  path?: ConfigPaths11486;
}

const HeavyComponent11486 = memo(function HeavyComponent11486({ config }: HeavyProps11486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11486.displayName = 'HeavyComponent11486';
export default HeavyComponent11486;
