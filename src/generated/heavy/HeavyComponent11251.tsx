'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11251<T> = T extends (infer U)[]
  ? DeepReadonlyArray11251<U>
  : T extends object
  ? DeepReadonlyObject11251<T>
  : T;

interface DeepReadonlyArray11251<T> extends ReadonlyArray<DeepReadonly11251<T>> {}

type DeepReadonlyObject11251<T> = {
  readonly [P in keyof T]: DeepReadonly11251<T[P]>;
};

type UnionToIntersection11251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11251<T> = UnionToIntersection11251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11251<T extends unknown[], V> = [...T, V];

type TuplifyUnion11251<T, L = LastOf11251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11251<TuplifyUnion11251<Exclude<T, L>>, L>;

type DeepPartial11251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11251<T[P]> }
  : T;

type Paths11251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11251<K, Paths11251<T[K], Prev11251[D]>> : never }[keyof T]
  : never;

type Prev11251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11251 {
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

type ConfigPaths11251 = Paths11251<NestedConfig11251>;

interface HeavyProps11251 {
  config: DeepPartial11251<NestedConfig11251>;
  path?: ConfigPaths11251;
}

const HeavyComponent11251 = memo(function HeavyComponent11251({ config }: HeavyProps11251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11251.displayName = 'HeavyComponent11251';
export default HeavyComponent11251;
