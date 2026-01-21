'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11283<T> = T extends (infer U)[]
  ? DeepReadonlyArray11283<U>
  : T extends object
  ? DeepReadonlyObject11283<T>
  : T;

interface DeepReadonlyArray11283<T> extends ReadonlyArray<DeepReadonly11283<T>> {}

type DeepReadonlyObject11283<T> = {
  readonly [P in keyof T]: DeepReadonly11283<T[P]>;
};

type UnionToIntersection11283<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11283<T> = UnionToIntersection11283<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11283<T extends unknown[], V> = [...T, V];

type TuplifyUnion11283<T, L = LastOf11283<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11283<TuplifyUnion11283<Exclude<T, L>>, L>;

type DeepPartial11283<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11283<T[P]> }
  : T;

type Paths11283<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11283<K, Paths11283<T[K], Prev11283[D]>> : never }[keyof T]
  : never;

type Prev11283 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11283<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11283 {
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

type ConfigPaths11283 = Paths11283<NestedConfig11283>;

interface HeavyProps11283 {
  config: DeepPartial11283<NestedConfig11283>;
  path?: ConfigPaths11283;
}

const HeavyComponent11283 = memo(function HeavyComponent11283({ config }: HeavyProps11283) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11283) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11283 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11283: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11283.displayName = 'HeavyComponent11283';
export default HeavyComponent11283;
