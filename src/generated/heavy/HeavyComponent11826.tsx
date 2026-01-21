'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11826<T> = T extends (infer U)[]
  ? DeepReadonlyArray11826<U>
  : T extends object
  ? DeepReadonlyObject11826<T>
  : T;

interface DeepReadonlyArray11826<T> extends ReadonlyArray<DeepReadonly11826<T>> {}

type DeepReadonlyObject11826<T> = {
  readonly [P in keyof T]: DeepReadonly11826<T[P]>;
};

type UnionToIntersection11826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11826<T> = UnionToIntersection11826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11826<T extends unknown[], V> = [...T, V];

type TuplifyUnion11826<T, L = LastOf11826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11826<TuplifyUnion11826<Exclude<T, L>>, L>;

type DeepPartial11826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11826<T[P]> }
  : T;

type Paths11826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11826<K, Paths11826<T[K], Prev11826[D]>> : never }[keyof T]
  : never;

type Prev11826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11826 {
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

type ConfigPaths11826 = Paths11826<NestedConfig11826>;

interface HeavyProps11826 {
  config: DeepPartial11826<NestedConfig11826>;
  path?: ConfigPaths11826;
}

const HeavyComponent11826 = memo(function HeavyComponent11826({ config }: HeavyProps11826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11826.displayName = 'HeavyComponent11826';
export default HeavyComponent11826;
