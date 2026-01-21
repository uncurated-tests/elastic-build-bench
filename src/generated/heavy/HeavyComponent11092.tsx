'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11092<T> = T extends (infer U)[]
  ? DeepReadonlyArray11092<U>
  : T extends object
  ? DeepReadonlyObject11092<T>
  : T;

interface DeepReadonlyArray11092<T> extends ReadonlyArray<DeepReadonly11092<T>> {}

type DeepReadonlyObject11092<T> = {
  readonly [P in keyof T]: DeepReadonly11092<T[P]>;
};

type UnionToIntersection11092<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11092<T> = UnionToIntersection11092<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11092<T extends unknown[], V> = [...T, V];

type TuplifyUnion11092<T, L = LastOf11092<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11092<TuplifyUnion11092<Exclude<T, L>>, L>;

type DeepPartial11092<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11092<T[P]> }
  : T;

type Paths11092<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11092<K, Paths11092<T[K], Prev11092[D]>> : never }[keyof T]
  : never;

type Prev11092 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11092<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11092 {
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

type ConfigPaths11092 = Paths11092<NestedConfig11092>;

interface HeavyProps11092 {
  config: DeepPartial11092<NestedConfig11092>;
  path?: ConfigPaths11092;
}

const HeavyComponent11092 = memo(function HeavyComponent11092({ config }: HeavyProps11092) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11092) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11092 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11092: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11092.displayName = 'HeavyComponent11092';
export default HeavyComponent11092;
