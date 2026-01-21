'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11936<T> = T extends (infer U)[]
  ? DeepReadonlyArray11936<U>
  : T extends object
  ? DeepReadonlyObject11936<T>
  : T;

interface DeepReadonlyArray11936<T> extends ReadonlyArray<DeepReadonly11936<T>> {}

type DeepReadonlyObject11936<T> = {
  readonly [P in keyof T]: DeepReadonly11936<T[P]>;
};

type UnionToIntersection11936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11936<T> = UnionToIntersection11936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11936<T extends unknown[], V> = [...T, V];

type TuplifyUnion11936<T, L = LastOf11936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11936<TuplifyUnion11936<Exclude<T, L>>, L>;

type DeepPartial11936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11936<T[P]> }
  : T;

type Paths11936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11936<K, Paths11936<T[K], Prev11936[D]>> : never }[keyof T]
  : never;

type Prev11936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11936 {
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

type ConfigPaths11936 = Paths11936<NestedConfig11936>;

interface HeavyProps11936 {
  config: DeepPartial11936<NestedConfig11936>;
  path?: ConfigPaths11936;
}

const HeavyComponent11936 = memo(function HeavyComponent11936({ config }: HeavyProps11936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11936.displayName = 'HeavyComponent11936';
export default HeavyComponent11936;
