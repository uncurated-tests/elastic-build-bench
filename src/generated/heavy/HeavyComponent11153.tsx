'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11153<T> = T extends (infer U)[]
  ? DeepReadonlyArray11153<U>
  : T extends object
  ? DeepReadonlyObject11153<T>
  : T;

interface DeepReadonlyArray11153<T> extends ReadonlyArray<DeepReadonly11153<T>> {}

type DeepReadonlyObject11153<T> = {
  readonly [P in keyof T]: DeepReadonly11153<T[P]>;
};

type UnionToIntersection11153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11153<T> = UnionToIntersection11153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11153<T extends unknown[], V> = [...T, V];

type TuplifyUnion11153<T, L = LastOf11153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11153<TuplifyUnion11153<Exclude<T, L>>, L>;

type DeepPartial11153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11153<T[P]> }
  : T;

type Paths11153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11153<K, Paths11153<T[K], Prev11153[D]>> : never }[keyof T]
  : never;

type Prev11153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11153 {
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

type ConfigPaths11153 = Paths11153<NestedConfig11153>;

interface HeavyProps11153 {
  config: DeepPartial11153<NestedConfig11153>;
  path?: ConfigPaths11153;
}

const HeavyComponent11153 = memo(function HeavyComponent11153({ config }: HeavyProps11153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11153.displayName = 'HeavyComponent11153';
export default HeavyComponent11153;
