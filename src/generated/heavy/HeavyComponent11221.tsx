'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11221<T> = T extends (infer U)[]
  ? DeepReadonlyArray11221<U>
  : T extends object
  ? DeepReadonlyObject11221<T>
  : T;

interface DeepReadonlyArray11221<T> extends ReadonlyArray<DeepReadonly11221<T>> {}

type DeepReadonlyObject11221<T> = {
  readonly [P in keyof T]: DeepReadonly11221<T[P]>;
};

type UnionToIntersection11221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11221<T> = UnionToIntersection11221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11221<T extends unknown[], V> = [...T, V];

type TuplifyUnion11221<T, L = LastOf11221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11221<TuplifyUnion11221<Exclude<T, L>>, L>;

type DeepPartial11221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11221<T[P]> }
  : T;

type Paths11221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11221<K, Paths11221<T[K], Prev11221[D]>> : never }[keyof T]
  : never;

type Prev11221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11221 {
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

type ConfigPaths11221 = Paths11221<NestedConfig11221>;

interface HeavyProps11221 {
  config: DeepPartial11221<NestedConfig11221>;
  path?: ConfigPaths11221;
}

const HeavyComponent11221 = memo(function HeavyComponent11221({ config }: HeavyProps11221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11221.displayName = 'HeavyComponent11221';
export default HeavyComponent11221;
