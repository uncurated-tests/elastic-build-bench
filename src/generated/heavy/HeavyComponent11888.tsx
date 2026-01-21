'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11888<T> = T extends (infer U)[]
  ? DeepReadonlyArray11888<U>
  : T extends object
  ? DeepReadonlyObject11888<T>
  : T;

interface DeepReadonlyArray11888<T> extends ReadonlyArray<DeepReadonly11888<T>> {}

type DeepReadonlyObject11888<T> = {
  readonly [P in keyof T]: DeepReadonly11888<T[P]>;
};

type UnionToIntersection11888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11888<T> = UnionToIntersection11888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11888<T extends unknown[], V> = [...T, V];

type TuplifyUnion11888<T, L = LastOf11888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11888<TuplifyUnion11888<Exclude<T, L>>, L>;

type DeepPartial11888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11888<T[P]> }
  : T;

type Paths11888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11888<K, Paths11888<T[K], Prev11888[D]>> : never }[keyof T]
  : never;

type Prev11888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11888 {
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

type ConfigPaths11888 = Paths11888<NestedConfig11888>;

interface HeavyProps11888 {
  config: DeepPartial11888<NestedConfig11888>;
  path?: ConfigPaths11888;
}

const HeavyComponent11888 = memo(function HeavyComponent11888({ config }: HeavyProps11888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11888.displayName = 'HeavyComponent11888';
export default HeavyComponent11888;
