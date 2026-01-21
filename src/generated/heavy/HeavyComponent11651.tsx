'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11651<T> = T extends (infer U)[]
  ? DeepReadonlyArray11651<U>
  : T extends object
  ? DeepReadonlyObject11651<T>
  : T;

interface DeepReadonlyArray11651<T> extends ReadonlyArray<DeepReadonly11651<T>> {}

type DeepReadonlyObject11651<T> = {
  readonly [P in keyof T]: DeepReadonly11651<T[P]>;
};

type UnionToIntersection11651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11651<T> = UnionToIntersection11651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11651<T extends unknown[], V> = [...T, V];

type TuplifyUnion11651<T, L = LastOf11651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11651<TuplifyUnion11651<Exclude<T, L>>, L>;

type DeepPartial11651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11651<T[P]> }
  : T;

type Paths11651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11651<K, Paths11651<T[K], Prev11651[D]>> : never }[keyof T]
  : never;

type Prev11651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11651 {
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

type ConfigPaths11651 = Paths11651<NestedConfig11651>;

interface HeavyProps11651 {
  config: DeepPartial11651<NestedConfig11651>;
  path?: ConfigPaths11651;
}

const HeavyComponent11651 = memo(function HeavyComponent11651({ config }: HeavyProps11651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11651.displayName = 'HeavyComponent11651';
export default HeavyComponent11651;
