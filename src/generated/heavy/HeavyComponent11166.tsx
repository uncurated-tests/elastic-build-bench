'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11166<T> = T extends (infer U)[]
  ? DeepReadonlyArray11166<U>
  : T extends object
  ? DeepReadonlyObject11166<T>
  : T;

interface DeepReadonlyArray11166<T> extends ReadonlyArray<DeepReadonly11166<T>> {}

type DeepReadonlyObject11166<T> = {
  readonly [P in keyof T]: DeepReadonly11166<T[P]>;
};

type UnionToIntersection11166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11166<T> = UnionToIntersection11166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11166<T extends unknown[], V> = [...T, V];

type TuplifyUnion11166<T, L = LastOf11166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11166<TuplifyUnion11166<Exclude<T, L>>, L>;

type DeepPartial11166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11166<T[P]> }
  : T;

type Paths11166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11166<K, Paths11166<T[K], Prev11166[D]>> : never }[keyof T]
  : never;

type Prev11166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11166 {
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

type ConfigPaths11166 = Paths11166<NestedConfig11166>;

interface HeavyProps11166 {
  config: DeepPartial11166<NestedConfig11166>;
  path?: ConfigPaths11166;
}

const HeavyComponent11166 = memo(function HeavyComponent11166({ config }: HeavyProps11166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11166.displayName = 'HeavyComponent11166';
export default HeavyComponent11166;
