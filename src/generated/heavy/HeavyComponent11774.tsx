'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11774<T> = T extends (infer U)[]
  ? DeepReadonlyArray11774<U>
  : T extends object
  ? DeepReadonlyObject11774<T>
  : T;

interface DeepReadonlyArray11774<T> extends ReadonlyArray<DeepReadonly11774<T>> {}

type DeepReadonlyObject11774<T> = {
  readonly [P in keyof T]: DeepReadonly11774<T[P]>;
};

type UnionToIntersection11774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11774<T> = UnionToIntersection11774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11774<T extends unknown[], V> = [...T, V];

type TuplifyUnion11774<T, L = LastOf11774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11774<TuplifyUnion11774<Exclude<T, L>>, L>;

type DeepPartial11774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11774<T[P]> }
  : T;

type Paths11774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11774<K, Paths11774<T[K], Prev11774[D]>> : never }[keyof T]
  : never;

type Prev11774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11774 {
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

type ConfigPaths11774 = Paths11774<NestedConfig11774>;

interface HeavyProps11774 {
  config: DeepPartial11774<NestedConfig11774>;
  path?: ConfigPaths11774;
}

const HeavyComponent11774 = memo(function HeavyComponent11774({ config }: HeavyProps11774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11774.displayName = 'HeavyComponent11774';
export default HeavyComponent11774;
