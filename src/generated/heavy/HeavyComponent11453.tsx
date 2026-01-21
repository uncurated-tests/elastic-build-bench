'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11453<T> = T extends (infer U)[]
  ? DeepReadonlyArray11453<U>
  : T extends object
  ? DeepReadonlyObject11453<T>
  : T;

interface DeepReadonlyArray11453<T> extends ReadonlyArray<DeepReadonly11453<T>> {}

type DeepReadonlyObject11453<T> = {
  readonly [P in keyof T]: DeepReadonly11453<T[P]>;
};

type UnionToIntersection11453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11453<T> = UnionToIntersection11453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11453<T extends unknown[], V> = [...T, V];

type TuplifyUnion11453<T, L = LastOf11453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11453<TuplifyUnion11453<Exclude<T, L>>, L>;

type DeepPartial11453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11453<T[P]> }
  : T;

type Paths11453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11453<K, Paths11453<T[K], Prev11453[D]>> : never }[keyof T]
  : never;

type Prev11453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11453 {
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

type ConfigPaths11453 = Paths11453<NestedConfig11453>;

interface HeavyProps11453 {
  config: DeepPartial11453<NestedConfig11453>;
  path?: ConfigPaths11453;
}

const HeavyComponent11453 = memo(function HeavyComponent11453({ config }: HeavyProps11453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11453.displayName = 'HeavyComponent11453';
export default HeavyComponent11453;
