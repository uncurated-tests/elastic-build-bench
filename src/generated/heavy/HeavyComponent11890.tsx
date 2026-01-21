'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11890<T> = T extends (infer U)[]
  ? DeepReadonlyArray11890<U>
  : T extends object
  ? DeepReadonlyObject11890<T>
  : T;

interface DeepReadonlyArray11890<T> extends ReadonlyArray<DeepReadonly11890<T>> {}

type DeepReadonlyObject11890<T> = {
  readonly [P in keyof T]: DeepReadonly11890<T[P]>;
};

type UnionToIntersection11890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11890<T> = UnionToIntersection11890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11890<T extends unknown[], V> = [...T, V];

type TuplifyUnion11890<T, L = LastOf11890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11890<TuplifyUnion11890<Exclude<T, L>>, L>;

type DeepPartial11890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11890<T[P]> }
  : T;

type Paths11890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11890<K, Paths11890<T[K], Prev11890[D]>> : never }[keyof T]
  : never;

type Prev11890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11890 {
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

type ConfigPaths11890 = Paths11890<NestedConfig11890>;

interface HeavyProps11890 {
  config: DeepPartial11890<NestedConfig11890>;
  path?: ConfigPaths11890;
}

const HeavyComponent11890 = memo(function HeavyComponent11890({ config }: HeavyProps11890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11890.displayName = 'HeavyComponent11890';
export default HeavyComponent11890;
