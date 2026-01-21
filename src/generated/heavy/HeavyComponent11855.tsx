'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11855<T> = T extends (infer U)[]
  ? DeepReadonlyArray11855<U>
  : T extends object
  ? DeepReadonlyObject11855<T>
  : T;

interface DeepReadonlyArray11855<T> extends ReadonlyArray<DeepReadonly11855<T>> {}

type DeepReadonlyObject11855<T> = {
  readonly [P in keyof T]: DeepReadonly11855<T[P]>;
};

type UnionToIntersection11855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11855<T> = UnionToIntersection11855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11855<T extends unknown[], V> = [...T, V];

type TuplifyUnion11855<T, L = LastOf11855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11855<TuplifyUnion11855<Exclude<T, L>>, L>;

type DeepPartial11855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11855<T[P]> }
  : T;

type Paths11855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11855<K, Paths11855<T[K], Prev11855[D]>> : never }[keyof T]
  : never;

type Prev11855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11855 {
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

type ConfigPaths11855 = Paths11855<NestedConfig11855>;

interface HeavyProps11855 {
  config: DeepPartial11855<NestedConfig11855>;
  path?: ConfigPaths11855;
}

const HeavyComponent11855 = memo(function HeavyComponent11855({ config }: HeavyProps11855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11855.displayName = 'HeavyComponent11855';
export default HeavyComponent11855;
