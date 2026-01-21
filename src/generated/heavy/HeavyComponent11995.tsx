'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11995<T> = T extends (infer U)[]
  ? DeepReadonlyArray11995<U>
  : T extends object
  ? DeepReadonlyObject11995<T>
  : T;

interface DeepReadonlyArray11995<T> extends ReadonlyArray<DeepReadonly11995<T>> {}

type DeepReadonlyObject11995<T> = {
  readonly [P in keyof T]: DeepReadonly11995<T[P]>;
};

type UnionToIntersection11995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11995<T> = UnionToIntersection11995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11995<T extends unknown[], V> = [...T, V];

type TuplifyUnion11995<T, L = LastOf11995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11995<TuplifyUnion11995<Exclude<T, L>>, L>;

type DeepPartial11995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11995<T[P]> }
  : T;

type Paths11995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11995<K, Paths11995<T[K], Prev11995[D]>> : never }[keyof T]
  : never;

type Prev11995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11995 {
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

type ConfigPaths11995 = Paths11995<NestedConfig11995>;

interface HeavyProps11995 {
  config: DeepPartial11995<NestedConfig11995>;
  path?: ConfigPaths11995;
}

const HeavyComponent11995 = memo(function HeavyComponent11995({ config }: HeavyProps11995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11995.displayName = 'HeavyComponent11995';
export default HeavyComponent11995;
