'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11674<T> = T extends (infer U)[]
  ? DeepReadonlyArray11674<U>
  : T extends object
  ? DeepReadonlyObject11674<T>
  : T;

interface DeepReadonlyArray11674<T> extends ReadonlyArray<DeepReadonly11674<T>> {}

type DeepReadonlyObject11674<T> = {
  readonly [P in keyof T]: DeepReadonly11674<T[P]>;
};

type UnionToIntersection11674<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11674<T> = UnionToIntersection11674<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11674<T extends unknown[], V> = [...T, V];

type TuplifyUnion11674<T, L = LastOf11674<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11674<TuplifyUnion11674<Exclude<T, L>>, L>;

type DeepPartial11674<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11674<T[P]> }
  : T;

type Paths11674<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11674<K, Paths11674<T[K], Prev11674[D]>> : never }[keyof T]
  : never;

type Prev11674 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11674<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11674 {
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

type ConfigPaths11674 = Paths11674<NestedConfig11674>;

interface HeavyProps11674 {
  config: DeepPartial11674<NestedConfig11674>;
  path?: ConfigPaths11674;
}

const HeavyComponent11674 = memo(function HeavyComponent11674({ config }: HeavyProps11674) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11674) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11674 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11674: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11674.displayName = 'HeavyComponent11674';
export default HeavyComponent11674;
