'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11383<T> = T extends (infer U)[]
  ? DeepReadonlyArray11383<U>
  : T extends object
  ? DeepReadonlyObject11383<T>
  : T;

interface DeepReadonlyArray11383<T> extends ReadonlyArray<DeepReadonly11383<T>> {}

type DeepReadonlyObject11383<T> = {
  readonly [P in keyof T]: DeepReadonly11383<T[P]>;
};

type UnionToIntersection11383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11383<T> = UnionToIntersection11383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11383<T extends unknown[], V> = [...T, V];

type TuplifyUnion11383<T, L = LastOf11383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11383<TuplifyUnion11383<Exclude<T, L>>, L>;

type DeepPartial11383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11383<T[P]> }
  : T;

type Paths11383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11383<K, Paths11383<T[K], Prev11383[D]>> : never }[keyof T]
  : never;

type Prev11383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11383 {
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

type ConfigPaths11383 = Paths11383<NestedConfig11383>;

interface HeavyProps11383 {
  config: DeepPartial11383<NestedConfig11383>;
  path?: ConfigPaths11383;
}

const HeavyComponent11383 = memo(function HeavyComponent11383({ config }: HeavyProps11383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11383.displayName = 'HeavyComponent11383';
export default HeavyComponent11383;
