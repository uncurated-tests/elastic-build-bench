'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11644<T> = T extends (infer U)[]
  ? DeepReadonlyArray11644<U>
  : T extends object
  ? DeepReadonlyObject11644<T>
  : T;

interface DeepReadonlyArray11644<T> extends ReadonlyArray<DeepReadonly11644<T>> {}

type DeepReadonlyObject11644<T> = {
  readonly [P in keyof T]: DeepReadonly11644<T[P]>;
};

type UnionToIntersection11644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11644<T> = UnionToIntersection11644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11644<T extends unknown[], V> = [...T, V];

type TuplifyUnion11644<T, L = LastOf11644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11644<TuplifyUnion11644<Exclude<T, L>>, L>;

type DeepPartial11644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11644<T[P]> }
  : T;

type Paths11644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11644<K, Paths11644<T[K], Prev11644[D]>> : never }[keyof T]
  : never;

type Prev11644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11644 {
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

type ConfigPaths11644 = Paths11644<NestedConfig11644>;

interface HeavyProps11644 {
  config: DeepPartial11644<NestedConfig11644>;
  path?: ConfigPaths11644;
}

const HeavyComponent11644 = memo(function HeavyComponent11644({ config }: HeavyProps11644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11644.displayName = 'HeavyComponent11644';
export default HeavyComponent11644;
