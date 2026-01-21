'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11729<T> = T extends (infer U)[]
  ? DeepReadonlyArray11729<U>
  : T extends object
  ? DeepReadonlyObject11729<T>
  : T;

interface DeepReadonlyArray11729<T> extends ReadonlyArray<DeepReadonly11729<T>> {}

type DeepReadonlyObject11729<T> = {
  readonly [P in keyof T]: DeepReadonly11729<T[P]>;
};

type UnionToIntersection11729<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11729<T> = UnionToIntersection11729<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11729<T extends unknown[], V> = [...T, V];

type TuplifyUnion11729<T, L = LastOf11729<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11729<TuplifyUnion11729<Exclude<T, L>>, L>;

type DeepPartial11729<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11729<T[P]> }
  : T;

type Paths11729<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11729<K, Paths11729<T[K], Prev11729[D]>> : never }[keyof T]
  : never;

type Prev11729 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11729<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11729 {
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

type ConfigPaths11729 = Paths11729<NestedConfig11729>;

interface HeavyProps11729 {
  config: DeepPartial11729<NestedConfig11729>;
  path?: ConfigPaths11729;
}

const HeavyComponent11729 = memo(function HeavyComponent11729({ config }: HeavyProps11729) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11729) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11729 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11729: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11729.displayName = 'HeavyComponent11729';
export default HeavyComponent11729;
