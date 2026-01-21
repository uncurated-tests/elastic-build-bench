'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly287<T> = T extends (infer U)[]
  ? DeepReadonlyArray287<U>
  : T extends object
  ? DeepReadonlyObject287<T>
  : T;

interface DeepReadonlyArray287<T> extends ReadonlyArray<DeepReadonly287<T>> {}

type DeepReadonlyObject287<T> = {
  readonly [P in keyof T]: DeepReadonly287<T[P]>;
};

type UnionToIntersection287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf287<T> = UnionToIntersection287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push287<T extends unknown[], V> = [...T, V];

type TuplifyUnion287<T, L = LastOf287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push287<TuplifyUnion287<Exclude<T, L>>, L>;

type DeepPartial287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial287<T[P]> }
  : T;

type Paths287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join287<K, Paths287<T[K], Prev287[D]>> : never }[keyof T]
  : never;

type Prev287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig287 {
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

type ConfigPaths287 = Paths287<NestedConfig287>;

interface HeavyProps287 {
  config: DeepPartial287<NestedConfig287>;
  path?: ConfigPaths287;
}

const HeavyComponent287 = memo(function HeavyComponent287({ config }: HeavyProps287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent287.displayName = 'HeavyComponent287';
export default HeavyComponent287;
