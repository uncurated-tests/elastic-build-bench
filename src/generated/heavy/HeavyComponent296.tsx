'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly296<T> = T extends (infer U)[]
  ? DeepReadonlyArray296<U>
  : T extends object
  ? DeepReadonlyObject296<T>
  : T;

interface DeepReadonlyArray296<T> extends ReadonlyArray<DeepReadonly296<T>> {}

type DeepReadonlyObject296<T> = {
  readonly [P in keyof T]: DeepReadonly296<T[P]>;
};

type UnionToIntersection296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf296<T> = UnionToIntersection296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push296<T extends unknown[], V> = [...T, V];

type TuplifyUnion296<T, L = LastOf296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push296<TuplifyUnion296<Exclude<T, L>>, L>;

type DeepPartial296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial296<T[P]> }
  : T;

type Paths296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join296<K, Paths296<T[K], Prev296[D]>> : never }[keyof T]
  : never;

type Prev296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig296 {
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

type ConfigPaths296 = Paths296<NestedConfig296>;

interface HeavyProps296 {
  config: DeepPartial296<NestedConfig296>;
  path?: ConfigPaths296;
}

const HeavyComponent296 = memo(function HeavyComponent296({ config }: HeavyProps296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent296.displayName = 'HeavyComponent296';
export default HeavyComponent296;
