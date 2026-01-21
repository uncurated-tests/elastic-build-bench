'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11310<T> = T extends (infer U)[]
  ? DeepReadonlyArray11310<U>
  : T extends object
  ? DeepReadonlyObject11310<T>
  : T;

interface DeepReadonlyArray11310<T> extends ReadonlyArray<DeepReadonly11310<T>> {}

type DeepReadonlyObject11310<T> = {
  readonly [P in keyof T]: DeepReadonly11310<T[P]>;
};

type UnionToIntersection11310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11310<T> = UnionToIntersection11310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11310<T extends unknown[], V> = [...T, V];

type TuplifyUnion11310<T, L = LastOf11310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11310<TuplifyUnion11310<Exclude<T, L>>, L>;

type DeepPartial11310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11310<T[P]> }
  : T;

type Paths11310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11310<K, Paths11310<T[K], Prev11310[D]>> : never }[keyof T]
  : never;

type Prev11310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11310 {
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

type ConfigPaths11310 = Paths11310<NestedConfig11310>;

interface HeavyProps11310 {
  config: DeepPartial11310<NestedConfig11310>;
  path?: ConfigPaths11310;
}

const HeavyComponent11310 = memo(function HeavyComponent11310({ config }: HeavyProps11310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11310.displayName = 'HeavyComponent11310';
export default HeavyComponent11310;
