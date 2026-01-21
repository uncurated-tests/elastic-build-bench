'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11803<T> = T extends (infer U)[]
  ? DeepReadonlyArray11803<U>
  : T extends object
  ? DeepReadonlyObject11803<T>
  : T;

interface DeepReadonlyArray11803<T> extends ReadonlyArray<DeepReadonly11803<T>> {}

type DeepReadonlyObject11803<T> = {
  readonly [P in keyof T]: DeepReadonly11803<T[P]>;
};

type UnionToIntersection11803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11803<T> = UnionToIntersection11803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11803<T extends unknown[], V> = [...T, V];

type TuplifyUnion11803<T, L = LastOf11803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11803<TuplifyUnion11803<Exclude<T, L>>, L>;

type DeepPartial11803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11803<T[P]> }
  : T;

type Paths11803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11803<K, Paths11803<T[K], Prev11803[D]>> : never }[keyof T]
  : never;

type Prev11803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11803 {
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

type ConfigPaths11803 = Paths11803<NestedConfig11803>;

interface HeavyProps11803 {
  config: DeepPartial11803<NestedConfig11803>;
  path?: ConfigPaths11803;
}

const HeavyComponent11803 = memo(function HeavyComponent11803({ config }: HeavyProps11803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11803.displayName = 'HeavyComponent11803';
export default HeavyComponent11803;
