'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11921<T> = T extends (infer U)[]
  ? DeepReadonlyArray11921<U>
  : T extends object
  ? DeepReadonlyObject11921<T>
  : T;

interface DeepReadonlyArray11921<T> extends ReadonlyArray<DeepReadonly11921<T>> {}

type DeepReadonlyObject11921<T> = {
  readonly [P in keyof T]: DeepReadonly11921<T[P]>;
};

type UnionToIntersection11921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11921<T> = UnionToIntersection11921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11921<T extends unknown[], V> = [...T, V];

type TuplifyUnion11921<T, L = LastOf11921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11921<TuplifyUnion11921<Exclude<T, L>>, L>;

type DeepPartial11921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11921<T[P]> }
  : T;

type Paths11921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11921<K, Paths11921<T[K], Prev11921[D]>> : never }[keyof T]
  : never;

type Prev11921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11921 {
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

type ConfigPaths11921 = Paths11921<NestedConfig11921>;

interface HeavyProps11921 {
  config: DeepPartial11921<NestedConfig11921>;
  path?: ConfigPaths11921;
}

const HeavyComponent11921 = memo(function HeavyComponent11921({ config }: HeavyProps11921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11921.displayName = 'HeavyComponent11921';
export default HeavyComponent11921;
