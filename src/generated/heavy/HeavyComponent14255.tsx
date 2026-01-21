'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14255<T> = T extends (infer U)[]
  ? DeepReadonlyArray14255<U>
  : T extends object
  ? DeepReadonlyObject14255<T>
  : T;

interface DeepReadonlyArray14255<T> extends ReadonlyArray<DeepReadonly14255<T>> {}

type DeepReadonlyObject14255<T> = {
  readonly [P in keyof T]: DeepReadonly14255<T[P]>;
};

type UnionToIntersection14255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14255<T> = UnionToIntersection14255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14255<T extends unknown[], V> = [...T, V];

type TuplifyUnion14255<T, L = LastOf14255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14255<TuplifyUnion14255<Exclude<T, L>>, L>;

type DeepPartial14255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14255<T[P]> }
  : T;

type Paths14255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14255<K, Paths14255<T[K], Prev14255[D]>> : never }[keyof T]
  : never;

type Prev14255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14255 {
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

type ConfigPaths14255 = Paths14255<NestedConfig14255>;

interface HeavyProps14255 {
  config: DeepPartial14255<NestedConfig14255>;
  path?: ConfigPaths14255;
}

const HeavyComponent14255 = memo(function HeavyComponent14255({ config }: HeavyProps14255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14255.displayName = 'HeavyComponent14255';
export default HeavyComponent14255;
