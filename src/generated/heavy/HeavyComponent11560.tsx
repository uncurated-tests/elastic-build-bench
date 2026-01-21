'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11560<T> = T extends (infer U)[]
  ? DeepReadonlyArray11560<U>
  : T extends object
  ? DeepReadonlyObject11560<T>
  : T;

interface DeepReadonlyArray11560<T> extends ReadonlyArray<DeepReadonly11560<T>> {}

type DeepReadonlyObject11560<T> = {
  readonly [P in keyof T]: DeepReadonly11560<T[P]>;
};

type UnionToIntersection11560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11560<T> = UnionToIntersection11560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11560<T extends unknown[], V> = [...T, V];

type TuplifyUnion11560<T, L = LastOf11560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11560<TuplifyUnion11560<Exclude<T, L>>, L>;

type DeepPartial11560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11560<T[P]> }
  : T;

type Paths11560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11560<K, Paths11560<T[K], Prev11560[D]>> : never }[keyof T]
  : never;

type Prev11560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11560 {
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

type ConfigPaths11560 = Paths11560<NestedConfig11560>;

interface HeavyProps11560 {
  config: DeepPartial11560<NestedConfig11560>;
  path?: ConfigPaths11560;
}

const HeavyComponent11560 = memo(function HeavyComponent11560({ config }: HeavyProps11560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11560.displayName = 'HeavyComponent11560';
export default HeavyComponent11560;
