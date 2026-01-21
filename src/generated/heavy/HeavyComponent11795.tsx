'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11795<T> = T extends (infer U)[]
  ? DeepReadonlyArray11795<U>
  : T extends object
  ? DeepReadonlyObject11795<T>
  : T;

interface DeepReadonlyArray11795<T> extends ReadonlyArray<DeepReadonly11795<T>> {}

type DeepReadonlyObject11795<T> = {
  readonly [P in keyof T]: DeepReadonly11795<T[P]>;
};

type UnionToIntersection11795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11795<T> = UnionToIntersection11795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11795<T extends unknown[], V> = [...T, V];

type TuplifyUnion11795<T, L = LastOf11795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11795<TuplifyUnion11795<Exclude<T, L>>, L>;

type DeepPartial11795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11795<T[P]> }
  : T;

type Paths11795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11795<K, Paths11795<T[K], Prev11795[D]>> : never }[keyof T]
  : never;

type Prev11795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11795 {
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

type ConfigPaths11795 = Paths11795<NestedConfig11795>;

interface HeavyProps11795 {
  config: DeepPartial11795<NestedConfig11795>;
  path?: ConfigPaths11795;
}

const HeavyComponent11795 = memo(function HeavyComponent11795({ config }: HeavyProps11795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11795.displayName = 'HeavyComponent11795';
export default HeavyComponent11795;
