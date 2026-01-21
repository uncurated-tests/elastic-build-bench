'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11225<T> = T extends (infer U)[]
  ? DeepReadonlyArray11225<U>
  : T extends object
  ? DeepReadonlyObject11225<T>
  : T;

interface DeepReadonlyArray11225<T> extends ReadonlyArray<DeepReadonly11225<T>> {}

type DeepReadonlyObject11225<T> = {
  readonly [P in keyof T]: DeepReadonly11225<T[P]>;
};

type UnionToIntersection11225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11225<T> = UnionToIntersection11225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11225<T extends unknown[], V> = [...T, V];

type TuplifyUnion11225<T, L = LastOf11225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11225<TuplifyUnion11225<Exclude<T, L>>, L>;

type DeepPartial11225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11225<T[P]> }
  : T;

type Paths11225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11225<K, Paths11225<T[K], Prev11225[D]>> : never }[keyof T]
  : never;

type Prev11225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11225 {
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

type ConfigPaths11225 = Paths11225<NestedConfig11225>;

interface HeavyProps11225 {
  config: DeepPartial11225<NestedConfig11225>;
  path?: ConfigPaths11225;
}

const HeavyComponent11225 = memo(function HeavyComponent11225({ config }: HeavyProps11225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11225.displayName = 'HeavyComponent11225';
export default HeavyComponent11225;
