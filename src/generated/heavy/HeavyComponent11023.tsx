'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11023<T> = T extends (infer U)[]
  ? DeepReadonlyArray11023<U>
  : T extends object
  ? DeepReadonlyObject11023<T>
  : T;

interface DeepReadonlyArray11023<T> extends ReadonlyArray<DeepReadonly11023<T>> {}

type DeepReadonlyObject11023<T> = {
  readonly [P in keyof T]: DeepReadonly11023<T[P]>;
};

type UnionToIntersection11023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11023<T> = UnionToIntersection11023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11023<T extends unknown[], V> = [...T, V];

type TuplifyUnion11023<T, L = LastOf11023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11023<TuplifyUnion11023<Exclude<T, L>>, L>;

type DeepPartial11023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11023<T[P]> }
  : T;

type Paths11023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11023<K, Paths11023<T[K], Prev11023[D]>> : never }[keyof T]
  : never;

type Prev11023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11023 {
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

type ConfigPaths11023 = Paths11023<NestedConfig11023>;

interface HeavyProps11023 {
  config: DeepPartial11023<NestedConfig11023>;
  path?: ConfigPaths11023;
}

const HeavyComponent11023 = memo(function HeavyComponent11023({ config }: HeavyProps11023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11023.displayName = 'HeavyComponent11023';
export default HeavyComponent11023;
