'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11503<T> = T extends (infer U)[]
  ? DeepReadonlyArray11503<U>
  : T extends object
  ? DeepReadonlyObject11503<T>
  : T;

interface DeepReadonlyArray11503<T> extends ReadonlyArray<DeepReadonly11503<T>> {}

type DeepReadonlyObject11503<T> = {
  readonly [P in keyof T]: DeepReadonly11503<T[P]>;
};

type UnionToIntersection11503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11503<T> = UnionToIntersection11503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11503<T extends unknown[], V> = [...T, V];

type TuplifyUnion11503<T, L = LastOf11503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11503<TuplifyUnion11503<Exclude<T, L>>, L>;

type DeepPartial11503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11503<T[P]> }
  : T;

type Paths11503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11503<K, Paths11503<T[K], Prev11503[D]>> : never }[keyof T]
  : never;

type Prev11503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11503 {
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

type ConfigPaths11503 = Paths11503<NestedConfig11503>;

interface HeavyProps11503 {
  config: DeepPartial11503<NestedConfig11503>;
  path?: ConfigPaths11503;
}

const HeavyComponent11503 = memo(function HeavyComponent11503({ config }: HeavyProps11503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11503.displayName = 'HeavyComponent11503';
export default HeavyComponent11503;
