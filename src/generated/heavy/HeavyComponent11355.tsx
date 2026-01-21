'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11355<T> = T extends (infer U)[]
  ? DeepReadonlyArray11355<U>
  : T extends object
  ? DeepReadonlyObject11355<T>
  : T;

interface DeepReadonlyArray11355<T> extends ReadonlyArray<DeepReadonly11355<T>> {}

type DeepReadonlyObject11355<T> = {
  readonly [P in keyof T]: DeepReadonly11355<T[P]>;
};

type UnionToIntersection11355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11355<T> = UnionToIntersection11355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11355<T extends unknown[], V> = [...T, V];

type TuplifyUnion11355<T, L = LastOf11355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11355<TuplifyUnion11355<Exclude<T, L>>, L>;

type DeepPartial11355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11355<T[P]> }
  : T;

type Paths11355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11355<K, Paths11355<T[K], Prev11355[D]>> : never }[keyof T]
  : never;

type Prev11355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11355 {
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

type ConfigPaths11355 = Paths11355<NestedConfig11355>;

interface HeavyProps11355 {
  config: DeepPartial11355<NestedConfig11355>;
  path?: ConfigPaths11355;
}

const HeavyComponent11355 = memo(function HeavyComponent11355({ config }: HeavyProps11355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11355.displayName = 'HeavyComponent11355';
export default HeavyComponent11355;
