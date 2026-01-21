'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11032<T> = T extends (infer U)[]
  ? DeepReadonlyArray11032<U>
  : T extends object
  ? DeepReadonlyObject11032<T>
  : T;

interface DeepReadonlyArray11032<T> extends ReadonlyArray<DeepReadonly11032<T>> {}

type DeepReadonlyObject11032<T> = {
  readonly [P in keyof T]: DeepReadonly11032<T[P]>;
};

type UnionToIntersection11032<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11032<T> = UnionToIntersection11032<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11032<T extends unknown[], V> = [...T, V];

type TuplifyUnion11032<T, L = LastOf11032<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11032<TuplifyUnion11032<Exclude<T, L>>, L>;

type DeepPartial11032<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11032<T[P]> }
  : T;

type Paths11032<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11032<K, Paths11032<T[K], Prev11032[D]>> : never }[keyof T]
  : never;

type Prev11032 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11032<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11032 {
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

type ConfigPaths11032 = Paths11032<NestedConfig11032>;

interface HeavyProps11032 {
  config: DeepPartial11032<NestedConfig11032>;
  path?: ConfigPaths11032;
}

const HeavyComponent11032 = memo(function HeavyComponent11032({ config }: HeavyProps11032) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11032) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11032 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11032: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11032.displayName = 'HeavyComponent11032';
export default HeavyComponent11032;
