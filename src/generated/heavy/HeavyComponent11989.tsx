'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11989<T> = T extends (infer U)[]
  ? DeepReadonlyArray11989<U>
  : T extends object
  ? DeepReadonlyObject11989<T>
  : T;

interface DeepReadonlyArray11989<T> extends ReadonlyArray<DeepReadonly11989<T>> {}

type DeepReadonlyObject11989<T> = {
  readonly [P in keyof T]: DeepReadonly11989<T[P]>;
};

type UnionToIntersection11989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11989<T> = UnionToIntersection11989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11989<T extends unknown[], V> = [...T, V];

type TuplifyUnion11989<T, L = LastOf11989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11989<TuplifyUnion11989<Exclude<T, L>>, L>;

type DeepPartial11989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11989<T[P]> }
  : T;

type Paths11989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11989<K, Paths11989<T[K], Prev11989[D]>> : never }[keyof T]
  : never;

type Prev11989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11989 {
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

type ConfigPaths11989 = Paths11989<NestedConfig11989>;

interface HeavyProps11989 {
  config: DeepPartial11989<NestedConfig11989>;
  path?: ConfigPaths11989;
}

const HeavyComponent11989 = memo(function HeavyComponent11989({ config }: HeavyProps11989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11989.displayName = 'HeavyComponent11989';
export default HeavyComponent11989;
