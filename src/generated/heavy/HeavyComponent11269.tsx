'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11269<T> = T extends (infer U)[]
  ? DeepReadonlyArray11269<U>
  : T extends object
  ? DeepReadonlyObject11269<T>
  : T;

interface DeepReadonlyArray11269<T> extends ReadonlyArray<DeepReadonly11269<T>> {}

type DeepReadonlyObject11269<T> = {
  readonly [P in keyof T]: DeepReadonly11269<T[P]>;
};

type UnionToIntersection11269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11269<T> = UnionToIntersection11269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11269<T extends unknown[], V> = [...T, V];

type TuplifyUnion11269<T, L = LastOf11269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11269<TuplifyUnion11269<Exclude<T, L>>, L>;

type DeepPartial11269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11269<T[P]> }
  : T;

type Paths11269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11269<K, Paths11269<T[K], Prev11269[D]>> : never }[keyof T]
  : never;

type Prev11269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11269 {
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

type ConfigPaths11269 = Paths11269<NestedConfig11269>;

interface HeavyProps11269 {
  config: DeepPartial11269<NestedConfig11269>;
  path?: ConfigPaths11269;
}

const HeavyComponent11269 = memo(function HeavyComponent11269({ config }: HeavyProps11269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11269.displayName = 'HeavyComponent11269';
export default HeavyComponent11269;
