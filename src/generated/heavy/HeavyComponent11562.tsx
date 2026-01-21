'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11562<T> = T extends (infer U)[]
  ? DeepReadonlyArray11562<U>
  : T extends object
  ? DeepReadonlyObject11562<T>
  : T;

interface DeepReadonlyArray11562<T> extends ReadonlyArray<DeepReadonly11562<T>> {}

type DeepReadonlyObject11562<T> = {
  readonly [P in keyof T]: DeepReadonly11562<T[P]>;
};

type UnionToIntersection11562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11562<T> = UnionToIntersection11562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11562<T extends unknown[], V> = [...T, V];

type TuplifyUnion11562<T, L = LastOf11562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11562<TuplifyUnion11562<Exclude<T, L>>, L>;

type DeepPartial11562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11562<T[P]> }
  : T;

type Paths11562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11562<K, Paths11562<T[K], Prev11562[D]>> : never }[keyof T]
  : never;

type Prev11562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11562 {
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

type ConfigPaths11562 = Paths11562<NestedConfig11562>;

interface HeavyProps11562 {
  config: DeepPartial11562<NestedConfig11562>;
  path?: ConfigPaths11562;
}

const HeavyComponent11562 = memo(function HeavyComponent11562({ config }: HeavyProps11562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11562.displayName = 'HeavyComponent11562';
export default HeavyComponent11562;
