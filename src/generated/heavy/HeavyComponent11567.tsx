'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11567<T> = T extends (infer U)[]
  ? DeepReadonlyArray11567<U>
  : T extends object
  ? DeepReadonlyObject11567<T>
  : T;

interface DeepReadonlyArray11567<T> extends ReadonlyArray<DeepReadonly11567<T>> {}

type DeepReadonlyObject11567<T> = {
  readonly [P in keyof T]: DeepReadonly11567<T[P]>;
};

type UnionToIntersection11567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11567<T> = UnionToIntersection11567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11567<T extends unknown[], V> = [...T, V];

type TuplifyUnion11567<T, L = LastOf11567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11567<TuplifyUnion11567<Exclude<T, L>>, L>;

type DeepPartial11567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11567<T[P]> }
  : T;

type Paths11567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11567<K, Paths11567<T[K], Prev11567[D]>> : never }[keyof T]
  : never;

type Prev11567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11567 {
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

type ConfigPaths11567 = Paths11567<NestedConfig11567>;

interface HeavyProps11567 {
  config: DeepPartial11567<NestedConfig11567>;
  path?: ConfigPaths11567;
}

const HeavyComponent11567 = memo(function HeavyComponent11567({ config }: HeavyProps11567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11567.displayName = 'HeavyComponent11567';
export default HeavyComponent11567;
