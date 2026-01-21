'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11365<T> = T extends (infer U)[]
  ? DeepReadonlyArray11365<U>
  : T extends object
  ? DeepReadonlyObject11365<T>
  : T;

interface DeepReadonlyArray11365<T> extends ReadonlyArray<DeepReadonly11365<T>> {}

type DeepReadonlyObject11365<T> = {
  readonly [P in keyof T]: DeepReadonly11365<T[P]>;
};

type UnionToIntersection11365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11365<T> = UnionToIntersection11365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11365<T extends unknown[], V> = [...T, V];

type TuplifyUnion11365<T, L = LastOf11365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11365<TuplifyUnion11365<Exclude<T, L>>, L>;

type DeepPartial11365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11365<T[P]> }
  : T;

type Paths11365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11365<K, Paths11365<T[K], Prev11365[D]>> : never }[keyof T]
  : never;

type Prev11365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11365 {
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

type ConfigPaths11365 = Paths11365<NestedConfig11365>;

interface HeavyProps11365 {
  config: DeepPartial11365<NestedConfig11365>;
  path?: ConfigPaths11365;
}

const HeavyComponent11365 = memo(function HeavyComponent11365({ config }: HeavyProps11365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11365.displayName = 'HeavyComponent11365';
export default HeavyComponent11365;
