'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11571<T> = T extends (infer U)[]
  ? DeepReadonlyArray11571<U>
  : T extends object
  ? DeepReadonlyObject11571<T>
  : T;

interface DeepReadonlyArray11571<T> extends ReadonlyArray<DeepReadonly11571<T>> {}

type DeepReadonlyObject11571<T> = {
  readonly [P in keyof T]: DeepReadonly11571<T[P]>;
};

type UnionToIntersection11571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11571<T> = UnionToIntersection11571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11571<T extends unknown[], V> = [...T, V];

type TuplifyUnion11571<T, L = LastOf11571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11571<TuplifyUnion11571<Exclude<T, L>>, L>;

type DeepPartial11571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11571<T[P]> }
  : T;

type Paths11571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11571<K, Paths11571<T[K], Prev11571[D]>> : never }[keyof T]
  : never;

type Prev11571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11571 {
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

type ConfigPaths11571 = Paths11571<NestedConfig11571>;

interface HeavyProps11571 {
  config: DeepPartial11571<NestedConfig11571>;
  path?: ConfigPaths11571;
}

const HeavyComponent11571 = memo(function HeavyComponent11571({ config }: HeavyProps11571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11571.displayName = 'HeavyComponent11571';
export default HeavyComponent11571;
