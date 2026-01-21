'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11572<T> = T extends (infer U)[]
  ? DeepReadonlyArray11572<U>
  : T extends object
  ? DeepReadonlyObject11572<T>
  : T;

interface DeepReadonlyArray11572<T> extends ReadonlyArray<DeepReadonly11572<T>> {}

type DeepReadonlyObject11572<T> = {
  readonly [P in keyof T]: DeepReadonly11572<T[P]>;
};

type UnionToIntersection11572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11572<T> = UnionToIntersection11572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11572<T extends unknown[], V> = [...T, V];

type TuplifyUnion11572<T, L = LastOf11572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11572<TuplifyUnion11572<Exclude<T, L>>, L>;

type DeepPartial11572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11572<T[P]> }
  : T;

type Paths11572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11572<K, Paths11572<T[K], Prev11572[D]>> : never }[keyof T]
  : never;

type Prev11572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11572 {
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

type ConfigPaths11572 = Paths11572<NestedConfig11572>;

interface HeavyProps11572 {
  config: DeepPartial11572<NestedConfig11572>;
  path?: ConfigPaths11572;
}

const HeavyComponent11572 = memo(function HeavyComponent11572({ config }: HeavyProps11572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11572.displayName = 'HeavyComponent11572';
export default HeavyComponent11572;
