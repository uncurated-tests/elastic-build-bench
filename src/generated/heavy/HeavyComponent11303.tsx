'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11303<T> = T extends (infer U)[]
  ? DeepReadonlyArray11303<U>
  : T extends object
  ? DeepReadonlyObject11303<T>
  : T;

interface DeepReadonlyArray11303<T> extends ReadonlyArray<DeepReadonly11303<T>> {}

type DeepReadonlyObject11303<T> = {
  readonly [P in keyof T]: DeepReadonly11303<T[P]>;
};

type UnionToIntersection11303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11303<T> = UnionToIntersection11303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11303<T extends unknown[], V> = [...T, V];

type TuplifyUnion11303<T, L = LastOf11303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11303<TuplifyUnion11303<Exclude<T, L>>, L>;

type DeepPartial11303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11303<T[P]> }
  : T;

type Paths11303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11303<K, Paths11303<T[K], Prev11303[D]>> : never }[keyof T]
  : never;

type Prev11303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11303 {
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

type ConfigPaths11303 = Paths11303<NestedConfig11303>;

interface HeavyProps11303 {
  config: DeepPartial11303<NestedConfig11303>;
  path?: ConfigPaths11303;
}

const HeavyComponent11303 = memo(function HeavyComponent11303({ config }: HeavyProps11303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11303.displayName = 'HeavyComponent11303';
export default HeavyComponent11303;
