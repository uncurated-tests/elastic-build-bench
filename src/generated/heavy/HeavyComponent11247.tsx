'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11247<T> = T extends (infer U)[]
  ? DeepReadonlyArray11247<U>
  : T extends object
  ? DeepReadonlyObject11247<T>
  : T;

interface DeepReadonlyArray11247<T> extends ReadonlyArray<DeepReadonly11247<T>> {}

type DeepReadonlyObject11247<T> = {
  readonly [P in keyof T]: DeepReadonly11247<T[P]>;
};

type UnionToIntersection11247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11247<T> = UnionToIntersection11247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11247<T extends unknown[], V> = [...T, V];

type TuplifyUnion11247<T, L = LastOf11247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11247<TuplifyUnion11247<Exclude<T, L>>, L>;

type DeepPartial11247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11247<T[P]> }
  : T;

type Paths11247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11247<K, Paths11247<T[K], Prev11247[D]>> : never }[keyof T]
  : never;

type Prev11247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11247 {
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

type ConfigPaths11247 = Paths11247<NestedConfig11247>;

interface HeavyProps11247 {
  config: DeepPartial11247<NestedConfig11247>;
  path?: ConfigPaths11247;
}

const HeavyComponent11247 = memo(function HeavyComponent11247({ config }: HeavyProps11247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11247.displayName = 'HeavyComponent11247';
export default HeavyComponent11247;
