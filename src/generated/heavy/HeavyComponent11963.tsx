'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11963<T> = T extends (infer U)[]
  ? DeepReadonlyArray11963<U>
  : T extends object
  ? DeepReadonlyObject11963<T>
  : T;

interface DeepReadonlyArray11963<T> extends ReadonlyArray<DeepReadonly11963<T>> {}

type DeepReadonlyObject11963<T> = {
  readonly [P in keyof T]: DeepReadonly11963<T[P]>;
};

type UnionToIntersection11963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11963<T> = UnionToIntersection11963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11963<T extends unknown[], V> = [...T, V];

type TuplifyUnion11963<T, L = LastOf11963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11963<TuplifyUnion11963<Exclude<T, L>>, L>;

type DeepPartial11963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11963<T[P]> }
  : T;

type Paths11963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11963<K, Paths11963<T[K], Prev11963[D]>> : never }[keyof T]
  : never;

type Prev11963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11963 {
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

type ConfigPaths11963 = Paths11963<NestedConfig11963>;

interface HeavyProps11963 {
  config: DeepPartial11963<NestedConfig11963>;
  path?: ConfigPaths11963;
}

const HeavyComponent11963 = memo(function HeavyComponent11963({ config }: HeavyProps11963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11963.displayName = 'HeavyComponent11963';
export default HeavyComponent11963;
