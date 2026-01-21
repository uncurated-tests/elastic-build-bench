'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11038<T> = T extends (infer U)[]
  ? DeepReadonlyArray11038<U>
  : T extends object
  ? DeepReadonlyObject11038<T>
  : T;

interface DeepReadonlyArray11038<T> extends ReadonlyArray<DeepReadonly11038<T>> {}

type DeepReadonlyObject11038<T> = {
  readonly [P in keyof T]: DeepReadonly11038<T[P]>;
};

type UnionToIntersection11038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11038<T> = UnionToIntersection11038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11038<T extends unknown[], V> = [...T, V];

type TuplifyUnion11038<T, L = LastOf11038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11038<TuplifyUnion11038<Exclude<T, L>>, L>;

type DeepPartial11038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11038<T[P]> }
  : T;

type Paths11038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11038<K, Paths11038<T[K], Prev11038[D]>> : never }[keyof T]
  : never;

type Prev11038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11038 {
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

type ConfigPaths11038 = Paths11038<NestedConfig11038>;

interface HeavyProps11038 {
  config: DeepPartial11038<NestedConfig11038>;
  path?: ConfigPaths11038;
}

const HeavyComponent11038 = memo(function HeavyComponent11038({ config }: HeavyProps11038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11038.displayName = 'HeavyComponent11038';
export default HeavyComponent11038;
