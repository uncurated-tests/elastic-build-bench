'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11816<T> = T extends (infer U)[]
  ? DeepReadonlyArray11816<U>
  : T extends object
  ? DeepReadonlyObject11816<T>
  : T;

interface DeepReadonlyArray11816<T> extends ReadonlyArray<DeepReadonly11816<T>> {}

type DeepReadonlyObject11816<T> = {
  readonly [P in keyof T]: DeepReadonly11816<T[P]>;
};

type UnionToIntersection11816<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11816<T> = UnionToIntersection11816<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11816<T extends unknown[], V> = [...T, V];

type TuplifyUnion11816<T, L = LastOf11816<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11816<TuplifyUnion11816<Exclude<T, L>>, L>;

type DeepPartial11816<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11816<T[P]> }
  : T;

type Paths11816<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11816<K, Paths11816<T[K], Prev11816[D]>> : never }[keyof T]
  : never;

type Prev11816 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11816<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11816 {
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

type ConfigPaths11816 = Paths11816<NestedConfig11816>;

interface HeavyProps11816 {
  config: DeepPartial11816<NestedConfig11816>;
  path?: ConfigPaths11816;
}

const HeavyComponent11816 = memo(function HeavyComponent11816({ config }: HeavyProps11816) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11816) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11816 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11816: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11816.displayName = 'HeavyComponent11816';
export default HeavyComponent11816;
