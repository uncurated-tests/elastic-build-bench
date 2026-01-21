'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11620<T> = T extends (infer U)[]
  ? DeepReadonlyArray11620<U>
  : T extends object
  ? DeepReadonlyObject11620<T>
  : T;

interface DeepReadonlyArray11620<T> extends ReadonlyArray<DeepReadonly11620<T>> {}

type DeepReadonlyObject11620<T> = {
  readonly [P in keyof T]: DeepReadonly11620<T[P]>;
};

type UnionToIntersection11620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11620<T> = UnionToIntersection11620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11620<T extends unknown[], V> = [...T, V];

type TuplifyUnion11620<T, L = LastOf11620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11620<TuplifyUnion11620<Exclude<T, L>>, L>;

type DeepPartial11620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11620<T[P]> }
  : T;

type Paths11620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11620<K, Paths11620<T[K], Prev11620[D]>> : never }[keyof T]
  : never;

type Prev11620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11620 {
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

type ConfigPaths11620 = Paths11620<NestedConfig11620>;

interface HeavyProps11620 {
  config: DeepPartial11620<NestedConfig11620>;
  path?: ConfigPaths11620;
}

const HeavyComponent11620 = memo(function HeavyComponent11620({ config }: HeavyProps11620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11620.displayName = 'HeavyComponent11620';
export default HeavyComponent11620;
