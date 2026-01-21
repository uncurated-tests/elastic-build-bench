'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11473<T> = T extends (infer U)[]
  ? DeepReadonlyArray11473<U>
  : T extends object
  ? DeepReadonlyObject11473<T>
  : T;

interface DeepReadonlyArray11473<T> extends ReadonlyArray<DeepReadonly11473<T>> {}

type DeepReadonlyObject11473<T> = {
  readonly [P in keyof T]: DeepReadonly11473<T[P]>;
};

type UnionToIntersection11473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11473<T> = UnionToIntersection11473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11473<T extends unknown[], V> = [...T, V];

type TuplifyUnion11473<T, L = LastOf11473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11473<TuplifyUnion11473<Exclude<T, L>>, L>;

type DeepPartial11473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11473<T[P]> }
  : T;

type Paths11473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11473<K, Paths11473<T[K], Prev11473[D]>> : never }[keyof T]
  : never;

type Prev11473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11473 {
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

type ConfigPaths11473 = Paths11473<NestedConfig11473>;

interface HeavyProps11473 {
  config: DeepPartial11473<NestedConfig11473>;
  path?: ConfigPaths11473;
}

const HeavyComponent11473 = memo(function HeavyComponent11473({ config }: HeavyProps11473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11473.displayName = 'HeavyComponent11473';
export default HeavyComponent11473;
