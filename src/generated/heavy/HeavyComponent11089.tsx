'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11089<T> = T extends (infer U)[]
  ? DeepReadonlyArray11089<U>
  : T extends object
  ? DeepReadonlyObject11089<T>
  : T;

interface DeepReadonlyArray11089<T> extends ReadonlyArray<DeepReadonly11089<T>> {}

type DeepReadonlyObject11089<T> = {
  readonly [P in keyof T]: DeepReadonly11089<T[P]>;
};

type UnionToIntersection11089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11089<T> = UnionToIntersection11089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11089<T extends unknown[], V> = [...T, V];

type TuplifyUnion11089<T, L = LastOf11089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11089<TuplifyUnion11089<Exclude<T, L>>, L>;

type DeepPartial11089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11089<T[P]> }
  : T;

type Paths11089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11089<K, Paths11089<T[K], Prev11089[D]>> : never }[keyof T]
  : never;

type Prev11089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11089 {
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

type ConfigPaths11089 = Paths11089<NestedConfig11089>;

interface HeavyProps11089 {
  config: DeepPartial11089<NestedConfig11089>;
  path?: ConfigPaths11089;
}

const HeavyComponent11089 = memo(function HeavyComponent11089({ config }: HeavyProps11089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11089.displayName = 'HeavyComponent11089';
export default HeavyComponent11089;
