'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11277<T> = T extends (infer U)[]
  ? DeepReadonlyArray11277<U>
  : T extends object
  ? DeepReadonlyObject11277<T>
  : T;

interface DeepReadonlyArray11277<T> extends ReadonlyArray<DeepReadonly11277<T>> {}

type DeepReadonlyObject11277<T> = {
  readonly [P in keyof T]: DeepReadonly11277<T[P]>;
};

type UnionToIntersection11277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11277<T> = UnionToIntersection11277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11277<T extends unknown[], V> = [...T, V];

type TuplifyUnion11277<T, L = LastOf11277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11277<TuplifyUnion11277<Exclude<T, L>>, L>;

type DeepPartial11277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11277<T[P]> }
  : T;

type Paths11277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11277<K, Paths11277<T[K], Prev11277[D]>> : never }[keyof T]
  : never;

type Prev11277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11277 {
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

type ConfigPaths11277 = Paths11277<NestedConfig11277>;

interface HeavyProps11277 {
  config: DeepPartial11277<NestedConfig11277>;
  path?: ConfigPaths11277;
}

const HeavyComponent11277 = memo(function HeavyComponent11277({ config }: HeavyProps11277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11277.displayName = 'HeavyComponent11277';
export default HeavyComponent11277;
