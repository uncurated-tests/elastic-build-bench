'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11021<T> = T extends (infer U)[]
  ? DeepReadonlyArray11021<U>
  : T extends object
  ? DeepReadonlyObject11021<T>
  : T;

interface DeepReadonlyArray11021<T> extends ReadonlyArray<DeepReadonly11021<T>> {}

type DeepReadonlyObject11021<T> = {
  readonly [P in keyof T]: DeepReadonly11021<T[P]>;
};

type UnionToIntersection11021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11021<T> = UnionToIntersection11021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11021<T extends unknown[], V> = [...T, V];

type TuplifyUnion11021<T, L = LastOf11021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11021<TuplifyUnion11021<Exclude<T, L>>, L>;

type DeepPartial11021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11021<T[P]> }
  : T;

type Paths11021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11021<K, Paths11021<T[K], Prev11021[D]>> : never }[keyof T]
  : never;

type Prev11021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11021 {
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

type ConfigPaths11021 = Paths11021<NestedConfig11021>;

interface HeavyProps11021 {
  config: DeepPartial11021<NestedConfig11021>;
  path?: ConfigPaths11021;
}

const HeavyComponent11021 = memo(function HeavyComponent11021({ config }: HeavyProps11021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11021.displayName = 'HeavyComponent11021';
export default HeavyComponent11021;
