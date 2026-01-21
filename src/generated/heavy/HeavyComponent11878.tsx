'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11878<T> = T extends (infer U)[]
  ? DeepReadonlyArray11878<U>
  : T extends object
  ? DeepReadonlyObject11878<T>
  : T;

interface DeepReadonlyArray11878<T> extends ReadonlyArray<DeepReadonly11878<T>> {}

type DeepReadonlyObject11878<T> = {
  readonly [P in keyof T]: DeepReadonly11878<T[P]>;
};

type UnionToIntersection11878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11878<T> = UnionToIntersection11878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11878<T extends unknown[], V> = [...T, V];

type TuplifyUnion11878<T, L = LastOf11878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11878<TuplifyUnion11878<Exclude<T, L>>, L>;

type DeepPartial11878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11878<T[P]> }
  : T;

type Paths11878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11878<K, Paths11878<T[K], Prev11878[D]>> : never }[keyof T]
  : never;

type Prev11878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11878 {
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

type ConfigPaths11878 = Paths11878<NestedConfig11878>;

interface HeavyProps11878 {
  config: DeepPartial11878<NestedConfig11878>;
  path?: ConfigPaths11878;
}

const HeavyComponent11878 = memo(function HeavyComponent11878({ config }: HeavyProps11878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11878.displayName = 'HeavyComponent11878';
export default HeavyComponent11878;
