'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11059<T> = T extends (infer U)[]
  ? DeepReadonlyArray11059<U>
  : T extends object
  ? DeepReadonlyObject11059<T>
  : T;

interface DeepReadonlyArray11059<T> extends ReadonlyArray<DeepReadonly11059<T>> {}

type DeepReadonlyObject11059<T> = {
  readonly [P in keyof T]: DeepReadonly11059<T[P]>;
};

type UnionToIntersection11059<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11059<T> = UnionToIntersection11059<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11059<T extends unknown[], V> = [...T, V];

type TuplifyUnion11059<T, L = LastOf11059<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11059<TuplifyUnion11059<Exclude<T, L>>, L>;

type DeepPartial11059<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11059<T[P]> }
  : T;

type Paths11059<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11059<K, Paths11059<T[K], Prev11059[D]>> : never }[keyof T]
  : never;

type Prev11059 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11059<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11059 {
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

type ConfigPaths11059 = Paths11059<NestedConfig11059>;

interface HeavyProps11059 {
  config: DeepPartial11059<NestedConfig11059>;
  path?: ConfigPaths11059;
}

const HeavyComponent11059 = memo(function HeavyComponent11059({ config }: HeavyProps11059) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11059) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11059 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11059: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11059.displayName = 'HeavyComponent11059';
export default HeavyComponent11059;
