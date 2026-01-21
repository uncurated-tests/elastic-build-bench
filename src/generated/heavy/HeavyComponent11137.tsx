'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11137<T> = T extends (infer U)[]
  ? DeepReadonlyArray11137<U>
  : T extends object
  ? DeepReadonlyObject11137<T>
  : T;

interface DeepReadonlyArray11137<T> extends ReadonlyArray<DeepReadonly11137<T>> {}

type DeepReadonlyObject11137<T> = {
  readonly [P in keyof T]: DeepReadonly11137<T[P]>;
};

type UnionToIntersection11137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11137<T> = UnionToIntersection11137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11137<T extends unknown[], V> = [...T, V];

type TuplifyUnion11137<T, L = LastOf11137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11137<TuplifyUnion11137<Exclude<T, L>>, L>;

type DeepPartial11137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11137<T[P]> }
  : T;

type Paths11137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11137<K, Paths11137<T[K], Prev11137[D]>> : never }[keyof T]
  : never;

type Prev11137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11137 {
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

type ConfigPaths11137 = Paths11137<NestedConfig11137>;

interface HeavyProps11137 {
  config: DeepPartial11137<NestedConfig11137>;
  path?: ConfigPaths11137;
}

const HeavyComponent11137 = memo(function HeavyComponent11137({ config }: HeavyProps11137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11137.displayName = 'HeavyComponent11137';
export default HeavyComponent11137;
