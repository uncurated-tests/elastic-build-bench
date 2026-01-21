'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11671<T> = T extends (infer U)[]
  ? DeepReadonlyArray11671<U>
  : T extends object
  ? DeepReadonlyObject11671<T>
  : T;

interface DeepReadonlyArray11671<T> extends ReadonlyArray<DeepReadonly11671<T>> {}

type DeepReadonlyObject11671<T> = {
  readonly [P in keyof T]: DeepReadonly11671<T[P]>;
};

type UnionToIntersection11671<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11671<T> = UnionToIntersection11671<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11671<T extends unknown[], V> = [...T, V];

type TuplifyUnion11671<T, L = LastOf11671<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11671<TuplifyUnion11671<Exclude<T, L>>, L>;

type DeepPartial11671<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11671<T[P]> }
  : T;

type Paths11671<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11671<K, Paths11671<T[K], Prev11671[D]>> : never }[keyof T]
  : never;

type Prev11671 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11671<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11671 {
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

type ConfigPaths11671 = Paths11671<NestedConfig11671>;

interface HeavyProps11671 {
  config: DeepPartial11671<NestedConfig11671>;
  path?: ConfigPaths11671;
}

const HeavyComponent11671 = memo(function HeavyComponent11671({ config }: HeavyProps11671) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11671) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11671 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11671: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11671.displayName = 'HeavyComponent11671';
export default HeavyComponent11671;
