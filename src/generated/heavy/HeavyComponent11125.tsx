'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11125<T> = T extends (infer U)[]
  ? DeepReadonlyArray11125<U>
  : T extends object
  ? DeepReadonlyObject11125<T>
  : T;

interface DeepReadonlyArray11125<T> extends ReadonlyArray<DeepReadonly11125<T>> {}

type DeepReadonlyObject11125<T> = {
  readonly [P in keyof T]: DeepReadonly11125<T[P]>;
};

type UnionToIntersection11125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11125<T> = UnionToIntersection11125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11125<T extends unknown[], V> = [...T, V];

type TuplifyUnion11125<T, L = LastOf11125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11125<TuplifyUnion11125<Exclude<T, L>>, L>;

type DeepPartial11125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11125<T[P]> }
  : T;

type Paths11125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11125<K, Paths11125<T[K], Prev11125[D]>> : never }[keyof T]
  : never;

type Prev11125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11125 {
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

type ConfigPaths11125 = Paths11125<NestedConfig11125>;

interface HeavyProps11125 {
  config: DeepPartial11125<NestedConfig11125>;
  path?: ConfigPaths11125;
}

const HeavyComponent11125 = memo(function HeavyComponent11125({ config }: HeavyProps11125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11125.displayName = 'HeavyComponent11125';
export default HeavyComponent11125;
