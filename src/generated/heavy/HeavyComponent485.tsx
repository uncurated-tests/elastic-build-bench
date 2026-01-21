'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly485<T> = T extends (infer U)[]
  ? DeepReadonlyArray485<U>
  : T extends object
  ? DeepReadonlyObject485<T>
  : T;

interface DeepReadonlyArray485<T> extends ReadonlyArray<DeepReadonly485<T>> {}

type DeepReadonlyObject485<T> = {
  readonly [P in keyof T]: DeepReadonly485<T[P]>;
};

type UnionToIntersection485<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf485<T> = UnionToIntersection485<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push485<T extends unknown[], V> = [...T, V];

type TuplifyUnion485<T, L = LastOf485<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push485<TuplifyUnion485<Exclude<T, L>>, L>;

type DeepPartial485<T> = T extends object
  ? { [P in keyof T]?: DeepPartial485<T[P]> }
  : T;

type Paths485<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join485<K, Paths485<T[K], Prev485[D]>> : never }[keyof T]
  : never;

type Prev485 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join485<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig485 {
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

type ConfigPaths485 = Paths485<NestedConfig485>;

interface HeavyProps485 {
  config: DeepPartial485<NestedConfig485>;
  path?: ConfigPaths485;
}

const HeavyComponent485 = memo(function HeavyComponent485({ config }: HeavyProps485) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 485) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-485 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H485: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent485.displayName = 'HeavyComponent485';
export default HeavyComponent485;
