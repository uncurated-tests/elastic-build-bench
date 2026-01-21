'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11864<T> = T extends (infer U)[]
  ? DeepReadonlyArray11864<U>
  : T extends object
  ? DeepReadonlyObject11864<T>
  : T;

interface DeepReadonlyArray11864<T> extends ReadonlyArray<DeepReadonly11864<T>> {}

type DeepReadonlyObject11864<T> = {
  readonly [P in keyof T]: DeepReadonly11864<T[P]>;
};

type UnionToIntersection11864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11864<T> = UnionToIntersection11864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11864<T extends unknown[], V> = [...T, V];

type TuplifyUnion11864<T, L = LastOf11864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11864<TuplifyUnion11864<Exclude<T, L>>, L>;

type DeepPartial11864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11864<T[P]> }
  : T;

type Paths11864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11864<K, Paths11864<T[K], Prev11864[D]>> : never }[keyof T]
  : never;

type Prev11864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11864 {
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

type ConfigPaths11864 = Paths11864<NestedConfig11864>;

interface HeavyProps11864 {
  config: DeepPartial11864<NestedConfig11864>;
  path?: ConfigPaths11864;
}

const HeavyComponent11864 = memo(function HeavyComponent11864({ config }: HeavyProps11864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11864.displayName = 'HeavyComponent11864';
export default HeavyComponent11864;
