'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11376<T> = T extends (infer U)[]
  ? DeepReadonlyArray11376<U>
  : T extends object
  ? DeepReadonlyObject11376<T>
  : T;

interface DeepReadonlyArray11376<T> extends ReadonlyArray<DeepReadonly11376<T>> {}

type DeepReadonlyObject11376<T> = {
  readonly [P in keyof T]: DeepReadonly11376<T[P]>;
};

type UnionToIntersection11376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11376<T> = UnionToIntersection11376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11376<T extends unknown[], V> = [...T, V];

type TuplifyUnion11376<T, L = LastOf11376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11376<TuplifyUnion11376<Exclude<T, L>>, L>;

type DeepPartial11376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11376<T[P]> }
  : T;

type Paths11376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11376<K, Paths11376<T[K], Prev11376[D]>> : never }[keyof T]
  : never;

type Prev11376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11376 {
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

type ConfigPaths11376 = Paths11376<NestedConfig11376>;

interface HeavyProps11376 {
  config: DeepPartial11376<NestedConfig11376>;
  path?: ConfigPaths11376;
}

const HeavyComponent11376 = memo(function HeavyComponent11376({ config }: HeavyProps11376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11376.displayName = 'HeavyComponent11376';
export default HeavyComponent11376;
