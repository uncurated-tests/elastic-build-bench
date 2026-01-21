'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11784<T> = T extends (infer U)[]
  ? DeepReadonlyArray11784<U>
  : T extends object
  ? DeepReadonlyObject11784<T>
  : T;

interface DeepReadonlyArray11784<T> extends ReadonlyArray<DeepReadonly11784<T>> {}

type DeepReadonlyObject11784<T> = {
  readonly [P in keyof T]: DeepReadonly11784<T[P]>;
};

type UnionToIntersection11784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11784<T> = UnionToIntersection11784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11784<T extends unknown[], V> = [...T, V];

type TuplifyUnion11784<T, L = LastOf11784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11784<TuplifyUnion11784<Exclude<T, L>>, L>;

type DeepPartial11784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11784<T[P]> }
  : T;

type Paths11784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11784<K, Paths11784<T[K], Prev11784[D]>> : never }[keyof T]
  : never;

type Prev11784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11784 {
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

type ConfigPaths11784 = Paths11784<NestedConfig11784>;

interface HeavyProps11784 {
  config: DeepPartial11784<NestedConfig11784>;
  path?: ConfigPaths11784;
}

const HeavyComponent11784 = memo(function HeavyComponent11784({ config }: HeavyProps11784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11784.displayName = 'HeavyComponent11784';
export default HeavyComponent11784;
