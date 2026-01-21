'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11573<T> = T extends (infer U)[]
  ? DeepReadonlyArray11573<U>
  : T extends object
  ? DeepReadonlyObject11573<T>
  : T;

interface DeepReadonlyArray11573<T> extends ReadonlyArray<DeepReadonly11573<T>> {}

type DeepReadonlyObject11573<T> = {
  readonly [P in keyof T]: DeepReadonly11573<T[P]>;
};

type UnionToIntersection11573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11573<T> = UnionToIntersection11573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11573<T extends unknown[], V> = [...T, V];

type TuplifyUnion11573<T, L = LastOf11573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11573<TuplifyUnion11573<Exclude<T, L>>, L>;

type DeepPartial11573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11573<T[P]> }
  : T;

type Paths11573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11573<K, Paths11573<T[K], Prev11573[D]>> : never }[keyof T]
  : never;

type Prev11573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11573 {
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

type ConfigPaths11573 = Paths11573<NestedConfig11573>;

interface HeavyProps11573 {
  config: DeepPartial11573<NestedConfig11573>;
  path?: ConfigPaths11573;
}

const HeavyComponent11573 = memo(function HeavyComponent11573({ config }: HeavyProps11573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11573.displayName = 'HeavyComponent11573';
export default HeavyComponent11573;
