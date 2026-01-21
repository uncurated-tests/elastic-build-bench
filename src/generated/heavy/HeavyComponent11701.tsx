'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11701<T> = T extends (infer U)[]
  ? DeepReadonlyArray11701<U>
  : T extends object
  ? DeepReadonlyObject11701<T>
  : T;

interface DeepReadonlyArray11701<T> extends ReadonlyArray<DeepReadonly11701<T>> {}

type DeepReadonlyObject11701<T> = {
  readonly [P in keyof T]: DeepReadonly11701<T[P]>;
};

type UnionToIntersection11701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11701<T> = UnionToIntersection11701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11701<T extends unknown[], V> = [...T, V];

type TuplifyUnion11701<T, L = LastOf11701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11701<TuplifyUnion11701<Exclude<T, L>>, L>;

type DeepPartial11701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11701<T[P]> }
  : T;

type Paths11701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11701<K, Paths11701<T[K], Prev11701[D]>> : never }[keyof T]
  : never;

type Prev11701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11701 {
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

type ConfigPaths11701 = Paths11701<NestedConfig11701>;

interface HeavyProps11701 {
  config: DeepPartial11701<NestedConfig11701>;
  path?: ConfigPaths11701;
}

const HeavyComponent11701 = memo(function HeavyComponent11701({ config }: HeavyProps11701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11701.displayName = 'HeavyComponent11701';
export default HeavyComponent11701;
