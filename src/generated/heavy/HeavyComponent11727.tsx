'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11727<T> = T extends (infer U)[]
  ? DeepReadonlyArray11727<U>
  : T extends object
  ? DeepReadonlyObject11727<T>
  : T;

interface DeepReadonlyArray11727<T> extends ReadonlyArray<DeepReadonly11727<T>> {}

type DeepReadonlyObject11727<T> = {
  readonly [P in keyof T]: DeepReadonly11727<T[P]>;
};

type UnionToIntersection11727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11727<T> = UnionToIntersection11727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11727<T extends unknown[], V> = [...T, V];

type TuplifyUnion11727<T, L = LastOf11727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11727<TuplifyUnion11727<Exclude<T, L>>, L>;

type DeepPartial11727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11727<T[P]> }
  : T;

type Paths11727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11727<K, Paths11727<T[K], Prev11727[D]>> : never }[keyof T]
  : never;

type Prev11727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11727 {
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

type ConfigPaths11727 = Paths11727<NestedConfig11727>;

interface HeavyProps11727 {
  config: DeepPartial11727<NestedConfig11727>;
  path?: ConfigPaths11727;
}

const HeavyComponent11727 = memo(function HeavyComponent11727({ config }: HeavyProps11727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11727.displayName = 'HeavyComponent11727';
export default HeavyComponent11727;
