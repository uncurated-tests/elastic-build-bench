'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11653<T> = T extends (infer U)[]
  ? DeepReadonlyArray11653<U>
  : T extends object
  ? DeepReadonlyObject11653<T>
  : T;

interface DeepReadonlyArray11653<T> extends ReadonlyArray<DeepReadonly11653<T>> {}

type DeepReadonlyObject11653<T> = {
  readonly [P in keyof T]: DeepReadonly11653<T[P]>;
};

type UnionToIntersection11653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11653<T> = UnionToIntersection11653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11653<T extends unknown[], V> = [...T, V];

type TuplifyUnion11653<T, L = LastOf11653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11653<TuplifyUnion11653<Exclude<T, L>>, L>;

type DeepPartial11653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11653<T[P]> }
  : T;

type Paths11653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11653<K, Paths11653<T[K], Prev11653[D]>> : never }[keyof T]
  : never;

type Prev11653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11653 {
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

type ConfigPaths11653 = Paths11653<NestedConfig11653>;

interface HeavyProps11653 {
  config: DeepPartial11653<NestedConfig11653>;
  path?: ConfigPaths11653;
}

const HeavyComponent11653 = memo(function HeavyComponent11653({ config }: HeavyProps11653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11653.displayName = 'HeavyComponent11653';
export default HeavyComponent11653;
