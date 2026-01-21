'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11470<T> = T extends (infer U)[]
  ? DeepReadonlyArray11470<U>
  : T extends object
  ? DeepReadonlyObject11470<T>
  : T;

interface DeepReadonlyArray11470<T> extends ReadonlyArray<DeepReadonly11470<T>> {}

type DeepReadonlyObject11470<T> = {
  readonly [P in keyof T]: DeepReadonly11470<T[P]>;
};

type UnionToIntersection11470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11470<T> = UnionToIntersection11470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11470<T extends unknown[], V> = [...T, V];

type TuplifyUnion11470<T, L = LastOf11470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11470<TuplifyUnion11470<Exclude<T, L>>, L>;

type DeepPartial11470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11470<T[P]> }
  : T;

type Paths11470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11470<K, Paths11470<T[K], Prev11470[D]>> : never }[keyof T]
  : never;

type Prev11470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11470 {
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

type ConfigPaths11470 = Paths11470<NestedConfig11470>;

interface HeavyProps11470 {
  config: DeepPartial11470<NestedConfig11470>;
  path?: ConfigPaths11470;
}

const HeavyComponent11470 = memo(function HeavyComponent11470({ config }: HeavyProps11470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11470.displayName = 'HeavyComponent11470';
export default HeavyComponent11470;
