'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11317<T> = T extends (infer U)[]
  ? DeepReadonlyArray11317<U>
  : T extends object
  ? DeepReadonlyObject11317<T>
  : T;

interface DeepReadonlyArray11317<T> extends ReadonlyArray<DeepReadonly11317<T>> {}

type DeepReadonlyObject11317<T> = {
  readonly [P in keyof T]: DeepReadonly11317<T[P]>;
};

type UnionToIntersection11317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11317<T> = UnionToIntersection11317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11317<T extends unknown[], V> = [...T, V];

type TuplifyUnion11317<T, L = LastOf11317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11317<TuplifyUnion11317<Exclude<T, L>>, L>;

type DeepPartial11317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11317<T[P]> }
  : T;

type Paths11317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11317<K, Paths11317<T[K], Prev11317[D]>> : never }[keyof T]
  : never;

type Prev11317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11317 {
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

type ConfigPaths11317 = Paths11317<NestedConfig11317>;

interface HeavyProps11317 {
  config: DeepPartial11317<NestedConfig11317>;
  path?: ConfigPaths11317;
}

const HeavyComponent11317 = memo(function HeavyComponent11317({ config }: HeavyProps11317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11317.displayName = 'HeavyComponent11317';
export default HeavyComponent11317;
