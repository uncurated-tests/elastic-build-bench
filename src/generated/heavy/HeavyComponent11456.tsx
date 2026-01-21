'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11456<T> = T extends (infer U)[]
  ? DeepReadonlyArray11456<U>
  : T extends object
  ? DeepReadonlyObject11456<T>
  : T;

interface DeepReadonlyArray11456<T> extends ReadonlyArray<DeepReadonly11456<T>> {}

type DeepReadonlyObject11456<T> = {
  readonly [P in keyof T]: DeepReadonly11456<T[P]>;
};

type UnionToIntersection11456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11456<T> = UnionToIntersection11456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11456<T extends unknown[], V> = [...T, V];

type TuplifyUnion11456<T, L = LastOf11456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11456<TuplifyUnion11456<Exclude<T, L>>, L>;

type DeepPartial11456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11456<T[P]> }
  : T;

type Paths11456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11456<K, Paths11456<T[K], Prev11456[D]>> : never }[keyof T]
  : never;

type Prev11456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11456 {
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

type ConfigPaths11456 = Paths11456<NestedConfig11456>;

interface HeavyProps11456 {
  config: DeepPartial11456<NestedConfig11456>;
  path?: ConfigPaths11456;
}

const HeavyComponent11456 = memo(function HeavyComponent11456({ config }: HeavyProps11456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11456.displayName = 'HeavyComponent11456';
export default HeavyComponent11456;
