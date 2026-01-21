'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11113<T> = T extends (infer U)[]
  ? DeepReadonlyArray11113<U>
  : T extends object
  ? DeepReadonlyObject11113<T>
  : T;

interface DeepReadonlyArray11113<T> extends ReadonlyArray<DeepReadonly11113<T>> {}

type DeepReadonlyObject11113<T> = {
  readonly [P in keyof T]: DeepReadonly11113<T[P]>;
};

type UnionToIntersection11113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11113<T> = UnionToIntersection11113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11113<T extends unknown[], V> = [...T, V];

type TuplifyUnion11113<T, L = LastOf11113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11113<TuplifyUnion11113<Exclude<T, L>>, L>;

type DeepPartial11113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11113<T[P]> }
  : T;

type Paths11113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11113<K, Paths11113<T[K], Prev11113[D]>> : never }[keyof T]
  : never;

type Prev11113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11113 {
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

type ConfigPaths11113 = Paths11113<NestedConfig11113>;

interface HeavyProps11113 {
  config: DeepPartial11113<NestedConfig11113>;
  path?: ConfigPaths11113;
}

const HeavyComponent11113 = memo(function HeavyComponent11113({ config }: HeavyProps11113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11113.displayName = 'HeavyComponent11113';
export default HeavyComponent11113;
