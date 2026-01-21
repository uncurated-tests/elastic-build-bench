'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11897<T> = T extends (infer U)[]
  ? DeepReadonlyArray11897<U>
  : T extends object
  ? DeepReadonlyObject11897<T>
  : T;

interface DeepReadonlyArray11897<T> extends ReadonlyArray<DeepReadonly11897<T>> {}

type DeepReadonlyObject11897<T> = {
  readonly [P in keyof T]: DeepReadonly11897<T[P]>;
};

type UnionToIntersection11897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11897<T> = UnionToIntersection11897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11897<T extends unknown[], V> = [...T, V];

type TuplifyUnion11897<T, L = LastOf11897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11897<TuplifyUnion11897<Exclude<T, L>>, L>;

type DeepPartial11897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11897<T[P]> }
  : T;

type Paths11897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11897<K, Paths11897<T[K], Prev11897[D]>> : never }[keyof T]
  : never;

type Prev11897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11897 {
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

type ConfigPaths11897 = Paths11897<NestedConfig11897>;

interface HeavyProps11897 {
  config: DeepPartial11897<NestedConfig11897>;
  path?: ConfigPaths11897;
}

const HeavyComponent11897 = memo(function HeavyComponent11897({ config }: HeavyProps11897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11897.displayName = 'HeavyComponent11897';
export default HeavyComponent11897;
