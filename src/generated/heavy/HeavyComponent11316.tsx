'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11316<T> = T extends (infer U)[]
  ? DeepReadonlyArray11316<U>
  : T extends object
  ? DeepReadonlyObject11316<T>
  : T;

interface DeepReadonlyArray11316<T> extends ReadonlyArray<DeepReadonly11316<T>> {}

type DeepReadonlyObject11316<T> = {
  readonly [P in keyof T]: DeepReadonly11316<T[P]>;
};

type UnionToIntersection11316<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11316<T> = UnionToIntersection11316<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11316<T extends unknown[], V> = [...T, V];

type TuplifyUnion11316<T, L = LastOf11316<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11316<TuplifyUnion11316<Exclude<T, L>>, L>;

type DeepPartial11316<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11316<T[P]> }
  : T;

type Paths11316<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11316<K, Paths11316<T[K], Prev11316[D]>> : never }[keyof T]
  : never;

type Prev11316 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11316<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11316 {
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

type ConfigPaths11316 = Paths11316<NestedConfig11316>;

interface HeavyProps11316 {
  config: DeepPartial11316<NestedConfig11316>;
  path?: ConfigPaths11316;
}

const HeavyComponent11316 = memo(function HeavyComponent11316({ config }: HeavyProps11316) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11316) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11316 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11316: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11316.displayName = 'HeavyComponent11316';
export default HeavyComponent11316;
