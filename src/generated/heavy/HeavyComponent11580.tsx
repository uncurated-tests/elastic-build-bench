'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11580<T> = T extends (infer U)[]
  ? DeepReadonlyArray11580<U>
  : T extends object
  ? DeepReadonlyObject11580<T>
  : T;

interface DeepReadonlyArray11580<T> extends ReadonlyArray<DeepReadonly11580<T>> {}

type DeepReadonlyObject11580<T> = {
  readonly [P in keyof T]: DeepReadonly11580<T[P]>;
};

type UnionToIntersection11580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11580<T> = UnionToIntersection11580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11580<T extends unknown[], V> = [...T, V];

type TuplifyUnion11580<T, L = LastOf11580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11580<TuplifyUnion11580<Exclude<T, L>>, L>;

type DeepPartial11580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11580<T[P]> }
  : T;

type Paths11580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11580<K, Paths11580<T[K], Prev11580[D]>> : never }[keyof T]
  : never;

type Prev11580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11580 {
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

type ConfigPaths11580 = Paths11580<NestedConfig11580>;

interface HeavyProps11580 {
  config: DeepPartial11580<NestedConfig11580>;
  path?: ConfigPaths11580;
}

const HeavyComponent11580 = memo(function HeavyComponent11580({ config }: HeavyProps11580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11580.displayName = 'HeavyComponent11580';
export default HeavyComponent11580;
