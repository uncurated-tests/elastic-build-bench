'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11948<T> = T extends (infer U)[]
  ? DeepReadonlyArray11948<U>
  : T extends object
  ? DeepReadonlyObject11948<T>
  : T;

interface DeepReadonlyArray11948<T> extends ReadonlyArray<DeepReadonly11948<T>> {}

type DeepReadonlyObject11948<T> = {
  readonly [P in keyof T]: DeepReadonly11948<T[P]>;
};

type UnionToIntersection11948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11948<T> = UnionToIntersection11948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11948<T extends unknown[], V> = [...T, V];

type TuplifyUnion11948<T, L = LastOf11948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11948<TuplifyUnion11948<Exclude<T, L>>, L>;

type DeepPartial11948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11948<T[P]> }
  : T;

type Paths11948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11948<K, Paths11948<T[K], Prev11948[D]>> : never }[keyof T]
  : never;

type Prev11948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11948 {
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

type ConfigPaths11948 = Paths11948<NestedConfig11948>;

interface HeavyProps11948 {
  config: DeepPartial11948<NestedConfig11948>;
  path?: ConfigPaths11948;
}

const HeavyComponent11948 = memo(function HeavyComponent11948({ config }: HeavyProps11948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11948.displayName = 'HeavyComponent11948';
export default HeavyComponent11948;
