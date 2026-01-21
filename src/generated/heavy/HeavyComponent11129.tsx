'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11129<T> = T extends (infer U)[]
  ? DeepReadonlyArray11129<U>
  : T extends object
  ? DeepReadonlyObject11129<T>
  : T;

interface DeepReadonlyArray11129<T> extends ReadonlyArray<DeepReadonly11129<T>> {}

type DeepReadonlyObject11129<T> = {
  readonly [P in keyof T]: DeepReadonly11129<T[P]>;
};

type UnionToIntersection11129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11129<T> = UnionToIntersection11129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11129<T extends unknown[], V> = [...T, V];

type TuplifyUnion11129<T, L = LastOf11129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11129<TuplifyUnion11129<Exclude<T, L>>, L>;

type DeepPartial11129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11129<T[P]> }
  : T;

type Paths11129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11129<K, Paths11129<T[K], Prev11129[D]>> : never }[keyof T]
  : never;

type Prev11129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11129 {
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

type ConfigPaths11129 = Paths11129<NestedConfig11129>;

interface HeavyProps11129 {
  config: DeepPartial11129<NestedConfig11129>;
  path?: ConfigPaths11129;
}

const HeavyComponent11129 = memo(function HeavyComponent11129({ config }: HeavyProps11129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11129.displayName = 'HeavyComponent11129';
export default HeavyComponent11129;
