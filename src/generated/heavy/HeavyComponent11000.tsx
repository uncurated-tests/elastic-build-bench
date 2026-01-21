'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11000<T> = T extends (infer U)[]
  ? DeepReadonlyArray11000<U>
  : T extends object
  ? DeepReadonlyObject11000<T>
  : T;

interface DeepReadonlyArray11000<T> extends ReadonlyArray<DeepReadonly11000<T>> {}

type DeepReadonlyObject11000<T> = {
  readonly [P in keyof T]: DeepReadonly11000<T[P]>;
};

type UnionToIntersection11000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11000<T> = UnionToIntersection11000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11000<T extends unknown[], V> = [...T, V];

type TuplifyUnion11000<T, L = LastOf11000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11000<TuplifyUnion11000<Exclude<T, L>>, L>;

type DeepPartial11000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11000<T[P]> }
  : T;

type Paths11000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11000<K, Paths11000<T[K], Prev11000[D]>> : never }[keyof T]
  : never;

type Prev11000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11000 {
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

type ConfigPaths11000 = Paths11000<NestedConfig11000>;

interface HeavyProps11000 {
  config: DeepPartial11000<NestedConfig11000>;
  path?: ConfigPaths11000;
}

const HeavyComponent11000 = memo(function HeavyComponent11000({ config }: HeavyProps11000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11000.displayName = 'HeavyComponent11000';
export default HeavyComponent11000;
