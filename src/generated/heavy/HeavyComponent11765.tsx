'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11765<T> = T extends (infer U)[]
  ? DeepReadonlyArray11765<U>
  : T extends object
  ? DeepReadonlyObject11765<T>
  : T;

interface DeepReadonlyArray11765<T> extends ReadonlyArray<DeepReadonly11765<T>> {}

type DeepReadonlyObject11765<T> = {
  readonly [P in keyof T]: DeepReadonly11765<T[P]>;
};

type UnionToIntersection11765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11765<T> = UnionToIntersection11765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11765<T extends unknown[], V> = [...T, V];

type TuplifyUnion11765<T, L = LastOf11765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11765<TuplifyUnion11765<Exclude<T, L>>, L>;

type DeepPartial11765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11765<T[P]> }
  : T;

type Paths11765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11765<K, Paths11765<T[K], Prev11765[D]>> : never }[keyof T]
  : never;

type Prev11765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11765 {
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

type ConfigPaths11765 = Paths11765<NestedConfig11765>;

interface HeavyProps11765 {
  config: DeepPartial11765<NestedConfig11765>;
  path?: ConfigPaths11765;
}

const HeavyComponent11765 = memo(function HeavyComponent11765({ config }: HeavyProps11765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11765.displayName = 'HeavyComponent11765';
export default HeavyComponent11765;
