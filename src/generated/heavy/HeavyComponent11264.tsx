'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11264<T> = T extends (infer U)[]
  ? DeepReadonlyArray11264<U>
  : T extends object
  ? DeepReadonlyObject11264<T>
  : T;

interface DeepReadonlyArray11264<T> extends ReadonlyArray<DeepReadonly11264<T>> {}

type DeepReadonlyObject11264<T> = {
  readonly [P in keyof T]: DeepReadonly11264<T[P]>;
};

type UnionToIntersection11264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11264<T> = UnionToIntersection11264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11264<T extends unknown[], V> = [...T, V];

type TuplifyUnion11264<T, L = LastOf11264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11264<TuplifyUnion11264<Exclude<T, L>>, L>;

type DeepPartial11264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11264<T[P]> }
  : T;

type Paths11264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11264<K, Paths11264<T[K], Prev11264[D]>> : never }[keyof T]
  : never;

type Prev11264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11264 {
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

type ConfigPaths11264 = Paths11264<NestedConfig11264>;

interface HeavyProps11264 {
  config: DeepPartial11264<NestedConfig11264>;
  path?: ConfigPaths11264;
}

const HeavyComponent11264 = memo(function HeavyComponent11264({ config }: HeavyProps11264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11264.displayName = 'HeavyComponent11264';
export default HeavyComponent11264;
