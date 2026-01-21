'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11077<T> = T extends (infer U)[]
  ? DeepReadonlyArray11077<U>
  : T extends object
  ? DeepReadonlyObject11077<T>
  : T;

interface DeepReadonlyArray11077<T> extends ReadonlyArray<DeepReadonly11077<T>> {}

type DeepReadonlyObject11077<T> = {
  readonly [P in keyof T]: DeepReadonly11077<T[P]>;
};

type UnionToIntersection11077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11077<T> = UnionToIntersection11077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11077<T extends unknown[], V> = [...T, V];

type TuplifyUnion11077<T, L = LastOf11077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11077<TuplifyUnion11077<Exclude<T, L>>, L>;

type DeepPartial11077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11077<T[P]> }
  : T;

type Paths11077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11077<K, Paths11077<T[K], Prev11077[D]>> : never }[keyof T]
  : never;

type Prev11077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11077 {
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

type ConfigPaths11077 = Paths11077<NestedConfig11077>;

interface HeavyProps11077 {
  config: DeepPartial11077<NestedConfig11077>;
  path?: ConfigPaths11077;
}

const HeavyComponent11077 = memo(function HeavyComponent11077({ config }: HeavyProps11077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11077.displayName = 'HeavyComponent11077';
export default HeavyComponent11077;
