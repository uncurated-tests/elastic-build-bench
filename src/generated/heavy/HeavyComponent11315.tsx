'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11315<T> = T extends (infer U)[]
  ? DeepReadonlyArray11315<U>
  : T extends object
  ? DeepReadonlyObject11315<T>
  : T;

interface DeepReadonlyArray11315<T> extends ReadonlyArray<DeepReadonly11315<T>> {}

type DeepReadonlyObject11315<T> = {
  readonly [P in keyof T]: DeepReadonly11315<T[P]>;
};

type UnionToIntersection11315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11315<T> = UnionToIntersection11315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11315<T extends unknown[], V> = [...T, V];

type TuplifyUnion11315<T, L = LastOf11315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11315<TuplifyUnion11315<Exclude<T, L>>, L>;

type DeepPartial11315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11315<T[P]> }
  : T;

type Paths11315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11315<K, Paths11315<T[K], Prev11315[D]>> : never }[keyof T]
  : never;

type Prev11315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11315 {
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

type ConfigPaths11315 = Paths11315<NestedConfig11315>;

interface HeavyProps11315 {
  config: DeepPartial11315<NestedConfig11315>;
  path?: ConfigPaths11315;
}

const HeavyComponent11315 = memo(function HeavyComponent11315({ config }: HeavyProps11315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11315.displayName = 'HeavyComponent11315';
export default HeavyComponent11315;
