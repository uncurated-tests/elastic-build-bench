'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11515<T> = T extends (infer U)[]
  ? DeepReadonlyArray11515<U>
  : T extends object
  ? DeepReadonlyObject11515<T>
  : T;

interface DeepReadonlyArray11515<T> extends ReadonlyArray<DeepReadonly11515<T>> {}

type DeepReadonlyObject11515<T> = {
  readonly [P in keyof T]: DeepReadonly11515<T[P]>;
};

type UnionToIntersection11515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11515<T> = UnionToIntersection11515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11515<T extends unknown[], V> = [...T, V];

type TuplifyUnion11515<T, L = LastOf11515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11515<TuplifyUnion11515<Exclude<T, L>>, L>;

type DeepPartial11515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11515<T[P]> }
  : T;

type Paths11515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11515<K, Paths11515<T[K], Prev11515[D]>> : never }[keyof T]
  : never;

type Prev11515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11515 {
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

type ConfigPaths11515 = Paths11515<NestedConfig11515>;

interface HeavyProps11515 {
  config: DeepPartial11515<NestedConfig11515>;
  path?: ConfigPaths11515;
}

const HeavyComponent11515 = memo(function HeavyComponent11515({ config }: HeavyProps11515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11515.displayName = 'HeavyComponent11515';
export default HeavyComponent11515;
