'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11584<T> = T extends (infer U)[]
  ? DeepReadonlyArray11584<U>
  : T extends object
  ? DeepReadonlyObject11584<T>
  : T;

interface DeepReadonlyArray11584<T> extends ReadonlyArray<DeepReadonly11584<T>> {}

type DeepReadonlyObject11584<T> = {
  readonly [P in keyof T]: DeepReadonly11584<T[P]>;
};

type UnionToIntersection11584<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11584<T> = UnionToIntersection11584<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11584<T extends unknown[], V> = [...T, V];

type TuplifyUnion11584<T, L = LastOf11584<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11584<TuplifyUnion11584<Exclude<T, L>>, L>;

type DeepPartial11584<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11584<T[P]> }
  : T;

type Paths11584<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11584<K, Paths11584<T[K], Prev11584[D]>> : never }[keyof T]
  : never;

type Prev11584 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11584<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11584 {
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

type ConfigPaths11584 = Paths11584<NestedConfig11584>;

interface HeavyProps11584 {
  config: DeepPartial11584<NestedConfig11584>;
  path?: ConfigPaths11584;
}

const HeavyComponent11584 = memo(function HeavyComponent11584({ config }: HeavyProps11584) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11584) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11584 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11584: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11584.displayName = 'HeavyComponent11584';
export default HeavyComponent11584;
