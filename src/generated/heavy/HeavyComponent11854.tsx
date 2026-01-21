'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11854<T> = T extends (infer U)[]
  ? DeepReadonlyArray11854<U>
  : T extends object
  ? DeepReadonlyObject11854<T>
  : T;

interface DeepReadonlyArray11854<T> extends ReadonlyArray<DeepReadonly11854<T>> {}

type DeepReadonlyObject11854<T> = {
  readonly [P in keyof T]: DeepReadonly11854<T[P]>;
};

type UnionToIntersection11854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11854<T> = UnionToIntersection11854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11854<T extends unknown[], V> = [...T, V];

type TuplifyUnion11854<T, L = LastOf11854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11854<TuplifyUnion11854<Exclude<T, L>>, L>;

type DeepPartial11854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11854<T[P]> }
  : T;

type Paths11854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11854<K, Paths11854<T[K], Prev11854[D]>> : never }[keyof T]
  : never;

type Prev11854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11854 {
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

type ConfigPaths11854 = Paths11854<NestedConfig11854>;

interface HeavyProps11854 {
  config: DeepPartial11854<NestedConfig11854>;
  path?: ConfigPaths11854;
}

const HeavyComponent11854 = memo(function HeavyComponent11854({ config }: HeavyProps11854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11854.displayName = 'HeavyComponent11854';
export default HeavyComponent11854;
