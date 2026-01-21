'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11760<T> = T extends (infer U)[]
  ? DeepReadonlyArray11760<U>
  : T extends object
  ? DeepReadonlyObject11760<T>
  : T;

interface DeepReadonlyArray11760<T> extends ReadonlyArray<DeepReadonly11760<T>> {}

type DeepReadonlyObject11760<T> = {
  readonly [P in keyof T]: DeepReadonly11760<T[P]>;
};

type UnionToIntersection11760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11760<T> = UnionToIntersection11760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11760<T extends unknown[], V> = [...T, V];

type TuplifyUnion11760<T, L = LastOf11760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11760<TuplifyUnion11760<Exclude<T, L>>, L>;

type DeepPartial11760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11760<T[P]> }
  : T;

type Paths11760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11760<K, Paths11760<T[K], Prev11760[D]>> : never }[keyof T]
  : never;

type Prev11760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11760 {
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

type ConfigPaths11760 = Paths11760<NestedConfig11760>;

interface HeavyProps11760 {
  config: DeepPartial11760<NestedConfig11760>;
  path?: ConfigPaths11760;
}

const HeavyComponent11760 = memo(function HeavyComponent11760({ config }: HeavyProps11760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11760.displayName = 'HeavyComponent11760';
export default HeavyComponent11760;
