'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11211<T> = T extends (infer U)[]
  ? DeepReadonlyArray11211<U>
  : T extends object
  ? DeepReadonlyObject11211<T>
  : T;

interface DeepReadonlyArray11211<T> extends ReadonlyArray<DeepReadonly11211<T>> {}

type DeepReadonlyObject11211<T> = {
  readonly [P in keyof T]: DeepReadonly11211<T[P]>;
};

type UnionToIntersection11211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11211<T> = UnionToIntersection11211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11211<T extends unknown[], V> = [...T, V];

type TuplifyUnion11211<T, L = LastOf11211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11211<TuplifyUnion11211<Exclude<T, L>>, L>;

type DeepPartial11211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11211<T[P]> }
  : T;

type Paths11211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11211<K, Paths11211<T[K], Prev11211[D]>> : never }[keyof T]
  : never;

type Prev11211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11211 {
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

type ConfigPaths11211 = Paths11211<NestedConfig11211>;

interface HeavyProps11211 {
  config: DeepPartial11211<NestedConfig11211>;
  path?: ConfigPaths11211;
}

const HeavyComponent11211 = memo(function HeavyComponent11211({ config }: HeavyProps11211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11211.displayName = 'HeavyComponent11211';
export default HeavyComponent11211;
