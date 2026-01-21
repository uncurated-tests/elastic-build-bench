'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11592<T> = T extends (infer U)[]
  ? DeepReadonlyArray11592<U>
  : T extends object
  ? DeepReadonlyObject11592<T>
  : T;

interface DeepReadonlyArray11592<T> extends ReadonlyArray<DeepReadonly11592<T>> {}

type DeepReadonlyObject11592<T> = {
  readonly [P in keyof T]: DeepReadonly11592<T[P]>;
};

type UnionToIntersection11592<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11592<T> = UnionToIntersection11592<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11592<T extends unknown[], V> = [...T, V];

type TuplifyUnion11592<T, L = LastOf11592<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11592<TuplifyUnion11592<Exclude<T, L>>, L>;

type DeepPartial11592<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11592<T[P]> }
  : T;

type Paths11592<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11592<K, Paths11592<T[K], Prev11592[D]>> : never }[keyof T]
  : never;

type Prev11592 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11592<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11592 {
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

type ConfigPaths11592 = Paths11592<NestedConfig11592>;

interface HeavyProps11592 {
  config: DeepPartial11592<NestedConfig11592>;
  path?: ConfigPaths11592;
}

const HeavyComponent11592 = memo(function HeavyComponent11592({ config }: HeavyProps11592) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11592) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11592 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11592: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11592.displayName = 'HeavyComponent11592';
export default HeavyComponent11592;
