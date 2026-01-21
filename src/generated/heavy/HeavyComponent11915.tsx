'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11915<T> = T extends (infer U)[]
  ? DeepReadonlyArray11915<U>
  : T extends object
  ? DeepReadonlyObject11915<T>
  : T;

interface DeepReadonlyArray11915<T> extends ReadonlyArray<DeepReadonly11915<T>> {}

type DeepReadonlyObject11915<T> = {
  readonly [P in keyof T]: DeepReadonly11915<T[P]>;
};

type UnionToIntersection11915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11915<T> = UnionToIntersection11915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11915<T extends unknown[], V> = [...T, V];

type TuplifyUnion11915<T, L = LastOf11915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11915<TuplifyUnion11915<Exclude<T, L>>, L>;

type DeepPartial11915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11915<T[P]> }
  : T;

type Paths11915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11915<K, Paths11915<T[K], Prev11915[D]>> : never }[keyof T]
  : never;

type Prev11915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11915 {
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

type ConfigPaths11915 = Paths11915<NestedConfig11915>;

interface HeavyProps11915 {
  config: DeepPartial11915<NestedConfig11915>;
  path?: ConfigPaths11915;
}

const HeavyComponent11915 = memo(function HeavyComponent11915({ config }: HeavyProps11915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11915.displayName = 'HeavyComponent11915';
export default HeavyComponent11915;
