'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11141<T> = T extends (infer U)[]
  ? DeepReadonlyArray11141<U>
  : T extends object
  ? DeepReadonlyObject11141<T>
  : T;

interface DeepReadonlyArray11141<T> extends ReadonlyArray<DeepReadonly11141<T>> {}

type DeepReadonlyObject11141<T> = {
  readonly [P in keyof T]: DeepReadonly11141<T[P]>;
};

type UnionToIntersection11141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11141<T> = UnionToIntersection11141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11141<T extends unknown[], V> = [...T, V];

type TuplifyUnion11141<T, L = LastOf11141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11141<TuplifyUnion11141<Exclude<T, L>>, L>;

type DeepPartial11141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11141<T[P]> }
  : T;

type Paths11141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11141<K, Paths11141<T[K], Prev11141[D]>> : never }[keyof T]
  : never;

type Prev11141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11141 {
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

type ConfigPaths11141 = Paths11141<NestedConfig11141>;

interface HeavyProps11141 {
  config: DeepPartial11141<NestedConfig11141>;
  path?: ConfigPaths11141;
}

const HeavyComponent11141 = memo(function HeavyComponent11141({ config }: HeavyProps11141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11141.displayName = 'HeavyComponent11141';
export default HeavyComponent11141;
