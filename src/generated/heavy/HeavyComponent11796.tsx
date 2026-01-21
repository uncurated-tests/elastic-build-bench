'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11796<T> = T extends (infer U)[]
  ? DeepReadonlyArray11796<U>
  : T extends object
  ? DeepReadonlyObject11796<T>
  : T;

interface DeepReadonlyArray11796<T> extends ReadonlyArray<DeepReadonly11796<T>> {}

type DeepReadonlyObject11796<T> = {
  readonly [P in keyof T]: DeepReadonly11796<T[P]>;
};

type UnionToIntersection11796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11796<T> = UnionToIntersection11796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11796<T extends unknown[], V> = [...T, V];

type TuplifyUnion11796<T, L = LastOf11796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11796<TuplifyUnion11796<Exclude<T, L>>, L>;

type DeepPartial11796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11796<T[P]> }
  : T;

type Paths11796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11796<K, Paths11796<T[K], Prev11796[D]>> : never }[keyof T]
  : never;

type Prev11796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11796 {
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

type ConfigPaths11796 = Paths11796<NestedConfig11796>;

interface HeavyProps11796 {
  config: DeepPartial11796<NestedConfig11796>;
  path?: ConfigPaths11796;
}

const HeavyComponent11796 = memo(function HeavyComponent11796({ config }: HeavyProps11796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11796.displayName = 'HeavyComponent11796';
export default HeavyComponent11796;
