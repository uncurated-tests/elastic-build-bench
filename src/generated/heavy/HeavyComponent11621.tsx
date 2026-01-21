'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11621<T> = T extends (infer U)[]
  ? DeepReadonlyArray11621<U>
  : T extends object
  ? DeepReadonlyObject11621<T>
  : T;

interface DeepReadonlyArray11621<T> extends ReadonlyArray<DeepReadonly11621<T>> {}

type DeepReadonlyObject11621<T> = {
  readonly [P in keyof T]: DeepReadonly11621<T[P]>;
};

type UnionToIntersection11621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11621<T> = UnionToIntersection11621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11621<T extends unknown[], V> = [...T, V];

type TuplifyUnion11621<T, L = LastOf11621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11621<TuplifyUnion11621<Exclude<T, L>>, L>;

type DeepPartial11621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11621<T[P]> }
  : T;

type Paths11621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11621<K, Paths11621<T[K], Prev11621[D]>> : never }[keyof T]
  : never;

type Prev11621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11621 {
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

type ConfigPaths11621 = Paths11621<NestedConfig11621>;

interface HeavyProps11621 {
  config: DeepPartial11621<NestedConfig11621>;
  path?: ConfigPaths11621;
}

const HeavyComponent11621 = memo(function HeavyComponent11621({ config }: HeavyProps11621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11621.displayName = 'HeavyComponent11621';
export default HeavyComponent11621;
