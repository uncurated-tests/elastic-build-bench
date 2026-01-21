'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11700<T> = T extends (infer U)[]
  ? DeepReadonlyArray11700<U>
  : T extends object
  ? DeepReadonlyObject11700<T>
  : T;

interface DeepReadonlyArray11700<T> extends ReadonlyArray<DeepReadonly11700<T>> {}

type DeepReadonlyObject11700<T> = {
  readonly [P in keyof T]: DeepReadonly11700<T[P]>;
};

type UnionToIntersection11700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11700<T> = UnionToIntersection11700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11700<T extends unknown[], V> = [...T, V];

type TuplifyUnion11700<T, L = LastOf11700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11700<TuplifyUnion11700<Exclude<T, L>>, L>;

type DeepPartial11700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11700<T[P]> }
  : T;

type Paths11700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11700<K, Paths11700<T[K], Prev11700[D]>> : never }[keyof T]
  : never;

type Prev11700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11700 {
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

type ConfigPaths11700 = Paths11700<NestedConfig11700>;

interface HeavyProps11700 {
  config: DeepPartial11700<NestedConfig11700>;
  path?: ConfigPaths11700;
}

const HeavyComponent11700 = memo(function HeavyComponent11700({ config }: HeavyProps11700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11700.displayName = 'HeavyComponent11700';
export default HeavyComponent11700;
